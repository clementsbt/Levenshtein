import test from 'ava';
import { levenshtein } from '../levenshtein.js';

test('distance de levenshtein', t => {
  t.is(levenshtein('chien', 'niche'), 4);
});