import type { WordAction } from '../actions/word';

export type Word = {
  index: number;
  previous: string;
  now: string;
  next: string;
  isList: bool;
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

const initialState: Word = {
  index: startIndex,
  previous: data[maxNumber],
  now: data[startIndex],
  next: data[startIndex + 1],
  isList: false,
};

export default (state: Word = initialState, action: WordAction) => {
  word = action.word
  switch (action.type) {
    case 'FORWARD':
      if (word.index === maxNumber) {
        word.index = startIndex;
      } else if (word.index + 1 === maxNumber) {
        word.index = startIndex - 1;
      } else {
        word.index += 1;
      }
      return {
        index: word.index,
        previous: word.now,
        now: word.next,
        next: data[word.index + 1],
        isList: false,
      };
    case 'BACK':
      if (word.index === startIndex) {
        word.index = maxNumber;
      } else if (word.index - 1 === startIndex) {
        word.index = maxNumber + 1;
      } else {
        word.index -= 1;
      }
      return {
        index: word.index,
        previous: data[word.index - 1],
        now: word.previous,
        next: word.now,
        isList: false,
      };
    case 'INIT':
    case 'START':
      return {
        index: startIndex,
        previous: data[maxNumber],
        now: data[startIndex],
        next: data[startIndex + 1],
        isList: false,
      };
    case 'END':
      return {
        index: maxNumber,
        previous: data[maxNumber - 1],
        now: data[maxNumber],
        next: data[startIndex],
        isList: false,
      };
    case 'LIST':
      return {
        ...state,
        isList: true,
      };
    case 'MOVE':
      let index = data.indexOf(action.now);
      let previousIndex = index -1;
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
      };
  }
  return state;
};