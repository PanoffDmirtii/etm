import React from "react";

export const TYPES = {
  GET_DATA: 'GET_DATA',
  SET_DATA: 'SET_DATA',

}

export const initialState = {
  data: []
};

export function reducer(state, action) {
  switch (action.type) {
    case TYPES.SET_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

export const ContextApp = React.createContext();
