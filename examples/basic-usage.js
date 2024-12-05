const { UniqueForge } = require('unique-forge');

const forge = new UniqueForge();
console.log('Basic ID:', forge.generate());

const customForge = new UniqueForge({ alphabet: '0123456789', size: 6 });
console.log('Custom ID:', customForge.generate());
