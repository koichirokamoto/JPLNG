export type Word = {
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
  previous: data[maxNumber],
  now: data[startIndex],
  next: data[startIndex + 1],
};

export default (state: Word = initialState, action) => {
  switch (action) {
    case 'FORWARD':
      nextIndex = data.indexOf(next) + 1;
      return {
        previous: now,
        now: next,
        next: data[41 % nextIndex]
      };
    case 'BACK':
      previousIndex = data.indexOf(previous) - 1;
      if (previousIndex < 0) {
        previousIndex = maxNumber;
      }
      return {
        previous: data[41 % previousIndex],
        now: previous,
        next: now,
      };
    case 'START':
      return initialState;
    case 'END':
      return {
        previous: data[maxNumber - 1],
        now: data[maxNumber],
        next: data[startIndex],
      }
  }
  return state;
};