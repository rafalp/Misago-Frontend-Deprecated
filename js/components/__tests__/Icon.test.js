import React from 'react'
import renderer from 'react-test-renderer'
import Icon from '../Icon'

test('<Icon /> component renders', () => {
  const component = renderer.create(
    <Icon name="check" />
  )

  expect(component).toMatchSnapshot()
})

test('<Icon /> component renders with extra className', () => {
  const component = renderer.create(
    <Icon className="lorem ipsum" name="check" />
  )

  expect(component).toMatchSnapshot()
})

test('<Icon /> component normalizes icon names', () => {
  const component = renderer.create(
    <Icon name="check box" />
  )

  expect(component).toMatchSnapshot()
})