import { useState } from 'react';

import AuthLayout from 'layouts/AuthLayout/AuthLayout';
import SignupForm from 'components/AuthForms/SignupForm';
import Modal from 'components/Modal/Modal';
import VerifyForm from 'components/AuthForms/VerifyForm';

const SignupPage = () => {
  const [isVerify, setIsVerify] = useState(false);

  return (
    <AuthLayout>
      <SignupForm setIsVerify={setIsVerify} />

      {isVerify && (
        <Modal onClick={() => setIsVerify(!isVerify)}>
          <VerifyForm />
        </Modal>
      )}
    </AuthLayout>
  );
};

export default SignupPage;
