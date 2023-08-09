import { Link } from 'react-router-dom';
import LogoDark from '../../../../../assets/images/logos/dark-logo.svg';
import { styled } from '@mui/material';

const LinkStyled = styled(Link)(() => ({
  height: '70px',
  width: '180px',
  overflow: 'hidden',
  display: 'block',
}));

const Logo = () => {
  return (
    <LinkStyled to="/">
      <img src={LogoDark} alt="Logo Dark" />
    </LinkStyled>
  )
};

export default Logo;
