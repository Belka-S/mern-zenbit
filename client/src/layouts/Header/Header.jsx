import { Suspense } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
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
  const location = useLocation();

  const { isLoggedIn } = useAuth();

  const isButtons = location.pathname === '/';

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
        {isLoggedIn && <Button onClick={handleLogOut}>Log out</Button>}
        {isButtons && (
          <>
            <Button onClick={handleLogin}>Log in</Button>
            <Button className="signup" onClick={handleSignup}>
              Sign up
            </Button>
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
