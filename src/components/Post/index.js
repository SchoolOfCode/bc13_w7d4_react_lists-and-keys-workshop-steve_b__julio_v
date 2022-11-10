import React from "react";

import "./index.css";

function Post(props) {
	return (
		<article>
			<h1>{props.title}</h1>
			<p>{props.date}</p>
			<p>{props.author}</p>
      <p>{props.text}</p>
      <ul>{props.highlights.map((highlight) => {return <li>{highlight}</li>})}</ul>
    <img src={props.image.link} alt={props.image.alt} />
    </article>
	);
}

export default Post;
