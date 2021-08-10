import Home from '../views/pages/home';
import RestaurantList from '../views/pages/restaurant-list';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Home, // default page
  '/restaurant-list': RestaurantList,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
