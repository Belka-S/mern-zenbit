import { AuthContainer } from './AuthLayout.styled';

const AuthLayout = ({ children }) => {
  return (
    <AuthContainer>
      <div className="back"></div>
      {children}
    </AuthContainer>
  );
};

export default AuthLayout;
