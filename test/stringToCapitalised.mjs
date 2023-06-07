import dtrtStringUtils from '../src/dtrt-string-utils.mjs';

QUnit.module('stringToCapitalised');

QUnit.test('phrase', (assert) => {
  assert.equal(
    dtrtStringUtils.stringToCapitalised('foo bar baz'),
    'Foo bar baz',
    'Capitalise string',
  );
});

QUnit.test('word', (assert) => {
  assert.equal(
    dtrtStringUtils.stringToCapitalised('foo'),
    'Foo',
    'Capitalise string',
  );
});
