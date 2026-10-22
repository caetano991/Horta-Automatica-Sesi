import "./ProjectsCarrousel.css";

import { useEffect, useState } from "react";

export function ProjectsCarrousel({images = []}){

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 4000);

        return() => clearInterval(interval);
    }, [images.length]);

    if (!images.length) return null;

    return (
        <div className="carrousel-section">
            <img
            src={images[current]}
            alt={`Imagem ${current + 1}`}
            className="carrousel-image"
            />

            {images.length > 1 && (
                <div className="carrousel-dots">
                    {images.map((_, index) => (
                        <button
                        key={index}
                        className={`dot ${current === index ? 'active' : ''}`}
                        onClick={() => setCurrent(index)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}