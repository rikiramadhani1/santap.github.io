import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
    const result = await response.json();
    return result.restaurants;
  }

  static async detailReataurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const result = await response.json();
    return result.restaurant;
  }
}

export default RestaurantSource;
