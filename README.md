# Common MIME Types

[![Npm](https://badgen.net/npm/v/common-mime-types)](https://www.npmjs.com/package/common-mime-types)
[![Bundlephobia](https://badgen.net/bundlephobia/minzip/common-mime-types)](https://bundlephobia.com/result?p=common-mime-types)
[![Coverage](https://img.shields.io/codecov/c/github/lbb00/common-mime-types.svg)](https://codecov.io/gh/lbb00/common-mime-types)
![Typescript](https://img.shields.io/badge/TS-Typescript-blue)
[![License](https://img.shields.io/github/license/lbb00/common-mime-types.svg)](https://github.com/lbb00/common-mime-types/blob/master/LICENSE)
[![Npm download](https://img.shields.io/npm/dw/common-mime-types.svg)](https://www.npmjs.com/package/common-mime-types)

This library includes [important MIME types for the Web](https://developer.mozilla.org/en-US/docs/Web/HTTP/MIME_types/Common_types).

## Usage

```ts
import { mimeTypes, mime2ext, ext2mime } from 'common-mime-types'

const ext = mime2ext('image/png')
const mimeType = ext2mime('.png')

mimeTypes.find((m) => m.mime === 'image/png')?.ext
mimeTypes.find((m) => m.ext === '.png')?.mime
```
