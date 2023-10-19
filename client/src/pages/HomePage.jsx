import { useNavigate } from 'react-router-dom';

import MainLayout from 'layouts/MainLayout/MainLayout';
import Button from 'components/shared/Button/Button';

const HomePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/demo', { replace: true });
  };

  return (
    <MainLayout>
      <h1>The chemical negatively charged</h1>
      <p>
        Numerous calculations predict, and experiments confirm, that the force
        field reflects the beam, while the mass defect is not formed. The
        chemical compound is negatively charged. Twhile the mass defect is
      </p>
      <Button onClick={handleGetStarted}>Get Started</Button>
    </MainLayout>
  );
};

export default HomePage;
