import React, {useReducer, useEffect} from 'react'
import {v4} from 'uuid';

import './TextField.css';;

const inputReducer = (state, action) => {
    switch (action.type) {
      case 'CHANGE':
        return {
          ...state,
          value: action.val,
          isValid: false//validate(action.val, action.validators)
        };
      case 'TOUCH': {
        return {
          ...state,
          isTouched: true
        }
      }
      default:
        return state;
    }
  };

export default function TextField( props ) {

    const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.initialValue || '',
        isTouched: false,
        isValid: props.initialValid || false
      });
    
      const { id, onInput } = props;
      const { value, isValid } = inputState;
    
      useEffect(() => {
        onInput(id, value, isValid)
      }, [id, value, isValid, onInput]);
    
      const changeHandler = event => {
        dispatch({
          type: 'CHANGE',
          val: event.target.value,
          validators: props.validators
        });
      };
    

    return (
        <input type={props.type || 'text'} 
        className='TextField' 
        onChange={changeHandler} 
        id={props.id || ''}
        placeholder={props.placeholder || ''}
        defaultValue={props.defaultValue}
        required={props.required || false}
        key={props.autoupdate ? v4(): undefined}
        onClick={props.onClick}
        value={props.value}
        readOnly={props.value}/>
    )
}
