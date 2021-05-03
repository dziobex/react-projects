import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import style from './details.module.css';

const RecipeDetails = ({ match }) => {
    useEffect(() => {
        fetchItems();
    }, []);

    const [item, setItem] = useState([]);

    const fetchItems = async () => {
        const fullQuery = `https://api.spoonacular.com/recipes/${match.params.id}/information?apiKey=${APP_KEY}`;
        const fetchData = await fetch(fullQuery);
        const data = await fetchData.json();
        setItem(data);
        console.log(data);
    }

    const APP_KEY = ":p";

    if ([0, 404].includes(item.code) || item.extendedIngredients === undefined)
        return (
            <h1>Dish not found :(</h1>
        );
    return (
        <Details item item={item}/>
    );
}

const Details = item => {
    console.log(item.item.extendedIngredients);
    return (
        <div className={style.recipe}>
            <h1>{item.item.title}</h1>
            <img src={item.item.image}></img>
            <h3>Time {item.item.readyInMinutes} min | Servings: {item.item.servings}</h3>
            <ul>
                {item.item.extendedIngredients.map(ingr =>(
                    <li key={ingr.id}>{ingr.original}</li>
                ))}
            </ul>
            <ol>
                {item.item.analyzedInstructions[0] == undefined ? "" : item.item.analyzedInstructions[0].steps.map(step => (
                    <li key={step.id}>{step.step}</li>
                ))}
            </ol>
            <a href={item.item.sourceUrl}>Read more...</a>
        </div>
    );
};

export default RecipeDetails;