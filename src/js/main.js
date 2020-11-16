var debounce = require('debounce');
const Handlebars = require("handlebars");
const { error, success } = require('@pnotify/core');
import "@pnotify/core/dist/PNotify.css";
import"@pnotify/core/dist/BrightTheme.css";
import refs from './refs';
import countriesApi from './countries-api';
import countryTemplate from '../templates/country.hbs'
import countriesTemplate from '../templates/countries.hbs'



const newCountriesService = new countriesApi();
const onInputChange = function (evt) {
    clearContainer();
    newCountriesService.name = evt.target.value;    
    newCountriesService.fetchArticles().then(renderingPage);       
}
document.addEventListener('input', debounce(onInputChange, 500));

const renderingPage = function (data) {    
    if (data.length === 1) {
        refs.container.insertAdjacentHTML('beforeend', countryTemplate(data))
        success({  
    text: 'Country found!!!',
            type: 'info',
    hide: true,
});   
    }
    if (data.length > 1 && data.length <=10) {
        refs.container.insertAdjacentHTML('beforeend', countriesTemplate(data))
    }         
    if (data.length > 10) {
error({  
    text: 'Too many matches found. Please enter a more specific query!',
    type: 'info'
});        
    }    
}
const clearContainer = function () {
    refs.container.innerHTML = '';
}
