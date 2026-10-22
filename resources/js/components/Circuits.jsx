import './Circuits.css';

import placeholder from '../assets/img/horta-circuito-placeholder.jpg';

export function Circuits(){

    return(
        <div className="horta-circuits">
            <div className="circuits-title">
                <h1 className="title">Nosso Circuito</h1>
                <h3 className="subtitle">A tecnologia por trás da horta</h3>

                <img src={placeholder} alt="" className="circuits-image" />

                <div className="circuits-section">

                    <h3 className="section-title">Como funciona?</h3>
                    
                    <div className="section-items">
                        <div className="section-item">
                            <h3 className="item-title">01. Monitoramento</h3>
                            <p className="item-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat nisi impedit magni tempore qui, amet sunt facilis blanditiis ea facere, rerum, labore voluptatem architecto consequatur obcaecati quos eos vel numquam!</p>
                        </div>

                        <div className="section-item">
                            <h3 className="item-title">02. Processamento</h3>
                            <p className="item-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat nisi impedit magni tempore qui, amet sunt facilis blanditiis ea facere, rerum, labore voluptatem architecto consequatur obcaecati quos eos vel numquam!</p>
                        </div>

                        <div className="section-item">
                            <h3 className="item-title">03. Decisão</h3>
                            <p className="item-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat nisi impedit magni tempore qui, amet sunt facilis blanditiis ea facere, rerum, labore voluptatem architecto consequatur obcaecati quos eos vel numquam!</p>
                        </div>

                        <div className="section-item">
                            <h3 className="item-title">04. Irrigação</h3>
                            <p className="item-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat nisi impedit magni tempore qui, amet sunt facilis blanditiis ea facere, rerum, labore voluptatem architecto consequatur obcaecati quos eos vel numquam!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}