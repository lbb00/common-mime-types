import { mimeTypes } from './mime-types'

export * from './mime-types'

function splitMimeType(mime: string) {
  return mime.split('/')
}

export function mime2ext(mime: string): string | undefined {
  return mimeTypes.find((type) => type.mime === mime)?.ext
}

export function ext2mime(ext: string): string | undefined {
  return mimeTypes.find((type) => type.ext === ext)?.mime
}

export function getType(mime: string): string {
  return splitMimeType(mime)[0]
}

export function getSubType(mime: string): string {
  return splitMimeType(mime)[1]
}
