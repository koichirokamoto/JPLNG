import word from './word';
import sound from './sound';
import { combineReducers } from 'redux';

export default combineReducers({
  word: word,
  sound: sound,
});