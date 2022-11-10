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
import './index.css';

function Post(prop) {
  return <article>
  <h2>{prop.title}</h2>
  <h5>{prop.date}</h5>
  <h4>{prop.author}</h4>

  <p>{prop.text}</p>
  <ul>
    {prop.highlights.map((highlight) => (
      <li>{highlight}</li>
    ))}
  </ul>
  
  <img src={prop.image.link} alt={prop.image.alt} />

  </article>;
}

export default Post;
