import DetailedImg from '@components/detailedImg/detailedImg';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('DetailedImg Component', () => {
  const store = mockStore({});

  test('renders correctly', () => {
    render(
      <Provider store={store}>
        <DetailedImg
          id={1}
          src="https://example.com/image.jpg"
          isFavorite={false}
          onToggleFavorite={() => {}}
        />
      </Provider>
    );

    // Проверяем, что компонент рендерится
    const detailedImg = screen.getByTestId('styled-detailed-img');
    expect(detailedImg).toBeInTheDocument();

    // Проверяем, что изображение загружено
    expect(detailedImg).toHaveStyle(`background-image: url(https://example.com/image.jpg)`);
  });
});
