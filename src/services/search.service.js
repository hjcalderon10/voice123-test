import axios from 'axios';

const SERVER =
  'https://api.sandbox.voice123.com/providers/search/?service=voice_over&';

//query example
//keywords=Conversational?page=1'
export const useSearchService = () => {
  const searchResults = query => {
    return axios.get(`${SERVER}${query}`);
  };
  return { searchResults };
};
