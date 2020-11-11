const BASE_URL = 'https://restcountries.eu/rest/v2';
const { error } = require('@pnotify/core');
import "@pnotify/core/dist/PNotify.css";
import"@pnotify/core/dist/BrightTheme.css";
export default class CountriesAPI {
    constructor() {
        this.nameQuery = '';        
    }
    fetchArticles() {         
        const url = `${BASE_URL}/name/${this.nameQuery}`        
          return fetch(url).then(response => response.json()).then(data => {             
              return data
          }).catch(evt => {
              if (evt) {
                   error({  
    text: 'Please enter a query!',
    type: 'info'
});  
               }
           } );
    }    
    get name() {
      return this.nameQuery
    }
    set name(newName) {
        this.nameQuery = newName;
    }
}