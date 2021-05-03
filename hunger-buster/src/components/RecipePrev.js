import React from 'react';
import { Link } from 'react-router-dom';

import style from './recipes.module.css';

const RecipePrev = ({ title, image, id }) => {
    console.log(id);
    return (
        <div className={style.recipe}>
            <h2>{title}</h2>
            <img src={image}></img>
            <Link to={`/${id}`}>Read more...</Link>
        </div>
    );
}

export default RecipePrev;