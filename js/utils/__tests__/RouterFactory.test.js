import RouterFactory from '../RouterFactory'

test('constructor() sets default basepath', () => {
  const factory = new RouterFactory()
  expect(factory.basepath).toBe('/')
})

test('constructor() sets custom basepath', () => {
  const factory = new RouterFactory('/forum/')
  expect(factory.basepath).toBe('/forum/')
})

test('normalizePath() works for default basepath', () => {
  const factory = new RouterFactory()
  expect(factory.normalizePath('/')).toBe('/')
  expect(factory.normalizePath('test/')).toBe('/test/')
  expect(factory.normalizePath('/test/')).toBe('/test/')
})

test('normalizePath() works for custom basepath', () => {
  const factory = new RouterFactory('/forum/')
  expect(factory.normalizePath('/')).toBe('/forum/')
  expect(factory.normalizePath('test/')).toBe('/forum/test/')
  expect(factory.normalizePath('/test/')).toBe('/forum/test/')
})

test('add() adds Route to factory', () => {
  const factory = new RouterFactory()

  factory.add('test', '/', true)
  factory.add('test2', '/totally/', 42)

  expect(factory.routes()).toEqual([
    {
      key: 'test',
      path: '/',
      component: true
    },
    {
      key: 'test2',
      path: '/totally/',
      component: 42
    },
  ])
})

test('add() adds Route to urls', () => {
  const factory = new RouterFactory()

  factory.add('test', '/', true)
  factory.add('test2', '/totally/', 42)

  expect(factory.urls).toEqual({
    'test': '/',
    'test2': '/totally/'
  })
})

test('url() returns undefined for nonexistant route', () => {
  const factory = new RouterFactory('/forums/')
  expect(factory.url('home')).toBe(undefined)
})

test('url() returns url for route', () => {
  const factory = new RouterFactory('/forums/')

  factory.add('home', '/', true)
  factory.add('threads', '/threads/', true)
  factory.add('thread', '/t/:pk/:slug/', true)

  expect(factory.url('home')).toBe('/forums/')
  expect(factory.url('threads')).toBe('/forums/threads/')
  expect(factory.url('thread')).toBe('/forums/t/:pk/:slug/')
  expect(factory.url('thread', {
    pk: 42,
    slug: 'test-thread'
  })).toBe('/forums/t/42/test-thread/')
})