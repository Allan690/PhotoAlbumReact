import React from "react";
import axios from "./axiosConfig";

const initialState = { photos: [] };
const store = React.createContext(null);
const { Provider } = store;

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PHOTOS":
      return {
        ...state,
        photos: action.payload,
      };
    default:
      return new Error();
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const fetchPhotos = async (id = 2) => {
    const result = await axios.request({
      method: "get",
      url: `/${id}/photos?_limit=20`,
    });
    const { data } = result;
    // @ts-ignore
    dispatch({
      type: "SET_PHOTOS",
      payload: data,
    });
  };

  const actions = {
    fetchPhotos,
  };

  return (
    <Provider
      value={{
        state,
        actions,
      }}
    >
      {children}
    </Provider>
  );
};

export function usePhotoState() {
  return React.useContext(store).state;
}

export function usePhotoActions() {
  return React.useContext(store).actions;
}

export { store, AppProvider };
