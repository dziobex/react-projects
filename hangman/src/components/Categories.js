import Data from './categories.json';

// getting all available categories from json file //
export const GetCategories = _ => {
    // console.log(Data[0]);
    return Data.map(d => `${d.category} ${d.icon}`);
}

// getting random phrase from file from category passed as an argument //
export const RandomPhrase = (category) => {
    return Data.find(d => d.category === category).phrases[Math.floor(Data.find(d => d.category === category).phrases.length * Math.random())];
}