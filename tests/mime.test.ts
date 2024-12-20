import { describe, it, expect } from 'vitest'
import { mime2ext, ext2mime, mimeTypes } from '../src/index.js'

describe('mime2ext', () => {
  it('should return the correct extension for a given MIME type', () => {
    expect(mime2ext('image/png')).toBe('.png')
  })
})

describe('ext2mime', () => {
  it('should return the correct MIME type for a given extension', () => {
    expect(ext2mime('.png')).toBe('image/png')
  })
})

describe('duplicate check', () => {
  it('should return true if there are duplicate MIME types', () => {
    expect(
      mimeTypes.some((type) => mimeTypes.filter((t) => t.mime === type.mime && t.ext === type.ext).length > 1)
    ).toBe(false)
  })
})
