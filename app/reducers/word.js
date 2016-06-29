export type Word = {
  index: number;
  previous: string;
  now: string;
  next: string;
};

const startIndex = 0;
const maxNumber = 40;

const data = [
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
};

export default (state: Word = initialState, action) => {
  word = action.word
  switch (action.type) {
    case 'FORWARD':
      word.index += 1;
      if (word.index > 40) {
        word.index = startIndex;
      }
      return {
        index: word.index,
        previous: word.now,
        now: word.next,
        next: data[word.index],
      };
    case 'BACK':
      word.index -= 1;
      if (word.index < 0) {
        word.index = maxNumber;
      }
      return {
        index: word.index,
        previous: data[word.index],
        now: word.previous,
        next: word.now,
      };
    case 'START':
      return initialState;
    case 'END':
      return {
        index: maxNumber,
        previous: data[maxNumber - 1],
        now: data[maxNumber],
        next: data[startIndex],
      }
  }
  return state;
};