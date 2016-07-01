import type { SoundAction } from '../actions/sound';
import RNSound from 'react-native-sound';
import { data } from './word';

export default (state = {}, action: SoundAction) => {
  switch (action.type) {
    case 'SOUND':
      index = data.indexOf(action.now);
      soundFile = index + '.mp3';
      let sound = new Sound(soundFile, RNSound.MAIN_BUNDLE, (error) => {
        if (error) {
          alert('failed to load the sound', error);
        }
      });
      sound.play((success) => {
        if (success === undefined) {
          alert('failed due to audio decoding errors');
        }
      });
  }
  return state;
};