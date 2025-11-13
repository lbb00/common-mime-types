import { describe, it, expect, beforeEach } from 'vitest'
import {
  mime2ext,
  ext2mime,
  mimeTypes,
  getType,
  getSubType,
  addMimeType,
  addMimeTypes,
  removeMimeType,
  clearExtendedMimeTypes,
  getExtendedMimeTypes,
} from '../src/index.js'

describe('mime2ext', () => {
  it('should return the correct extension for a given MIME type', () => {
    expect(mime2ext('image/png')).toBe('.png')
  })

  it('should return undefined for unknown MIME type', () => {
    expect(mime2ext('unknown/type')).toBeUndefined()
  })

  it('should handle various MIME types correctly', () => {
    expect(mime2ext('application/json')).toBe('.json')
    expect(mime2ext('text/html')).toBe('.htm')
    expect(mime2ext('video/mp4')).toBe('.mp4')
    expect(mime2ext('audio/mpeg')).toBe('.mp3')
  })
})

describe('ext2mime', () => {
  it('should return the correct MIME type for a given extension', () => {
    expect(ext2mime('.png')).toBe('image/png')
  })

  it('should return undefined for unknown extension', () => {
    expect(ext2mime('.unknown')).toBeUndefined()
  })

  it('should handle various extensions correctly', () => {
    expect(ext2mime('.json')).toBe('application/json')
    expect(ext2mime('.html')).toBe('text/html')
    expect(ext2mime('.mp4')).toBe('video/mp4')
    expect(ext2mime('.mp3')).toBe('audio/mpeg')
  })
})

describe('getType', () => {
  it('should return the type part of MIME type', () => {
    expect(getType('image/png')).toBe('image')
    expect(getType('application/json')).toBe('application')
    expect(getType('text/html')).toBe('text')
    expect(getType('video/mp4')).toBe('video')
    expect(getType('audio/mpeg')).toBe('audio')
  })

  it('should handle font MIME types', () => {
    expect(getType('font/woff')).toBe('font')
    expect(getType('font/ttf')).toBe('font')
  })
})

describe('getSubType', () => {
  it('should return the subtype part of MIME type', () => {
    expect(getSubType('image/png')).toBe('png')
    expect(getSubType('application/json')).toBe('json')
    expect(getSubType('text/html')).toBe('html')
    expect(getSubType('video/mp4')).toBe('mp4')
    expect(getSubType('audio/mpeg')).toBe('mpeg')
  })

  it('should handle complex subtypes', () => {
    expect(getSubType('image/svg+xml')).toBe('svg+xml')
    expect(getSubType('application/vnd.openxmlformats-officedocument.wordprocessingml.document')).toBe(
      'vnd.openxmlformats-officedocument.wordprocessingml.document'
    )
  })
})

describe('duplicate check', () => {
  it('should return true if there are duplicate MIME types', () => {
    expect(
      mimeTypes.some((type) => mimeTypes.filter((t) => t.mime === type.mime && t.ext === type.ext).length > 1)
    ).toBe(false)
  })
})
