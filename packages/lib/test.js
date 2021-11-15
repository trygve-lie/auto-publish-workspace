import { test } from 'tap';
import {foo, bar, hello, world} from './index.js';

test('Index() - foo', (t) => {
    t.equal(foo(), 42, '.value should be 42');
    t.end();
});

test('Index() - bar', (t) => {
    t.equal(bar(), 'beer', '.value should be "beer"');
    t.end();
});

test('Index() - hello', (t) => {
    t.equal(hello(), 'Hola', '.value should be "Hola"');
    t.end();
});

test('Index() - world', (t) => {
    t.equal(world(), 'World', '.value should be "World"');
    t.end();
});