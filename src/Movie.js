import React from "react";
import propTypes from "prop-types";

function Moive({id, year, title, summary, poster}) {
    return <h4>{title}</h4>
}

Moive.prototype = {
    id: propTypes.number.isRequired,
    year: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired
}

export default Moive;