import type { WordAction } from '../actions/word';
import RNSound from 'react-native-sound';

export type Word = {
  index: number;
  previous: string;
  now: string;
  next: string;
  isList: bool;
  sound: Object;
};

const startIndex = 0;
const maxNumber = 40;

export const data = [
  'あ', 'い', 'う', 'え', 'お',
  'か', 'き', 'く', 'け', 'こ',
  'さ', 'し', 'す', 'せ', 'そ',
  'た', 'ち', 'つ', 'て', 'と',
  'な', 'に', 'ぬ', 'ね', 'の',
  'は', 'ひ', 'ふ', 'へ', 'ほ',
  'ま', 'み', 'む', 'め', 'も',
  'や', 'ゆ', 'よ', 'わ', 'を',
  'ん'
];

let getSound: Function = (index) => {
  let soundFile = index + '.m4a';
  let sound = new RNSound(soundFile, RNSound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('load sound is failed', error);
    }
  });
  return sound;
};

const initialState: Word = {
  index: startIndex,
  previous: data[maxNumber],
  now: data[startIndex],
  next: data[startIndex + 1],
  isList: false,
  sound: getSound(startIndex),
};

export default (state: Word = initialState, action: WordAction) => {
  word = action.word
  switch (action.type) {
    case 'FORWARD':
      let fIndex = word.index + 1;
      if (word.index === maxNumber) {
        fIndex = startIndex;
      }
      let fNextIndex = fIndex + 1;
      if (fIndex ===  maxNumber) {
        fNextIndex = startIndex;
      }
      return {
        index: fIndex,
        previous: word.now,
        now: word.next,
        next: data[fNextIndex],
        isList: false,
        sound: getSound(fIndex),
      };
    case 'BACK':
      let bIndex = word.index - 1;
      if (word.index === startIndex) {
        bIndex = maxNumber;
      }
      let bPreviousIndex = bIndex - 1;
      if (bIndex === startIndex) {
        bPreviousIndex = maxNumber;
      }
      return {
        index: bIndex,
        previous: data[bPreviousIndex],
        now: word.previous,
        next: word.now,
        isList: false,
        sound: getSound(bIndex),
      };
    case 'INIT':
    case 'START':
      return {
        index: startIndex,
        previous: data[maxNumber],
        now: data[startIndex],
        next: data[startIndex + 1],
        isList: false,
        sound: getSound(startIndex),
      };
    case 'END':
      return {
        index: maxNumber,
        previous: data[maxNumber - 1],
        now: data[maxNumber],
        next: data[startIndex],
        isList: false,
        sound: getSound(maxNumber),
      };
    case 'LIST':
      return {
        ...state,
        isList: true,
      };
    case 'MOVE':
      let index = data.indexOf(action.now);
      let previousIndex = index - 1;
      let nextIndex = index + 1;

      if (index === startIndex) {
        previousIndex = maxNumber;
      }
      if (index === maxNumber) {
        nextIndex = startIndex;
      }

      return {
        index: index,
        previous: data[previousIndex],
        now: data[index],
        next: data[nextIndex],
        isList: false,
        sound: getSound(index),
      };
  }
  return state;
};