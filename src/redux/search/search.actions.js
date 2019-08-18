import { useDispatch } from 'react-redux';
import { GET_RESULTS, LOADING } from './search.types';
import { useSearchService } from 'services/search.service';

export const useSearchActions = () => {
  const dispatch = useDispatch();
  const { searchResults } = useSearchService();

  const getResults = (text, page) => {
    console.log(text);
    if (!text) {
      return;
    }
    dispatch({
      type: LOADING,
      payload: {
        isSearching: true,
        isRendered: true,
        text,
      },
    });
    searchResults(`keywords=${text}?page=${page}`).then(res => {
      console.log(res);
      dispatch({
        type: GET_RESULTS,
        payload: {
          data: res.data.providers,
          isSearching: false,
          totalPage: res.headers['x-list-total-pages'],
          page,
          text,
        },
      });
    });
  };

  return { getResults };
};
