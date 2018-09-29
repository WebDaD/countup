/* global $, URLSearchParams, moment */
$(document).ready(function () {
  let urlParams = new URLSearchParams(window.location.search)
  let type = urlParams.has('type') ? urlParams.get('type') : 'up' // down
  let autostart = urlParams.has('autostart') ? urlParams.get('autostart') : true // false
  let realtime = urlParams.has('realtime') ? urlParams.get('realtime') : true // false
  let endtime = urlParams.has('endtime') ? urlParams.get('endtime') : '10:00:00' // time
  let duration = urlParams.has('duration') ? urlParams.get('duration') : '300' // seconds
  let background = urlParams.has('background') ? urlParams.get('background') : '#000000' // Color or image
  let font = urlParams.has('font') ? urlParams.get('font') : 'Helvetica' // Font or Google Font
  let fontcolor = urlParams.has('fontcolor') ? urlParams.get('fontcolor') : '#FFFFFF' // Color
  let onTime = urlParams.has('onTime') ? urlParams.get('onTime') : 'stop' // continue
  let afterTime = urlParams.has('afterTime') ? urlParams.get('afterTime') : 'nothing' // background | black
  let format = urlParams.has('format') ? urlParams.get('format') : 'HH:mm:ss' // moment format
  let branding = urlParams.has('branding') ? urlParams.get('branding') : '' // image


  if (type === 'up') {
    // Count up from start to end
    
  } else { // down
    // Count down from end to start

  }

  let realend = moment(endtime, format)
  let realstart

})