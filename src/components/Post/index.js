import React from 'react';

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
