import {useContext, useState, useEffect} from 'react'
import { ReactReduxContext } from 'react-redux'

export default function useItemsFilter( items = [] ) {
const { store } = useContext(ReactReduxContext);
  const { getState, subscribe } = store;
  const [ storeState, setStoreState ] = useState(getState());
  
  // subscribe only once
  useEffect(() => subscribe(
    () => setStoreState(getState())
  , []))

  const filterItems = ( items ) => {
    const filteredItems = items.filter(item => {
      let addItem = true;
      //если в pros переданы категории - проверить отфильтрована ли каждая категория
      if (storeState.filters.categories.length)
          addItem = !!item.categories.find(category =>
  
            storeState.filters.categories.find(
                  categoriesInFilter => categoriesInFilter === category
              )
          ) && addItem;
      //отфильтровать товары, которые не попадают в отфильтрованные категории
      //и под фильтры тегов
      if (storeState.filters.tagsFilters.length)
          addItem = Object.keys(item.tags).find(tag =>
  
            storeState.filters.tagsFilters.find(
                  tagFilter => item.tags[tag] === tagFilter
              )
          ) && addItem;
      return addItem;
  
  })
  return filteredItems;
  }
  
  if(!Array.isArray(items)) return [null, filterItems];

  const filteredItems = Array.isArray(items) ? filterItems(items) : null;

  return [filteredItems, filterItems];
}
