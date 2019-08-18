import { GET_RESULTS } from './search.types';

const initialSettings = {
  data: [],
  isSearching: false,
  page: 1,
  totalPage: 0,
  isRendered: false,
  text: '',
};

const searchReducer = (state = initialSettings, action) => {
  return {
    ...state,
    ...action.payload,
  };
};

export default searchReducer;
