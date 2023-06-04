import { getIndefiniteArticle } from '../dtrt-string-utils.mjs';

QUnit.module('getIndefiniteArticle');

QUnit.test('starts with a consonant', (assert) => {
  assert.equal(
    getIndefiniteArticle('banana'),
    'a',
  );

  assert.equal(
    getIndefiniteArticle('canape'),
    'a',
  );

  assert.equal(
    getIndefiniteArticle('cherry'),
    'a',
  );

  assert.equal(
    getIndefiniteArticle('date'),
    'a',
  );

  assert.equal(
    getIndefiniteArticle('feijoa'),
    'a',
  );

  assert.equal(
    getIndefiniteArticle('grape'),
    'a',
  );

  assert.equal(
    getIndefiniteArticle('herb'),
    'a',
  );

  assert.equal(
    getIndefiniteArticle('jackfruit'),
    'a',
  );

  assert.equal(
    getIndefiniteArticle('kiwifruit'),
    'a',
  );

  assert.equal(
    getIndefiniteArticle('lemon'),
    'a',
  );

  assert.equal(
    getIndefiniteArticle('merringue'),
    'a',
  );

  assert.equal(
    getIndefiniteArticle('nut'),
    'a',
  );

  assert.equal(
    getIndefiniteArticle('peanut'),
    'a',
  );

  assert.equal(
    getIndefiniteArticle('quince'),
    'a',
  );

  assert.equal(
    getIndefiniteArticle('radish'),
    'a',
  );

  assert.equal(
    getIndefiniteArticle('strawberry'),
    'a',
  );

  assert.equal(
    getIndefiniteArticle('tomato'),
    'a',
  );

  assert.equal(
    getIndefiniteArticle('vanilla pod'),
    'a',
  );

  assert.equal(
    getIndefiniteArticle('wine'),
    'a',
  );

  assert.equal(
    getIndefiniteArticle('xmas cake'),
    'a',
  );

  assert.equal(
    getIndefiniteArticle('yam'),
    'a',
  );

  assert.equal(
    getIndefiniteArticle('zucchini'),
    'a',
  );
});

QUnit.test('starts with a vowel', (assert) => {
  assert.equal(
    getIndefiniteArticle('apple'),
    'an',
  );

  assert.equal(
    getIndefiniteArticle('egg'),
    'an',
  );

  assert.equal(
    getIndefiniteArticle('ice-cream'),
    'an',
  );

  assert.equal(
    getIndefiniteArticle('omlette'),
    'an',
  );

  assert.equal(
    getIndefiniteArticle('umbrella'),
    'an',
  );
});
