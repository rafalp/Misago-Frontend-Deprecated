import url from '../url'

test('url() called without segments returns base path', () => {
  expect(url('/forum/')).toBe('/forum/')
})

test('url() called with segments returns base path with segments joined', () => {
  expect(url('/forum/', ['threads'])).toBe('/forum/threads/')
})

test('url() casts segments to string', () => {
  expect(url('/forum/', ['t', 42, 'test-thread'])).toBe('/forum/t/42/test-thread/')
})

test('url() normalizes slashes', () => {
  expect(url('/forum/', ['/t/', 42, '/test-thread/'])).toBe('/forum/t/42/test-thread/')
})

test('url() third arg returns querystring', () => {
  expect(url('/', ['/t/', 42], { c: 123, q: 'test' })).toBe('/t/42/?c=123&q=test')
})