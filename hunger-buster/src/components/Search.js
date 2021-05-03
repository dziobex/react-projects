import React, { useEffect, useState } from 'react';
import RecipePrev from './RecipePrev';

const Search = () => {
    const [query, setQuery] = useState("coffee");
    const [search, setSearch] = useState(query);
    const [recipes, setRecipes] = useState([]);

    useEffect(async () => {
        const fullQuery = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${APP_KEY}`;
        const fetchData = await fetch(fullQuery);
        const data = await fetchData.json();
        setRecipes(data.results);
        console.log(recipes[0]);
    }, [search]);

    const APP_KEY = ":p";

    const doSearch = e => {
        e.preventDefault();
        if (query.length === 0)
            return;
        setSearch(query);
    }

    const changeQuery = e => {
        setQuery(e.target.value);
    }

    return (
        <div>
            <h1>Hunger Buster!</h1>
            <form>
                <input type="text" value={query} onChange={changeQuery}/>
                <button onClick={doSearch}>Search</button>
            </form>
            {recipes.map(recipe => (
                <RecipePrev key={recipe.id} title={recipe.title} image={recipe.image} id={recipe.id}/>
            ))}
        </div>
    );
};

export default Search;