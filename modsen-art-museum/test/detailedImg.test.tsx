import DetailedImg from '@components/detailedImg/detailedImg';
import { render, screen } from '@testing-library/react';
import theme from '@utils/theme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { ThemeProvider } from 'styled-components';

const mockStore = configureStore([]);

describe('DetailedImg Component', () => {
  const store = mockStore({});

  test('renders correctly', () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <DetailedImg
            id={1}
            src="https://example.com/image.jpg"
            isFavorite={false}
            onToggleFavorite={() => {}}
          />
        </ThemeProvider>
      </Provider>
    );

    const detailedImg = screen.getByTestId('styled-detailed-img');
    expect(detailedImg).toBeInTheDocument();

    expect(detailedImg).toHaveStyle(`background-image: url(https://example.com/image.jpg)`);
  });
});
