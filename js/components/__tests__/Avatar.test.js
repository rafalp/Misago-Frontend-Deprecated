import React from 'react'
import renderer from 'react-test-renderer'
import Avatar from '../Avatar'

jest.mock('misago/constants', () => {
  return { url: { blank_avatar: 'blank_avatar.png' } }
})

const user = {
  id: 1,
  avatars: [
    { size: 200, url: '/avatars/200.png' },
    { size: 100, url: '/avatars/100.png' },
    { size: 10, url: '/avatars/10.png' }
  ]
}

test('<Avatar /> component renders', () => {
  const component = renderer.create(<Avatar />)
  expect(component).toMatchSnapshot()
})

test('<Avatar /> component renders with class name', () => {
  const component = renderer.create(
    <Avatar className="poster-avatar" />
  )

  expect(component).toMatchSnapshot()
})

test('<Avatar /> component renders for anonymous', () => {
  const anonymous = { id: 0 }
  const component = renderer.create(
    <Avatar user={anonymous} />
  )

  expect(component).toMatchSnapshot()
})

test('<Avatar /> component ignores size prop when no user is provided', () => {
  const component = renderer.create(
    <Avatar size={200} />
  )

  expect(component).toMatchSnapshot()
})

test('<Avatar /> component renders for user', () => {
  const component = renderer.create(
    <Avatar user={user} />
  )

  expect(component).toMatchSnapshot()
})

test('<Avatar /> component renders for user with size', () => {
  const component = renderer.create(
    <Avatar size={200} user={user} />
  )

  expect(component).toMatchSnapshot()
})

test('<Avatar /> component renders for user with size and size2x', () => {
  const component = renderer.create(
    <Avatar size={100} size2x={200} user={user} />
  )

  expect(component).toMatchSnapshot()
})