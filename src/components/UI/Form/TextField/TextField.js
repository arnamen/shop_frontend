import React, {useReducer, useEffect} from 'react'
import {v4} from 'uuid';
import InputMask from 'react-input-mask';

import {validate} from '../../../../utils/validator';

import './TextField.css';;

const inputReducer = (state, action) => {
    switch (action.type) {
      case 'CHANGE':
        return {
          ...state,
          value: action.val,
          isValid: action.validators ? validate(action.val, action.validators) : true
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
        <InputMask mask={props.mask} value={props.value} onChange={changeHandler} alwaysShowMask maskOptions={{maskChar:'.'}}>
          {(inputProps => <input type={props.type || 'text'} 
          className='TextField' 
          id={props.id || ''}
          placeholder={props.placeholder || ''}
          defaultValue={props.defaultValue}
          required={props.required || false}
          key={props.autoupdate ? v4(): undefined}
          readOnly={props.value}
          {...inputProps}/>)}
        </InputMask>
    )
}
