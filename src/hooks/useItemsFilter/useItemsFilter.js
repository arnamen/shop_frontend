import {useContext, useState, useEffect} from 'react'
import { ReactReduxContext } from 'react-redux'

export default function useItemsFilter( items = [] ) {
const { store } = useContext(ReactReduxContext);
  const { getState, subscribe } = store;
  const [ storeState, setStoreState ] = useState(getState());
  const tagsFilters = storeState.filters.tagsFilters;
  const categoriesFilters = storeState.filters.categories;
  console.log('-------------------')
  console.log(tagsFilters)
  // subscribe only once
  useEffect(() => subscribe(
    () => setStoreState(getState())
  , []))

  const filterItems = ( items ) => {

    const filteredItems = items.filter(item => {
      let addItem = true;
      //если в props переданы категории - проверить отфильтрована ли каждая категория
      if (categoriesFilters.length)
          addItem = !!item.categories.find(category =>
  
            categoriesFilters.find(
                  categoriesInFilter => categoriesInFilter === category
              )
          ) && addItem;
      
        Object.keys(tagsFilters).forEach(tagName => {

          if(tagsFilters[tagName].length)
          
          //проверить содержат ли имеющиеся фильтры теги, указаные в item
          //если до - показать товар, инче - скрыть
          addItem = !!tagsFilters[tagName].find(filterString => {
            return filterString === item.tags[tagName];
          }) && addItem;
        })

      return addItem;
  
  })
  
  return filteredItems;
  }
  
  const filteredItems = Array.isArray(items) ? filterItems(items) : null;

  return [filteredItems, filterItems];
}
