import styled from 'styled-components';

const StyledHeader = styled.div`
  height: 127px;
  width: 100%;
  background: linear-gradient(90deg, #343333 38.05%, #484848 69.22%, #282828 98.98%);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 100px;
  }

  @media (max-width: 390px) {
    height: 80px;
  }
`;

const HeaderContentBox = styled.div`
  width: clamp(700px, 90vw, 1280px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: 0px;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 500px) {
    width: 95%;
  }
`;

export { StyledHeader, HeaderContentBox };
