import { test } from 'tap';
import { helloWorld } from './index.js';

test('Fastify() - hello world', (t) => {
    t.equal(helloWorld(), 'Hola World', '.value should be Hola World');
    t.end();
});
