import {
  ErrorText,
  FormContainer,
  InputContainer,
  StyledInput,
} from '@components/searchBar/styled';
import { IRootState, validationSchema } from '@index';
import { AppDispatch, setCurrentPage, setInputValue } from '@store';
import { fetchArtworksSearchBar } from '@utils/api';
import { DEBOUNCE_TIME } from '@utils/constants';
import { ErrorMessage, Field, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const handleInputChange = (
  setInputValueState: React.Dispatch<React.SetStateAction<string>>,
  setFieldValue: (field: string, value: string) => void
) => {
  return (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValueState(value);
    setFieldValue('searchQuery', value);
  };
};

const handleSubmit = (dispatch: AppDispatch) => {
  return () => {
    dispatch(setCurrentPage(1));
  };
};

const SearchBar: React.FC = () => {
  const [inputValue, setInputValueState] = useState<string>('');
  const [debouncedInputValue, setDebouncedInputValue] = useState<string>('');
  const dispatch = useDispatch();
  const currentPage = useSelector((state: IRootState) => state.pagination.currentPage);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedInputValue(inputValue);
      dispatch(setInputValue(inputValue));
    }, DEBOUNCE_TIME);

    return () => clearTimeout(timeoutId);
  }, [inputValue, dispatch]);

  useEffect(() => {
    if (debouncedInputValue) {
      const isValidUserInput = validationSchema.isValidSync({ searchQuery: debouncedInputValue });

      if (debouncedInputValue.length > 0 && isValidUserInput) {
        fetchArtworksSearchBar(debouncedInputValue, currentPage, dispatch);
      }
    }
  }, [debouncedInputValue, currentPage, dispatch]);

  return (
    <Formik
      initialValues={{ searchQuery: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit(dispatch)}
    >
      {({ setFieldValue }) => (
        <FormContainer>
          <InputContainer>
            <Field
              name="searchQuery"
              as={StyledInput}
              type="text"
              placeholder="Search art, artist, work..."
              onChange={handleInputChange(setInputValueState, setFieldValue)}
              value={inputValue}
            />
            <ErrorMessage name="searchQuery" render={(msg) => <ErrorText>{msg}</ErrorText>} />
          </InputContainer>
        </FormContainer>
      )}
    </Formik>
  );
};

export default SearchBar;
