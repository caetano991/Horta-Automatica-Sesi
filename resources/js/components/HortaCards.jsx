import './HortaCards.css';

import { Sprout, Droplets, Clock } from 'lucide-react';

export function HortaCards({ image, title, growthTime, waterNeed, lightNeed }){

    return(
        <div className="horta-card">
            <img src={image} alt={title} className="card-img"/>

            <h3 className="card-title">{title}</h3>

            <div className="card-items">
                <div className="card-item"><Sprout/> <p>Crescimento: </p> {growthTime}</div>
                <div className="card-item"><Droplets/> <p>Nescessidade de água: </p> {waterNeed}</div>
                <div className="card-item"><Clock/> <p>Nescessidade de luz: </p> {lightNeed}</div>
            </div>
        </div>
    )
}