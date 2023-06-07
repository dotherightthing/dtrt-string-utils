import dtrtStringUtils from '../src/dtrt-string-utils.mjs';

QUnit.module('getIndefiniteArticle');

QUnit.test('starts with a consonant', (assert) => {
  assert.equal(
    dtrtStringUtils.getIndefiniteArticle('banana'),
    'a',
  );

  assert.equal(
    dtrtStringUtils.getIndefiniteArticle('canape'),
    'a',
  );

  assert.equal(
    dtrtStringUtils.getIndefiniteArticle('cherry'),
    'a',
  );

  assert.equal(
    dtrtStringUtils.getIndefiniteArticle('date'),
    'a',
  );

  assert.equal(
    dtrtStringUtils.getIndefiniteArticle('feijoa'),
    'a',
  );

  assert.equal(
    dtrtStringUtils.getIndefiniteArticle('grape'),
    'a',
  );

  assert.equal(
    dtrtStringUtils.getIndefiniteArticle('herb'),
    'a',
  );

  assert.equal(
    dtrtStringUtils.getIndefiniteArticle('jackfruit'),
    'a',
  );

  assert.equal(
    dtrtStringUtils.getIndefiniteArticle('kiwifruit'),
    'a',
  );

  assert.equal(
    dtrtStringUtils.getIndefiniteArticle('lemon'),
    'a',
  );

  assert.equal(
    dtrtStringUtils.getIndefiniteArticle('merringue'),
    'a',
  );

  assert.equal(
    dtrtStringUtils.getIndefiniteArticle('nut'),
    'a',
  );

  assert.equal(
    dtrtStringUtils.getIndefiniteArticle('peanut'),
    'a',
  );

  assert.equal(
    dtrtStringUtils.getIndefiniteArticle('quince'),
    'a',
  );

  assert.equal(
    dtrtStringUtils.getIndefiniteArticle('radish'),
    'a',
  );

  assert.equal(
    dtrtStringUtils.getIndefiniteArticle('strawberry'),
    'a',
  );

  assert.equal(
    dtrtStringUtils.getIndefiniteArticle('tomato'),
    'a',
  );

  assert.equal(
    dtrtStringUtils.getIndefiniteArticle('vanilla pod'),
    'a',
  );

  assert.equal(
    dtrtStringUtils.getIndefiniteArticle('wine'),
    'a',
  );

  assert.equal(
    dtrtStringUtils.getIndefiniteArticle('xmas cake'),
    'a',
  );

  assert.equal(
    dtrtStringUtils.getIndefiniteArticle('yam'),
    'a',
  );

  assert.equal(
    dtrtStringUtils.getIndefiniteArticle('zucchini'),
    'a',
  );
});

QUnit.test('starts with a vowel', (assert) => {
  assert.equal(
    dtrtStringUtils.getIndefiniteArticle('apple'),
    'an',
  );

  assert.equal(
    dtrtStringUtils.getIndefiniteArticle('egg'),
    'an',
  );

  assert.equal(
    dtrtStringUtils.getIndefiniteArticle('ice-cream'),
    'an',
  );

  assert.equal(
    dtrtStringUtils.getIndefiniteArticle('omlette'),
    'an',
  );

  assert.equal(
    dtrtStringUtils.getIndefiniteArticle('umbrella'),
    'an',
  );
});
