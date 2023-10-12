import { createSlice } from "@reduxjs/toolkit";

const favourites = localStorage.getItem("favourites") !== null ? JSON.parse(localStorage.getItem("favourites")) : [];
export const favouriteSlice = createSlice({
  name: "favourites",
  initialState: {
    favourites: favourites,
  },
  reducers: {
    addFavourite: (state, action) => {
      if (state.favourites.some(fav => fav === action.payload)) state.favourites = [...state.favourites]
      state.favourites = [...state.favourites, action.payload]
      localStorage.setItem("favourites", JSON.stringify(state.favourites))
    },
    removeFavourite(state, action) {
      const newArray = state.favourites.filter(item=> item !== action.payload);
      localStorage.setItem("favourites", JSON.stringify(newArray));
      return {...state, favourites: newArray};
    },
    clearFavourite(state, action) {
      localStorage.removeItem('favourites')
      state.favourites = [];
    }
  }
});

export const { addFavourite, removeFavourite, clearFavourite } = favouriteSlice.actions
export default favouriteSlice.reducer 