import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const RestaurantList = {
  async render() {
    return `

    <div class="hero">
    <div class="hero__inner">
        <h1 class="hero__title">Kembalikan Nafsu Makanmu Disini</h1>
        <p class="hero__tagline">Temukan makanan favorite mu dan nikmati dengan rasa syukur kepada Ilahi</p>
    </div>
  </div>
    
      <section class="content">
        <article class="headline">
          <figure class="headline__figure">
              <img src="images/headline-image.jpg" width="20px" alt="Santap Lounge">
              <figcaption>Santap March 2020 Infographic, 103k Members</figcaption>
          </figure>
          <div class="headline__content">
              <h1 class="headline__title">#sabanamantap : Cerita dari pelanggan</h1>
              <p class="headline__description">Makanan disini itu enak-enak. Tidak ada duanya. Santap ya emang
                  sabana mantap(betul2 mantap).
              </p>
              <button class="headline__button">Read More</button>
          </div>
        </article>
        <div class="explore">
          <h2 class="content__heading">Daftar Restoran</h2>
          <div id="restaurants" class="restaurants">
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.restaurantList();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default RestaurantList;
