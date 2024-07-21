import styled from 'styled-components';

const HeaderFooterContentBox = styled.div`
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

export default HeaderFooterContentBox;
