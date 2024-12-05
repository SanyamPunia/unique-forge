const { CustomUniqueForge } = require('unique-forge');

const customForge = new CustomUniqueForge({ prefix: 'user_', suffix: '_2023' });
console.log('Custom ID:', customForge.generate());
