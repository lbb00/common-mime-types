/**
 * Generated from https://developer.mozilla.org/en-US/docs/Web/HTTP/MIME_types/Common_types by ChatGPT at 2024-12-19.
 */

export type MIMETypeConfig = {
  ext: string
  mime: string
}

export const mimeTypes: MIMETypeConfig[] = [
  { ext: '.aac', mime: 'audio/aac' },
  { ext: '.abw', mime: 'application/x-abiword' },
  { ext: '.apng', mime: 'image/apng' },
  { ext: '.arc', mime: 'application/x-freearc' },
  { ext: '.avif', mime: 'image/avif' },
  { ext: '.avi', mime: 'video/x-msvideo' },
  { ext: '.azw', mime: 'application/vnd.amazon.ebook' },
  { ext: '.bin', mime: 'application/octet-stream' },
  { ext: '.bmp', mime: 'image/bmp' },
  { ext: '.bz', mime: 'application/x-bzip' },
  { ext: '.bz2', mime: 'application/x-bzip2' },
  { ext: '.cda', mime: 'application/x-cdf' },
  { ext: '.csh', mime: 'application/x-csh' },
  { ext: '.css', mime: 'text/css' },
  { ext: '.csv', mime: 'text/csv' },
  { ext: '.doc', mime: 'application/msword' },
  { ext: '.docx', mime: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' },
  { ext: '.eot', mime: 'application/vnd.ms-fontobject' },
  { ext: '.epub', mime: 'application/epub+zip' },
  { ext: '.gz', mime: 'application/gzip' }, // Note: Windows and macOS upload .gz files with the non-standard MIME type application/x-gzip.
  { ext: '.gif', mime: 'image/gif' },
  { ext: '.htm', mime: 'text/html' },
  { ext: '.html', mime: 'text/html' },
  { ext: '.ico', mime: 'image/vnd.microsoft.icon' },
  { ext: '.ics', mime: 'text/calendar' },
  { ext: '.jar', mime: 'application/java-archive' },
  { ext: '.jpeg', mime: 'image/jpeg' },
  { ext: '.jpg', mime: 'image/jpeg' },
  { ext: '.js', mime: 'text/javascript' }, // Specifications: HTML and RFC 9239
  { ext: '.json', mime: 'application/json' },
  { ext: '.jsonld', mime: 'application/ld+json' },
  { ext: '.mid', mime: 'audio/midi' },
  { ext: '.midi', mime: 'audio/x-midi' },
  { ext: '.mjs', mime: 'text/javascript' },
  { ext: '.mp3', mime: 'audio/mpeg' },
  { ext: '.mp4', mime: 'video/mp4' },
  { ext: '.mpeg', mime: 'video/mpeg' },
  { ext: '.mpkg', mime: 'application/vnd.apple.installer+xml' },
  { ext: '.odp', mime: 'application/vnd.oasis.opendocument.presentation' },
  { ext: '.ods', mime: 'application/vnd.oasis.opendocument.spreadsheet' },
  { ext: '.odt', mime: 'application/vnd.oasis.opendocument.text' },
  { ext: '.oga', mime: 'audio/ogg' },
  { ext: '.ogv', mime: 'video/ogg' },
  { ext: '.ogx', mime: 'application/ogg' },
  { ext: '.opus', mime: 'audio/ogg' },
  { ext: '.otf', mime: 'font/otf' },
  { ext: '.png', mime: 'image/png' },
  { ext: '.pdf', mime: 'application/pdf' },
  { ext: '.php', mime: 'application/x-httpd-php' },
  { ext: '.ppt', mime: 'application/vnd.ms-powerpoint' },
  { ext: '.pptx', mime: 'application/vnd.openxmlformats-officedocument.presentationml.presentation' },
  { ext: '.rar', mime: 'application/vnd.rar' },
  { ext: '.rtf', mime: 'application/rtf' },
  { ext: '.sh', mime: 'application/x-sh' },
  { ext: '.svg', mime: 'image/svg+xml' },
  { ext: '.tar', mime: 'application/x-tar' },
  { ext: '.tif', mime: 'image/tiff' },
  { ext: '.tiff', mime: 'image/tiff' },
  { ext: '.ts', mime: 'video/mp2t' },
  { ext: '.ttf', mime: 'font/ttf' },
  { ext: '.txt', mime: 'text/plain' },
  { ext: '.vsd', mime: 'application/vnd.visio' },
  { ext: '.wav', mime: 'audio/wav' },
  { ext: '.weba', mime: 'audio/webm' },
  { ext: '.webm', mime: 'video/webm' },
  { ext: '.webp', mime: 'image/webp' },
  { ext: '.woff', mime: 'font/woff' },
  { ext: '.woff2', mime: 'font/woff2' },
  { ext: '.xhtml', mime: 'application/xhtml+xml' },
  { ext: '.xls', mime: 'application/vnd.ms-excel' },
  { ext: '.xlsx', mime: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' },
  { ext: '.xml', mime: 'application/xml' }, // Note: application/xml is recommended as of RFC 7303 (section 4.1), but text/xml is still used sometimes.
  { ext: '.xul', mime: 'application/vnd.mozilla.xul+xml' },
  { ext: '.zip', mime: 'application/zip' }, // Note: Windows uploads .zip files with the non-standard MIME type application/x-zip-compressed.
  { ext: '.3gp', mime: 'video/3gpp' }, // Note: audio/3gpp if it doesn't contain video.
  { ext: '.3g2', mime: 'video/3gpp2' }, // Note: audio/3gpp2 if it doesn't contain video.
  { ext: '.7z', mime: 'application/x-7z-compressed' },
]
