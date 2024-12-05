## UniqueForge

Customizable and secure ID generator with async and prefix/suffix support for JS/TS environment.

### Installation

```bash
npm install unique-forge
```

### Usage

#### Basic ID Generation

Use `UniqueForge` for standard unique ID generation:

```js
const { UniqueForge } = require('unique-forge');

const forge = new UniqueForge();
console.log(forge.generate()); // Outputs a unique ID
```

#### Asynchronous ID Generation

For asynchronous workflows, use `AsyncUniqueForge`:

```js
const { AsyncUniqueForge } = require('unique-forge');

const asyncForge = new AsyncUniqueForge();
asyncForge.generate().then((id) => console.log(id));
```

#### Secure ID Generation

For cryptographically secure IDs, use `SecureUniqueForge`:

```js
const { SecureUniqueForge } = require('unique-forge');

const secureForge = new SecureUniqueForge();
console.log(secureForge.generate()); // Outputs a secure unique ID
```

#### Customizable ID Generation

Use `CustomUniqueForge` for IDs with custom prefixes or suffixes:

```js
const { CustomUniqueForge } = require('unique-forge');

const customForge = new CustomUniqueForge({ prefix: 'user_', suffix: '_2023' });
console.log(customForge.generate()); // Outputs: user_<unique-id>_2023
```

### Features

- **Customizable Alphabet**: Define your own characters for ID generation.
- **Adjustable Length**: Set the size of the generated IDs.
- **Synchronous & Asynchronous**: Flexible workflows for various use cases.
- **Secure Random ID**s: Leverage cryptographic randomness when needed.
- **Prefix/Suffix Support**: Easily create formatted IDs.

### License

This library is [MIT](/LICENSE) Licensed. Contributions are welcome!
