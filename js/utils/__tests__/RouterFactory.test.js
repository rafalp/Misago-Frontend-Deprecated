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