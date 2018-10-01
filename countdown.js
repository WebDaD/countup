/* global $, URLSearchParams, moment */
$(document).ready(function () {
  let urlParams = new URLSearchParams(window.location.search)
  let type = urlParams.has('t') ? urlParams.get('t') : 'u' // u=up, d=down, c=clock
  let autostart = urlParams.has('a') ? urlParams.get('a') === '1' : true // 1=true, 0=false
  let realtime = urlParams.has('r') ? urlParams.get('r') === '1' : true // 1=true, 0=false
  let endtime = urlParams.has('e') ? urlParams.get('e') : '10:00:00' // time
  let duration = urlParams.has('d') ? urlParams.get('d') : '300' // seconds
  let background = urlParams.has('b') ? urlParams.get('b') : '#000000' // Color or image
  let font = urlParams.has('f') ? urlParams.get('f') : 'Helvetica' // Font or Google Font
  let fontcolor = urlParams.has('c') ? urlParams.get('c') : '#FFFFFF' // Color
  let onTime = urlParams.has('o') ? urlParams.get('o') : 's' // s=stop, c=continue
  let afterTime = urlParams.has('x') ? urlParams.get('x') : 'n' // n=nothing, g=background, b=black
  let format = urlParams.has('y') ? urlParams.get('y') : 'HH:mm:ss' // moment format
  let branding = urlParams.has('l') ? urlParams.get('l') : '' // image
  let brandingWhite = urlParams.has('w') ? urlParams.get('w') === '1' : true // 1=true, 0=false

  // Styling
  if (background.startsWith('#')) {
    $('#table').css('background', background)
  } else {
    $('#table').css('background', 'url:(' + background + ')')
  }
  $('h1').css('color', fontcolor)
  autostart ? $('#play').show() : $('#play').hide()
  if (branding !== '') {
    $('#branding').attr('src', branding)
  }
  if (brandingWhite) {
    $('#branding').css('filter', 'grayscale(1) brightness(100)')
  }
  // TODO: font

  // Timer

  if (type === 'u') { // Count up from start to end
    if (realtime) { // Start Now from now upwards
      timer(moment(), moment(endtime, format), format)
    } else { // wait for starttime to arive

    }
    // if realtime > just count

    // else if duration > start on specific time
  } else { // down
    // Count down from end to start

  }
})
function timer (starttime, endtime, format) {
  let now = moment()
  // FIXME: now is after startime, is a new day!
  if (now.isSameOrAfter(starttime) && now.isSameOrBefore(endtime)) {
    $('#time').text(now.format(format))
  }
  // TODO: what to do onTime and afterTime
  setTimeout(function () {
    timer(starttime, endtime, format)
  }, 1000)
}
