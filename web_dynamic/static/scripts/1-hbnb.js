/** This is the beginning of greatness */

$(document).ready(() => {
  // get all the inputs
  const amenities = [];
  $('.popover').click((event) => {
    const target = $(event.target);
    if (target.is('input')) {
      const amenity = target.data();
      if (target.is(':checked')) {
        amenities.push(amenity);
        console.log(amenities);
      } else {
        amenities.splice(amenities.indexOf(amenity), 1);
        console.log(amenities);
      }
      appendToH4(amenities);
    }
  });

  function appendToH4 (amenities) {
    $('.amenities>h4').html('&nbsp;');
    if (amenities.length > 0) {
      for (const amenity in amenities) {
        if (amenity === 0) {
          $('.amenities>h4').append(`<span>${amenities[amenity].name}</span>`);
        } else {
          $('.amenities>h4').append(`<span>, ${amenities[amenity].name}</span>`);
        }
      }
    }
  }
});
