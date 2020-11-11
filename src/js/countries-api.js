const BASE_URL = 'https://restcountries.eu/rest/v2';
export default class CountriesAPI {
    constructor() {
        this.nameQuery = '';        
    }
    fetchArticles() { 
        
        const url = `${BASE_URL}/name/${this.nameQuery}`
        return fetch(url).then(res => res.json()).then(data => {         
           return data });  
    }    
    get name() {
      return this.nameQuery
    }
    set name(newName) {
        this.nameQuery = newName;
    }

}