import { useSearchParams } from 'react-router-dom';

import AuthLayout from 'layouts/AuthLayout/AuthLayout';
import ResetForm from 'components/AuthForms/ResetForm';

const ResetPage = () => {
  const [searchParams] = useSearchParams();

  const id = searchParams.get('id');
  const pwdToken = searchParams.get('pwd_token');

  return (
    <AuthLayout>
      <ResetForm id={id} pwdToken={pwdToken} />
    </AuthLayout>
  );
};

export default ResetPage;
