
import './Images.css';

import imageHorta1 from '../assets/img/horta-alface.jpg';
import imageHorta2 from '../assets/img/horta-alface.jpg';
import imageHorta3 from '../assets/img/horta-alface.jpg';
import imageHorta4 from '../assets/img/horta-alface.jpg';
import imageHorta5 from '../assets/img/horta-alface.jpg';
import imageHorta6 from '../assets/img/horta-alface.jpg';

export function Images() {
    return (
        <section className="horta-images">

            <div className="images-title">
                <h1 className="title">
                    Imagens da Nossa Horta
                </h1>
            </div>

            <div className="images-items">

                <div className="images-item images-item-main">
                    <img
                        src={imageHorta1}
                        alt="Vista geral da horta escolar"
                        className="images-photo"
                    />
                </div>

                <div className="images-item">
                    <img
                        src={imageHorta2}
                        alt="Canteiros da horta"
                        className="images-photo"
                    />
                </div>

                <div className="images-item">
                    <img
                        src={imageHorta3}
                        alt="Organização dos canteiros"
                        className="images-photo"
                    />
                </div>

                <div className="images-item">
                    <img
                        src={imageHorta4}
                        alt="Vista lateral da horta"
                        className="images-photo"
                    />
                </div>

                <div className="images-item">
                    <img
                        src={imageHorta5}
                        alt="Mudas de hortaliças"
                        className="images-photo"
                    />
                </div>

            </div>

        </section>
    );
}
