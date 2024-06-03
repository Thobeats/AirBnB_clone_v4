/** This is the beginning of greatness */

$(document).ready(() => {
  // get the API status
  $('.filters button').click(() => {
    $.ajax({
      contentType: 'application/json',
      url: 'http://0.0.0.0:5001/api/v1/places_search/',
      method: 'POST',
      data: JSON.stringify({}),
      success: (data) => {
        let temp = '';
        $('section.places').empty();
        $('section.places').append('<h1>Places</h1>');
        for (const dt of data) {
          temp += `
                        <article>
                            <div class="headline">
                                <h2>${dt.name}</h2>
                                <div class="price_by_night">${dt.price_by_night}</div>
                            </div>
                            <div class="information">
                                <div class="max_guest">
                                    <div class="guest_icon"></div>
                                    <p>${dt.max_guest} Guests</p>
                                </div>
                                <div class="number_rooms">
                                    <div class="bed_icon"></div>
                                    <p>${dt.number_rooms} Bedroom(s)</p>
                                </div>
                                <div class="number_bathrooms">
                                    <div class="bath_icon"></div>
                                    <p>${dt.number_bathrooms} Bathroom(s)</p>
                                </div>
                            </div>
                            <div class="user"><b>Owner</b>: John Lennon</div>
                            <div class="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </div>
                        </article>
                    `;
        }

        $('section.places').append(temp);
      },
      error: (err) => {
        console.error(err);
      },
      dataType: 'json'
    });
  });
});
