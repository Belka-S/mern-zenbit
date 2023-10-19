import { useSelector } from 'react-redux';
import * as selectors from 'store/seletors';

export const useItems = () => {
  const items = useSelector(selectors.selectItems);
  const filterValue = useSelector(selectors.selectFilterValue);
  const error = useSelector(selectors.selectError);
  const isLoading = useSelector(selectors.selectIsLoading);

  return { items, filterValue, error, isLoading };
};
