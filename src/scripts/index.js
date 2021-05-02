import 'regenerator-runtime'; /* for async await transpile */
import $ from 'jquery';
import '../styles/main.css';
import '../styles/responsive.css';
import data from '../../DATA.json';

const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', function (event) {
    drawer.classList.toggle('open');
    event.stopPropagation();
});

hero.addEventListener('click', function () {
    drawer.classList.remove('open');
});

main.addEventListener('click', function () {
    drawer.classList.remove('open');
});


$(document).ready(function () {
    const showData = $('#show-data');
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