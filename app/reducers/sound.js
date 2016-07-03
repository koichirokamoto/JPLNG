import type { SoundAction } from '../actions/sound';
import RNSound from 'react-native-sound';
import { data } from './word';

export default (state = {}, action: SoundAction) => {
  switch (action.type) {
    case 'SOUND':
      index = data.indexOf(action.now);
      soundFile = index + '.mp3';
      let sound = new RNSound(soundFile, RNSound.MAIN_BUNDLE, (error) => {
        console.log('load sound is failed', error);
      });
      sound.play((success) => {
        if (success) {
          console.log('play sound is success');
        } else {
          console.log('play sound is failed');
        }
      });
  }
  return state;
};