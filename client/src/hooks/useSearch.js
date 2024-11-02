// hooks/useSearch.js
import { useEffect } from 'react';
import { useAppStore } from '../store';

const useSearch = (searchTerm) => {
  const { searchData, setSearchData ,setFilteredData  } = useAppStore((state) => state);

  useEffect(() => {
    if (searchTerm) {
        console.log('searchTerm', searchTerm);
      const filteredData = searchData.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filteredData);
    } else {
      setSearchData(searchData);
    }
  }, [searchTerm]);

 
};

export default useSearch;
