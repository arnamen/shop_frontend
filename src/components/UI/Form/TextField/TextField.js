import React, {useReducer, useEffect} from 'react'
import {v4} from 'uuid';
import InputMask from 'react-input-mask';

import {validate} from '../../../../utils/validator';

import classes from './TextField.module.css';

const inputReducer = (state, action) => {

    switch (action.type) {
      case 'CHANGE':
        return {
          ...state,
          value: action.val,
          isValid: action.validators ? validate(action.val, action.validators, action.mask) : true
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
      const className = [classes['TextField']];
      if(!isValid && inputState.isTouched) className.push(classes['TextField-invalid']);
      props.className && className.push(props.className);
      useEffect(() => {
        if(!onInput) return;
        onInput(id, value, isValid)
      }, [id, value, isValid, onInput]);
    
      const touchHandler = event => {
        dispatch({
          type: 'TOUCH',
        });
      };

      const changeHandler = event => {
        dispatch({
          type: 'CHANGE',
          val: event.target.value,
          validators: props.validators,
          mask: props.mask
        });
      };

    return (
        props.mask 
        ? <InputMask mask={props.mask} 
        value={props.value} 
        onChange={changeHandler} 
        alwaysShowMask 
        onFocus={touchHandler}
        readOnly={!!props.value}>
          {(inputProps => <input type={props.type || 'text'} 
          className={className.join(' ')} 
          id={props.id || ''}
          placeholder={props.placeholder || ''}
          defaultValue={props.defaultValue}
          required={props.required || false}
          key={props.autoupdate ? v4(): undefined}
          {...inputProps}/>)}
        </InputMask>
        : <input type={props.type || 'text'} 
        onChange={changeHandler}
        className={className.join(' ')} 
        id={props.id || ''}
        placeholder={props.placeholder || ''}
        defaultValue={props.defaultValue}
        value={props.value}
        required={props.required || false}
        key={props.autoupdate ? v4(): undefined}
        readOnly={!!props.value}
        onClick={props.onClick}
        onFocus={touchHandler}/>
    )
}
