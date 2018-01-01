// @flow
import type MomentObject from 'moment'

export type Action = {
  action: string,
  [string]: mixed
};

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
};

export type Category = {
  id: number,
  parent: number,
  name: string,
  description?: { plain: string, html: string },
  is_closed: boolean,
  css_class?: string,
  level: number,
  lft: number,
  rght: number,
  url?: { [string]: mixed };
};

export type MenuItem = {
  key: string,
  text: string,
  url: ?string,
  isBlank?: boolean,
  isActive?: Function,
  exact?: boolean
};

export type ModalState = {
  isOpen: boolean,
  children: mixed | null
};

export type OrderedListItem<T> = {
  key: string,
  item: T,

  after: string | null,
  before: string | null
};

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
};

export type Route = {
  component: any,
  key: string,
  path: string
};

export type State = {
  [string]: mixed
};

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
};

export type UserAvatar = {
  size: number,
  url: string
};

export type UserStatus = {
  is_offline: boolean,
  is_online: boolean,
  is_hidden: boolean,
  is_offline_hidden: boolean,
  is_online_hidden: boolean,
  last_click: MomentObject,
  is_banned: boolean,
  banned_until: MomentObject
};

export type ValidationResult = Array<string>
export type Validator = (value: any) => string | false

export type CompositeValidationResult = { [string]: ValidationResult };

export type FormData = { [string]: any };
export type FormErrors = { [string]: ValidationResult };
export type FormValidators = { [string]: Array<Validator> };

export type FormSetErrors = (FormErrors) => void
export type FormSetSubmitting = (boolean) => void
export type FormOnClean = (FormData, FormValidators, FormSetErrors) => FormData | false
export type FormOnSubmit = (FormData, FormSetSubmitting, FormSetErrors) => void