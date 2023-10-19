import { useState } from 'react';

import Container from 'components/shared/Container/Container';
import SignupForm from 'components/AuthForms/SignupForm';
import Modal from 'components/Modal/Modal';
import VerifyForm from 'components/AuthForms/VerifyForm';

const SignupPage = () => {
  const [isVerify, setIsVerify] = useState(false);

  return (
    <Container w="550px" p="0" m="0 0 0 auto">
      <SignupForm setIsVerify={setIsVerify} />

      {isVerify && (
        <Modal onClick={() => setIsVerify(!isVerify)}>
          <VerifyForm />
        </Modal>
      )}
    </Container>
  );
};

export default SignupPage;
