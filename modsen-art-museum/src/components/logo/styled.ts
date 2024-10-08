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
    stroke: ${({ theme }) => theme.colors.secondary};
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;

const LogoColumn = styled.svg`
  width: 2px;
  height: 20px;

  path {
    stroke: ${({ theme }) => theme.colors.secondary};
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
    stroke: ${({ theme }) => theme.colors.secondary};
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;

const LogoTextBox = styled.div`
  position: relative;
  bottom: 1px;
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
    fill: ${({ theme }) => theme.colors.secondary};
  }
`;

export {
  LogoArtText,
  LogoBox,
  LogoColumn,
  LogoColumnBox,
  LogoFoundation,
  LogoImgBox,
  LogoMuseumText,
  LogoRoof,
  LogoTextBox,
};
