import { Suspense } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { StyledHeader } from './Header.styled';
import { logoutThunk } from 'store/auth/authOperations';
import { cleanContacts, setActiveContact } from 'store/contacts/contactsSlice';
import { setFilterValue } from 'store/contacts/contactsSlice';
import { useAuth } from 'utils/hooks/useAuth';
// import { loginThunk } from 'store/auth/authOperations';
import OvalLoader from 'components/shared/Loader/OvalLoader';
import Button from 'components/shared/Button/Button';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  const handleLogin = () => {
    navigate('/signin', { replace: true });
  };

  const handleSignup = () => {
    navigate('/signup', { replace: true });
  };

  const handleLogOut = () => {
    dispatch(logoutThunk());
    dispatch(cleanContacts());
    dispatch(setActiveContact(null));
    dispatch(setFilterValue(''));
  };

  return (
    <>
      <StyledHeader>
        {isLoggedIn ? (
          <Button onClick={handleLogOut}>Log out</Button>
        ) : (
          <>
            <Button onClick={handleLogin}>Log in</Button>
            <Button onClick={handleSignup}>Sign up</Button>
          </>
        )}
      </StyledHeader>

      <Suspense fallback={<OvalLoader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
