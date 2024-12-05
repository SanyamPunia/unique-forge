const { SecureUniqueForge } = require('unique-forge');

const secureForge = new SecureUniqueForge();
console.log('Secure ID:', secureForge.generate());
