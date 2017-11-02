'use strict'

const path = require('path')

const baseDir = path.dirname(__dirname)

module.exports = {
  roots: [
    path.resolve(baseDir, 'js')
  ],
  transform: {
    '^.+\\.jsx?$': './jest.transformer'
  },
  moduleNameMapper: {
    '^misago/(.*)$': path.resolve(baseDir, "js/$1")
  },
  globals: {
    gettext: function(msgid) { return msgid },
    ngettext: function(singular, plural, count) { return (count == 1) ? singular : plural },
    gettext_noop: function(msgid) { return msgid },
    pgettext: function(context, msgid) { return msgid },
    npgettext: function(context, singular, plural, count) { return (count == 1) ? singular : plural },
    interpolate: function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])})
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())})
      }
    }
  }
};