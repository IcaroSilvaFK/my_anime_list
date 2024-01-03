export function getCurrentDayInLongString() {

  return new Intl.DateTimeFormat("en-US", {
    weekday: 'long'
  }).format(new Date()).toLowerCase()
}