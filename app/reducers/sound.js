import type { SoundAction } from '../actions/sound';
import RNSound from 'react-native-sound';
import { data } from './word';

export default (state = {}, action: SoundAction) => {
  switch (action.type) {
    case 'SOUND':
      if (action.sound) {
        action.sound.play((success) => {
          if (success) {
            console.log('play sound is success');
          } else {
            console.log('play sound is failed');
          }
        });
      }
  }
  return state;
};