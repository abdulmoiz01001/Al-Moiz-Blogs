
export const createSearchSlice = (set) => (
    
    {    
          filteredData: [],
        
          searchData : [],
       
          setSearchData: (data) => set({ searchData: data }),
          setFilteredData: (data) => set({ filteredData: data }),

    }
)