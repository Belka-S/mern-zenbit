import { useState } from 'react';

import AuthLayout from 'layouts/AuthLayout/AuthLayout';
import SigninForm from 'components/AuthForms/SigninForm';
import ForgotForm from 'components/AuthForms/ForgotForm';
import Modal from 'components/Modal/Modal';
import VerifyForm from 'components/AuthForms/VerifyForm';

const SigninPage = () => {
  const [isVerify, setIsVerify] = useState(false);
  const [isForgot, setIsForgot] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <AuthLayout>
      <SigninForm
        setIsVerify={setIsVerify}
        setIsForgot={setIsForgot}
        setEmail={setEmail}
      />

      {isVerify && (
        <Modal onClick={() => setIsVerify(!isVerify)}>
          <VerifyForm />
        </Modal>
      )}

      {isForgot && (
        <Modal onClick={() => setIsForgot(!isForgot)}>
          <ForgotForm setIsForgot={setIsForgot} email={email} />
        </Modal>
      )}
    </AuthLayout>
  );
};

export default SigninPage;
