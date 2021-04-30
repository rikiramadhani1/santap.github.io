$(document).ready(function () {

  const showData = $('#show-data');

  $.getJSON('http://localhost:5500/DATA.json', function (data) {

    const restaurants = data.restaurants.map(function (restaurant) {
      return `<div class="restaurant-container">
                <img class="restaurant-item__thumbnail" src="${restaurant.pictureId}"
                  alt="${restaurant.name}">       
                <div class="restaurant-item__rating">&#9733;${restaurant.rating}
                </div>
              </div>
              <div class="restaurant-item__content">
                <h1 class="restaurant-item__title"><a href="#">${restaurant.name}</a></h1> 
                  <p class="restaurant-item__city">${restaurant.city}</p>
                  <p class="restaurant-item__description">${restaurant.description}</p>
              </div>
      `;
    });

    showData.empty();

    if (restaurants.length) {
      const content = '<article class="restaurant-item">' + restaurants.join('</article><article class="restaurant-item">') + '</article>';
      showData.append(content);
    }
  });
});