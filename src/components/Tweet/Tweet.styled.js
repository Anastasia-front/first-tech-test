import styled from 'styled-components';
export const Item = styled.div`
  margin: 20;
`;

export const Box = styled.div`
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  position: relative;
`;
export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
  background: url(../../img/Logo.png);
`;
export const Picture = styled.img`
  position: absolute;
  width: 308px;
  height: 168px;
  left: 36px;
  top: 28px;
  background: url(../../img/picture2.png);
`;
export const AvatarWrapper = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  top: 180px;
  left: 150px;

  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
  z-index: 1;
`;
export const Avatar = styled.img`
  position: absolute;
  top: 9.5px;
  left: 9.5px;
  width: 62px;
  height: 62px;

  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
  z-index: 1;
`;
export const Line = styled.div`
  position: absolute;
  width: 380px;
  height: 8px;
  left: 0px;
  top: 214px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
  z-index: 0;
`;

export const Text = styled.div`
  margin-top: 64px;
  p {
    font-family: 'Montserrat, sans-serif';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    text-transform: uppercase;
    text-align: center;

    color: #ebd8ff;
  }
`;
export const Button = styled.button`
  color: '#000';
  position: absolute;
  left: ${props => (props.condition ? '130px' : '110px')};
  top: 374px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  font-family: 'Montserrat, sans-serif';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  border-style: none;

  background: ${props => (props.condition ? '#EBD8FF' : '#5CD3A8')};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
`;
