import { stringToId } from '../dtrt-string-utils.mjs';

QUnit.module('stringToId');

QUnit.test('bracket', (assert) => {
  assert.equal(
    stringToId('(FOO)(BAR)(BAZ)'),
    'foo-bar-baz',
    'Replaced open and close brackets with dashes',
  );
});

QUnit.test('combination', (assert) => {
  assert.equal(
    stringToId('(FOO!, BAR.. / BAZ)'),
    'foo-bar-baz',
    'Replaced multiple characters with dashes',
  );
});

QUnit.test('comma', (assert) => {
  assert.equal(
    stringToId('FOO,BAR,BAZ'),
    'foo-bar-baz',
    'Replaced commas with dashes',
  );
});

QUnit.test('double quote', (assert) => {
  assert.equal(
    stringToId('"FOO"'),
    'foo',
    'Replaced double quotes with dashes',
  );
});

QUnit.test('exclamation mark', (assert) => {
  assert.equal(
    stringToId('FOO!'),
    'foo',
    'Replaced double quotes with dashes',
  );
});

QUnit.test('period', (assert) => {
  assert.equal(
    stringToId('FOO.BAR.BAZ'),
    'foo-bar-baz',
    'Replaced periods with dashes',
  );
});

QUnit.test('single quote', (assert) => {
  assert.equal(
    stringToId("'FOO'"),
    'foo',
    'Replaced single quotes with dashes',
  );
});

QUnit.test('slash', (assert) => {
  assert.equal(
    stringToId('FOO/BAR/BAZ'),
    'foo-bar-baz',
    'Replaced slashes with dashes',
  );
});

QUnit.test('space', (assert) => {
  assert.equal(
    stringToId('FOO BAR BAZ'),
    'foo-bar-baz',
    'Replaced spaces with dashes',
  );
});
