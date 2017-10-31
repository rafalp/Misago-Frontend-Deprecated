// @flow
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { url } from 'misago/constants'

const Avatar = ({ className, size, size2x, user }: AvatarProps) => {
  const _size = size || 100
  const _size2x = size2x || _size

  return (
    <img
      alt=""
      className={classNames('user-avatar', className)}
      height={_size}
      src={getSrcUrlForUserSize(user, _size)}
      srcSet={getSrcUrlForUserSize(user, _size2x)}
      width={_size}
    />
  )
}

Avatar.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  user: PropTypes.object
}

const getSrcUrlForUserSize = (user?: User, size: number): string => {
  if (!!user && user.id && user.avatars) {
    return findAvatarForSize(user.avatars, size)
  } else {
    return url.blank_avatar
  }
}

const findAvatarForSize = (avatars: Array<UserAvatar>, size: number): string  => {
  let avatar: UserAvatar = avatars[0]
  avatars.forEach((av: UserAvatar) => {
    if (av.size >= size) {
      avatar = av
    }
  })
  return avatar.url
}

export default Avatar