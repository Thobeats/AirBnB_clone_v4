/** This is the beginning of greatness */

$(document).ready(() => {
  // get the API status
  $.get('http://0.0.0.0:5001/api/v1/status/', (data) => {
    if (data.status == 'OK') {
      console.log(data);

      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });
});
