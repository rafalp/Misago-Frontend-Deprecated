// @flow
export type OrderedListItem = {
  key: string,
  item: mixed,

  after: string | null,
  before: string | null
}