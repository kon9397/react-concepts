import React from 'react';
import ConceptItem from "../ConceptItem";

import './ConceptsList.css';

const ConceptsList = ({ concepts }) => {
    return (
        <ul id="concepts">
            {concepts && concepts.length && concepts.map((concept, i) => {
                return <ConceptItem concept={concept} key={`concept-${i}`}/>
            })}
        </ul>
    )
}

export default ConceptsList;