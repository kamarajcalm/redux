import {combineReducers} from 'redux';
import { selectSong } from '../actions';

const songsReducer =()=>{ 
    return [
        {title:"butta bomma ",duration:"3:00"},
        {title:"ali malar ",duration:"3:00"},
        {title:"shape of u ",duration:"3:00"},

    ]
}

const selectedSongReducer =(selectedSong =null,action)=>{
    if (action.type === "SONG_SELECTED"){
        return action.payload;
    }
    return selectedSong
}

export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedSongReducer
})