import styled from 'styled-components';

const StyledDetailedImg = styled.div`
  width: clamp(300px, 34.6vw, 497px);
  aspect-ratio: 1 / 1.15;
  height: auto;
  background-image: url('https://www.artic.edu/iiif/2/e966799b-97ee-1cc6-bd2f-a94b4b8bb8f9/full/843,/0/default.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default StyledDetailedImg;
