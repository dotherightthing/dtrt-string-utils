import { stringToCapitalised } from '../index.mjs';

QUnit.module('stringToCapitalised');

QUnit.test('phrase', (assert) => {
  assert.equal(
    stringToCapitalised('foo bar baz'),
    'Foo bar baz',
    'Capitalise string',
  );
});

QUnit.test('word', (assert) => {
  assert.equal(
    stringToCapitalised('foo'),
    'Foo',
    'Capitalise string',
  );
});
