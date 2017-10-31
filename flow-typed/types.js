// @flow
import type MomentObject from 'moment'

export type Action = {
  action: string,
  [string]: mixed
}

export type AuthenticatedUser = {
  id: number | null,
  username?: string,
  slug?: string,
  email?: string,
  joined_on?: MomentObject | null,
  rank?: Rank,
  title?: string | null,
  avatars?: Array<UserAvatar>,
  is_hiding_presence?: boolean,
  followers?: number,
  following?: number,
  limits_private_thread_invites_to?: number,
  unread_private_threads?: number,
  subscribe_to_started_threads?: number,
  subscribe_to_replied_threads?: number,
  threads?: number,
  posts?: number,
  acl: Object,
  api?: mixed,
  url?: string
}

export type AvatarProps = {
  className?: string,
  size?: number,
  size2x?: number,
  user?: User | void
}

type ModalState = {
  isOpen: boolean,
  children: mixed | null
}

export type OrderedListItem = {
  key: string,
  item: mixed,

  after: string | null,
  before: string | null
}

export type Rank = {
  id: number,
  name: string,
  slug: string,
  description: string | null,
  title: string | null,
  css_class: string | null,
  is_default: boolean,
  is_tab: boolean,
  url: string
}

export type State = {
  [string]: mixed
}

export type User = {
  id: number,
  username: string,
  slug?: string,
  email?: string | null,
  joined_on?: MomentObject,
  rank?: Rank,
  title?: string | null,
  avatars?: Array<UserAvatar> | null,
  is_avatar_locked?: boolean,
  signature?: string | null,
  is_signature_locked?: boolean,
  followers?: number,
  following?: number,
  threads?: number,
  posts?: number,
  acl?: Object,
  is_followed?: boolean,
  is_blocked?: boolean,
  meta?: Object,
  status?: UserStatus | null,
  api?: mixed,
  url?: string
}

export type UserAvatar = {
  size: number,
  url: string
}

export type UserStatus = {
  is_offline: boolean,
  is_online: boolean,
  is_hidden: boolean,
  is_offline_hidden: boolean,
  is_online_hidden: boolean,
  last_click: MomentObject,
  is_banned: boolean,
  banned_until: MomentObject
}