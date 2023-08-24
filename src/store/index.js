import { configureStore } from '@reduxjs/toolkit';
import { reset } from './action';
import  { songReducer, addSong, removeSong }  from './slice/songSlice';
import  { movieReducer, addMovie, removeMovie } from './slice/movieSlice';




const store = configureStore({
  reducer: {
    songs : songReducer,
    movies: movieReducer
  }
});
//console.log(movieSlice.actions)
export { store };
export { addMovie, removeMovie, addSong, removeSong, reset };

//console.log(movieSlice.actions.reset.toString())