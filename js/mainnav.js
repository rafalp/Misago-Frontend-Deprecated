// @flow
import { conf } from './constants'
import router from './router'
import MenuFactory from './utils/MenuFactory'

const threadsPaths = [
  '/',
  '/my/',
  '/new/',
  '/unread/',
  '/subscribed/',
  '/unapproved/'
]

const mainnav = new MenuFactory()


const threads: MenuItem = {
  key: 'threads',
  text: gettext('Threads'),
  url: router.url('threads')
}
const categories: MenuItem = {
  key: 'categories',
  text: gettext('Categories'),
  url: router.url('categories')
}
const users: MenuItem = {
  key: 'users',
  text: gettext('Users'),
  url: router.url('users')
}

if (conf.threads_on_index) {
  threads.isActive = (match, location) => {
    console.log(match)
    console.log(location)
    return threadsPaths.indexOf(location.pathname) !== -1
  }

  mainnav.add(threads)
  mainnav.add(categories)
} else {
  categories.exact = true
  mainnav.add(categories)
  mainnav.add(threads)
}

mainnav.add(users)

export default mainnav