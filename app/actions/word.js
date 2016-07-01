import type { Word } from '../reducers/word';

export type WordAction = {
  type: string;
  word: Word;
}