import { mimeTypes } from './mime-types'

export * from './mime-types'

export function mime2ext(mime: string) {
  return mimeTypes.find((type) => type.mime === mime)?.ext
}

export function ext2mime(ext: string) {
  return mimeTypes.find((type) => type.ext === ext)?.mime
}
