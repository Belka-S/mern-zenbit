import { useAuth } from 'utils/hooks';
import Container from 'components/shared/Container/Container';
import ItemsList from 'components/ItemsList/ItemsList';
import { Title } from 'components/ItemsList/ItemsList.styled';

const ItemsPage = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Container m="80px 0 0 0">
      <ItemsList />
      {!isLoggedIn && <Title>Please login to access!</Title>}
    </Container>
  );
};

export default ItemsPage;
