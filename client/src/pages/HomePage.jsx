import Container from 'components/shared/Container/Container';
import Button from 'components/shared/Button/Button';

const HomePage = () => {
  return (
    <Container h="100vh" d="flex" fd="column" jc="center">
      <Container d="flex" fd="column" ai="center" ta="center">
        <h1>The chemical negatively charged</h1>
        <p>
          Numerous calculations predict, and experiments confirm, that the force
          field reflects the beam, while the mass defect is not formed. The
          chemical compound is negatively charged. Twhile the mass defect is
        </p>
        <Button>Get Started</Button>
      </Container>
    </Container>
  );
};

export default HomePage;
