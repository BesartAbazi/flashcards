import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCardById } from "./cardsSlice";
import { selectCards } from "./cardsSlice";

export default function Card({ id }) {
    const card = useSelector(selectCardById(id)); // replace this with a call to your selector to get a card by id
    const cards = useSelector(selectCards)
    const [flipped, setFlipped] = useState(false);
    
    return (
        <li>
            <button className="card" onClick={(e) => setFlipped(!flipped)}>
                {flipped ? card.back : card.front}
            </button>
        </li>
    );
}
