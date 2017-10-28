// @flow
export type Action = {
  action: string,
  [string]: mixed
}

export type OrderedListItem = {
  key: string,
  item: mixed,

  after: string | null,
  before: string | null
}

export type State = {
  [string]: mixed
}