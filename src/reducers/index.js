import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "Friday",
      duration: "3:05",
    },
    {
      title: "Simple",
      duration: "3:05",
    },
    {
      title: "One of a kind",
      duration: "4:45",
    },
    {
      title: "Songs of song",
      duration: "4:05",
    },
  ];
};

const selectedSongReduser = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReduser,
});
