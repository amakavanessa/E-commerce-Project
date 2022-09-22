import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => state.categories;

//Creating a memorize Selector
export const selectCategories = createSelector(
  //input selector
  [selectCategoryReducer],
  //output selector
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, { title, items }) => {
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
