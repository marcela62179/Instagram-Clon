import React from 'react';
import {Link} from 'react-router-dom';
const ImageCard = ({image}) => {
    return (
        <article className="imageCard">
            <Link to={`/p/${image._id}`}>
               <img src={image.url} alt=""/> 
            </Link>
        </article>
    );
}
 
export default ImageCard;