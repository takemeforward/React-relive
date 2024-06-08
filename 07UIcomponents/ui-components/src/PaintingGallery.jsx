import { useState } from "react";
import { sculptureList } from "./Data";
import './App.css'
export default function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    const hasNext = index < sculptureList.length - 1;

    function handleClick() {
        if (hasNext) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];

    return (
        <div className="container">
            <button onClick={handleClick}> next </button>
            <h2>
                <i>{sculpture.name}</i> by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <button onClick={handleMoreClick}>
                {showMore ? 'hide' : 'show'} details
            </button>
            {showMore && <p>{sculpture.description}</p>}
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
        </div>
    )
}