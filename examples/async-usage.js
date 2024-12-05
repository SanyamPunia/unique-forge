const { AsyncUniqueForge } = require('unique-forge');

const asyncForge = new AsyncUniqueForge();
asyncForge.generate().then((id) => console.log('Async ID:', id));
