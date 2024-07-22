import styled from 'styled-components';

const LogoBox = styled.div`
  display: flex;
  gap: 7px;
  align-items: flex-end;
`;

const LogoImgBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  margin-right: 4px;
`;

const LogoRoof = styled.svg`
  width: 45px;
  height: 15px;

  path {
    fill: transparent;
    stroke: #e0a449;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;

const LogoColumn = styled.svg`
  width: 2px;
  height: 20px;

  path {
    stroke: #e0a449;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;

const LogoColumnBox = styled.div`
  display: flex;
  gap: 8px;
`;

const LogoFoundation = styled.svg`
  width: 50px;
  height: 2px;

  path {
    fill: none;
    stroke: #e0a449;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;

const LogoTextBox = styled.div`
  display: flex;
  gap: 7px;
  align-items: flex-end;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const LogoMuseumText = styled.svg`
  width: 103px;
  height: 15px;

  path {
    fill: ${(props) => props.color || 'black'};
  }
`;

const LogoArtText = styled.svg`
  width: 30px;
  height: 14px;

  path {
    fill: #e0a449;
  }
`;

export {
  LogoBox,
  LogoImgBox,
  LogoRoof,
  LogoColumnBox,
  LogoColumn,
  LogoFoundation,
  LogoMuseumText,
  LogoArtText,
  LogoTextBox,
};
