import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { setCards, setTotalPages, setCurrentPage, setInputValue } from '@store';
import { IRootState } from '@index';
import StyledInput from '@components/searchBar/styled';

export interface IApiCardData {
  id: number;
  title: string;
  artist_display: string;
  image_id: string;
  is_public_domain: boolean;
}

const SearchBar: React.FC = () => {
  const [inputValue, setInputValueState] = useState<string>('');
  const [debouncedInputValue, setDebouncedInputValue] = useState<string>('');
  const dispatch = useDispatch();
  const currentPage = useSelector((state: IRootState) => state.pagination.currentPage);

  const validationSchema = Yup.object().shape({
    searchQuery: Yup.string()
      .matches(/^[A-Za-z\s-]*$/, 'Only latin letters, spaces, and dashes are allowed')
      .nullable(),
  });

  const handleSubmit = () => {
    dispatch(setCurrentPage(1));
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedInputValue(inputValue);
      dispatch(setInputValue(inputValue));
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [inputValue, dispatch]);

  useEffect(() => {
    if (debouncedInputValue) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://api.artic.edu/api/v1/artworks/search?q=${debouncedInputValue.replace(' ', '%20')}&page=${currentPage}&limit=3`
          );

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const data = await response.json();
          const totalPages = data.pagination.total_pages;
          dispatch(setTotalPages(totalPages));

          const artworkIds = data.data.map((artwork: IApiCardData) => artwork.id).join(',');

          if (artworkIds) {
            const artworksResponse = await fetch(
              `https://api.artic.edu/api/v1/artworks?ids=${artworkIds}&fields=id,title,artist_display,image_id,is_public_domain`
            );

            if (!artworksResponse.ok) {
              throw new Error('Network response was not ok for artwork details');
            }

            const artworksData = await artworksResponse.json();
            const artworks = artworksData.data.map((artwork: IApiCardData) => ({
              id: artwork.id,
              title: artwork.title,
              artist_display: artwork.artist_display,
              image_id: artwork.image_id,
              is_public_domain: artwork.is_public_domain,
            }));

            dispatch(setCards(artworks));
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      const isValidUserInput = validationSchema.isValidSync({ searchQuery: debouncedInputValue });

      if (debouncedInputValue.length > 0 && isValidUserInput) {
        fetchData();
      }
    }
  }, [debouncedInputValue, currentPage, dispatch, validationSchema]);

  return (
    <Formik
      initialValues={{ searchQuery: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue }) => {
        const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          const { value } = event.target;
          setInputValueState(value);
          setFieldValue('searchQuery', value);
        };

        return (
          <Form style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                width: 'auto',
              }}
            >
              <Field
                name="searchQuery"
                as={StyledInput}
                type="text"
                placeholder="Search art, artist, work..."
                onChange={handleInputChange}
                value={inputValue}
              />
              <ErrorMessage
                name="searchQuery"
                render={(msg) => (
                  <div style={{ color: 'red', marginTop: '8px', marginLeft: '5px' }}>{msg}</div>
                )}
              />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SearchBar;
