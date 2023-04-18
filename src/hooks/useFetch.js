import { useState, useEffect, useCallback, useReducer } from "react";

import { API } from "../API";
import { fetchReducer, initialState } from "../reducers/fetch";
import { ACTIONS } from "../actions/fetch";

export const useFetch = (endpoint) => {
  /*
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  */

  const [state, dispatch] = useReducer(fetchReducer, initialState); //state es el estado.
  // dispatch -> acciones con las cuales actualizamos nuestro estado.

  const getData = useCallback(async () => {
    try {
      const { data } = await API.get(`${endpoint}`);
      dispatch({ type: ACTIONS.SET_DATA, payload: data });
    } catch (e) {
      dispatch({ type: ACTIONS.SET_ERROR });
      console.log(e); //esto no es lo mejor, se hace con kibana
    }
  }, [endpoint]);

  useEffect(() => {
    getData();
  }, [endpoint, getData]);

  //return [data, loading, error];
  return state;
};
