# Common MIME Types

[![Npm](https://badgen.net/npm/v/common-mime-types)](https://www.npmjs.com/package/common-mime-types)
[![Bundlephobia](https://badgen.net/bundlephobia/minzip/common-mime-types)](https://bundlephobia.com/result?p=common-mime-types)
[![Coverage](https://img.shields.io/codecov/c/github/lbb00/common-mime-types.svg)](https://codecov.io/gh/lbb00/common-mime-types)
![Typescript](https://img.shields.io/badge/TS-Typescript-blue)
[![License](https://img.shields.io/github/license/lbb00/common-mime-types.svg)](https://github.com/lbb00/common-mime-types/blob/master/LICENSE)
[![Npm download](https://img.shields.io/npm/dw/common-mime-types.svg)](https://www.npmjs.com/package/common-mime-types)

A lightweight TypeScript/JavaScript library for handling common web MIME types. The MIME type definitions are sourced from [MDN Web Docs - Common MIME Types](https://developer.mozilla.org/en-US/docs/Web/HTTP/MIME_types/Common_types).

## Features

- 🎯 Includes most commonly used MIME types on the web
- 🔄 Bidirectional conversion between file extensions and MIME types
- 📦 Lightweight with zero dependencies
- 💪 Written in TypeScript with full type support

## Usage

```ts
import { mimeTypes, mime2ext, ext2mime, getType, getSubType } from 'common-mime-types'

// Convert MIME type to file extension
const ext = mime2ext('image/png') // Returns '.png'

// Convert file extension to MIME type
const mimeType = ext2mime('.png') // Returns 'image/png'

// Get the type part of a MIME type
const type = getType('image/png') // Returns 'image'

// Get the subtype part of a MIME type
const subType = getSubType('image/png') // Returns 'png'

// Search in mimeTypes array
mimeTypes.find((m) => m.mime === 'image/png')?.ext
mimeTypes.find((m) => m.ext === '.png')?.mime
```
