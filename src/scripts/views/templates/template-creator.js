import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster" src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${restaurant.name}">
  <div class="restaurant__info">
  <h3>Information</h3>
    <h4>Address</h4>
    <p>📍${restaurant.address}</p>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Rating</h4>
    <p>⭐️${restaurant.rating}</p>    
  </div>
  <div class="restaurant__description">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>

  <div class="restaurant__description">
  <h4>Menu</h4>
      <table id="customers">
        <tr>
          <th>Foods</th>
        </tr>
          ${restaurant.menus.foods.map((food) => `<tr><td>${food.name}</td></tr>`)} 
            
        <tr>
          <th>Drinks</th>
        </tr>
          ${restaurant.menus.drinks.map((drink) => `<tr><td>${drink.name}</td></tr>`)}     
      </table>
  </div>
  
  <h4>Reviews</h4>
  <div class="comment-section restaurant__description">     
    ${restaurant.customerReviews.map((customer) => `<div class="comment"><p class="review__date">${customer.date}</p><p class="reviewer">${customer.name}</p><p class="review">${customer.review}</p></div>`)}         
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
        <img class="restaurant-item__header__poster" alt="${restaurant.name}"
            src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
        <div class="restaurant-item__header__rating">
            <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
        <h3>📍${restaurant.city}</h3>
        <p>${restaurant.description}</p>
    </div>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
