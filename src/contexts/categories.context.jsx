import { createContext, useState, useEffect } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';

export const CategoriesContext = createContext({
  categoriesMap: [],
});

export const CategoriesProvider = ({ children }) => {
  //notice i'm using an empty object instead of null ie empty array because when data is stored in the empty object i will want to use the key of the array
  const [categoriesMap, setCategoriesMap] = useState({});

  //this is a typical way to call async functions using a useEffect hook
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();

      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);
  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
