import React from 'react';

import ThemesJSON from './themes.json';

const Themes = ({ click, bullet }) => {
    // printing list with available themes and handling buttons by function passed as the parameter //
    return (
        <div className="themes">
            <center>Themes</center>
            <ul style={{listStyleType: `'${bullet} '`}}>
                {ThemesJSON.map(theme => (
                    <li><button onClick={() => click(theme)}>{theme.name}</button></li>
                ))}
            </ul>
        </div>
    );
};

export default Themes;