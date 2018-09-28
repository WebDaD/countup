/* global $, URLSearchParams, moment */
$(document).ready(function () {
  let urlParams = new URLSearchParams(window.location.search)
  let type = urlParams.has('type') ? urlParams.get('type') : 'up' // down
  let autostart = urlParams.has('autostart') ? urlParams.get('autostart') : true // false
  let realtime = urlParams.has('realtime') ? urlParams.get('realtime') : true // false
  let endtime = urlParams.has('endtime') ? urlParams.get('endtime') : '10:00:00' // time
  let duration = urlParams.has('duration') ? urlParams.get('duration') : '300' // seconds
  let format = urlParams.has('format') ? urlParams.get('format') : 'HH:mm:ss' // moment format
  
  if (type === 'up') {
    // Count up from start to end
    
  } else { // down
    // Count down from end to start

  }

  let realend = moment(endtime, format)
  let realstart

})