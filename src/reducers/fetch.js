// Una funcion pura: Para una entrada X retorna una salida Y.
// Siempre que tenga la misma entrada, retorna la misma salida
// SIEMPRE RETORNA ALGO.

//Un Reducer tiene que ser una funcion PURA.
//Cuando los estados empiezan a depender entre si, tenemos que encapsularlos con un reducer.

import { ACTIONS } from "../actions/fetch";

export const initialState = {
  loading: true,
  error: false,
  data: {},
};

export const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_DATA:
      return {
        loading: false,
        error: false,
        data: {
          info: action.payload.info,
          results: action.payload.results,
        },
      };
    case ACTIONS.SET_ERROR:
      return {
        ...initialState,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};
