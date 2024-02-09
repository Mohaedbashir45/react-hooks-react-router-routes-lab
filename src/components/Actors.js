import React from 'react'; // Make sure to import React
import { actors } from "../data";

function Actors() {
    return (
        <div>
            <h1>Actors Page</h1>
            {actors.map((actor) => {
                return (
                    <div key={actor.name}>
                        <h3>Name: {actor.name}</h3>
                        Movies:
                        <ul>
                            {actor.movies.map((movie, index) => (
                                <li key={index}>{movie}</li> // You can use index as key since movies may have same names
                            ))}
                        </ul>
                    </div>
                );
            })}
        </div>
    );
}

export default Actors;
