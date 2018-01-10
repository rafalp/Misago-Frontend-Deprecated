global.gettext = function(msgid) { return msgid }
global.ngettext = function(singular, plural, count) { return (count == 1) ? singular : plural }
global.gettext_noop = function(msgid) { return msgid }
global.pgettext = function(context, msgid) { return msgid }
global.npgettext = function(context, singular, plural, count) { return (count == 1) ? singular : plural }
global.interpolate = function(fmt, obj, named) {
  if (named) {
    return fmt.replace(/%\(\w+\)s/g, function (match) { return String(obj[match.slice(2, -2)]) })
  } else {
    return fmt.replace(/%s/g, function (match) { return String(obj.shift()) })
  }
}