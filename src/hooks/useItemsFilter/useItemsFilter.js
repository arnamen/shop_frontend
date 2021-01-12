import {useContext, useState, useEffect} from 'react'
import { ReactReduxContext } from 'react-redux'

export default function useItemsFilter( items = [] ) {
const { store } = useContext(ReactReduxContext);
  const { getState, subscribe } = store;
  const [ storeState, setStoreState ] = useState(getState());
  const [availableFilters, setAvailableFilters] = useState(null);
  const tagsFilters = storeState.filters.tagsFilters;
  const categoriesFilters = storeState.filters.categories;

  // subscribe only once
  useEffect(() => subscribe(
    () => setStoreState(getState())
  , []))

    //получить все возможные теги из товаров
    //для фильтрации
    const extractedFilters = {
      categories: []
    };
    storeState.content.content.forEach(item => {

        Object.keys(item.tags)
            .forEach(key => {
                if (!extractedFilters[key]) extractedFilters[key] = [];
                //добавить теги в фильтры
                if(!extractedFilters[key].includes(item.tags[key])) extractedFilters[key].push(item.tags[key]);
            });
        //добавить категории в фильтры
        extractedFilters.categories = [...new Set([...(extractedFilters.categories || []), ...item.categories])]
    });

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
  if(!availableFilters) setAvailableFilters(extractedFilters);
  return [filteredItems, filterItems, availableFilters || extractedFilters];
}
