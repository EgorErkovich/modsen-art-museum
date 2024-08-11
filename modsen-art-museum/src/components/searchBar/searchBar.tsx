import StyledInput from '@components/searchBar/styled';
import { IApiCardData, IRootState, validationSchema } from '@index';
import { setCards, setCurrentPage, setInputValue, setTotalPages } from '@store';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const SearchBar: React.FC = () => {
  const [inputValue, setInputValueState] = useState<string>('');
  const [debouncedInputValue, setDebouncedInputValue] = useState<string>('');
  const dispatch = useDispatch();
  const currentPage = useSelector((state: IRootState) => state.pagination.currentPage);

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
  }, [debouncedInputValue, currentPage, dispatch]);

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
