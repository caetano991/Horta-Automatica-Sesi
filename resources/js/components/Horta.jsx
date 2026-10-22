import './Horta.css';

import { HortaCards } from './HortaCards';
import { hortaCardsData } from '../data/hortaCardsData';

import { Flower2 } from 'lucide-react';

export function Horta(){

    return(
        <div className="horta-section">
            <h1 className="title">Horta</h1>
            <h3 className="subtitle">Conheca as plantas cultivadas na horta e acompanhe o seu desenvolvimento</h3>

            <div className="section-cards">
                {hortaCardsData.map((plant) => (
                    <HortaCards
                    key={plant.id}
                    image={plant.image}
                    title={plant.title}
                    growthTime={plant.growthTime}
                    waterNeed={plant.waterNeed}
                    lightNeed={plant.lightNeed}
                    />
                ))}
            </div>

            <div className="horta-box">
                <Flower2/>
                <p>Acompanhe o crescimento das plantas e veja como a tecnologia faz a diferença!</p>
            </div>
        </div>
    )
}