import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import DetailInfoPage from '../src/pages/detailInfoPage/detailInfoPage';

const mockStore = configureStore([]);

describe('DetailInfoPage Component', () => {
  const store = mockStore({ favorites: { favoriteIds: [1, 2, 3] } });

  test('renders loading state initially', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/detail/1']}>
          <DetailInfoPage />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
