import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import GridWrap from 'components/shared/GridWrap/GridWrap';
import { fetchItemsThunk } from 'store/items/itemsOperations';
import { useItems } from 'utils/hooks';
import { CardWrap, Title } from './ItemsList.styled';

const ItemsList = () => {
  const dispatch = useDispatch();
  const { items } = useItems();

  useEffect(() => {
    dispatch(fetchItemsThunk());
  }, [dispatch]);

  return (
    <>
      <Title>Open Deals</Title>
      <GridWrap>
        {items.map(el => (
          <CardWrap
            key={el.imageUrl}
            style={{ backgroundImage: `url(${el.imageUrl})` }}
          >
            <h2>{el.name}</h2>
            <GridWrap p="0" rg="10px" cg="60px" gtc="1fr 1fr 1fr">
              <span>{el.price}</span>
              <span>{el.percent}</span>
              <span>{el.sold}</span>
              <span>{el.ticket}</span>
              <span>{el.days}</span>
            </GridWrap>
          </CardWrap>
        ))}
      </GridWrap>
    </>
  );
};

export default ItemsList;
