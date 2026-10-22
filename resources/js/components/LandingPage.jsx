import './LandingPage.css';

import { Sprout, Droplet, Cpu, Users, ChevronRight } from 'lucide-react';

import hortaGenerica from '../assets/img/horta-generica.jpg';
import hortaImagem from '../assets/img/horta-imagem.jpg';
import hortaCircuito from '../assets/img/horta-circuito.jpg';
import hortaAlface from '../assets/img/horta-alface.jpg';

export function LandingPage({ activeTab, setActiveTab }){

    return(
        <div className="horta-landing">

            <div className="landing-start">

                <div className="landing-start-text">
                    <h1 className="landing-title">CULTIVANDO CONHECIMENTO
                    <span>ATRAVÉS DA TECNOLOGIA</span></h1>
                    <h3 className="landing-subtitle">Nossa horta une educaçação, sustentabilidade e tecnologia em um só projeto</h3>
                    
                    <div className="landing-buttons">
                        <button className="button-project" onClick={() => setActiveTab('projects')}>Conheça Nosso Projeto</button>
                        <button className="button-learn-more" onClick={() => setActiveTab('horta')}>Nossa Horta</button>
                    </div>
                </div>

                <img src={hortaGenerica} alt="Imagem da Horta"/>

                <div className="landing-topics">

                    <div className="topic">
                        <Sprout/>
                        <h5 className="topic-title">Plantas Cultivadas</h5>
                        <p className="topic-text">Diversidade de plantas e cuidado com o meio ambiente</p>
                    </div>

                    <div className="topic">
                        <Droplet/>
                        <h5 className="topic-title">Irrigação Automatizada</h5>
                        <p className="topic-text">Sistema inteligente que economiza água e mantém a horta saudável</p>
                    </div>

                    <div className="topic">
                        <Cpu/>
                        <h5 className="topic-title">Circuito Inteligente</h5>
                        <p className="topic-text">Tecnologia e sensores monitorando tudo em tempo real</p>
                    </div>

                    <div className="topic">
                        <Users/>
                        <h5 className="topic-title">Educação e Sustentabilidade</h5>
                        <p className="topic-text">Aprendizado prático e conscientização para um futuro melhor</p>
                    </div>

                </div>

            </div>

            <div className="landing-more">
                <h3 className="more-title">CONHEÇA NOSSO PROJETO</h3>

                <div className="more-item">
                    <img src={hortaImagem} alt="" />
                    <div className="item-text">
                        <p>Projetos</p>
                        <div className={`item-button ${activeTab === 'projects' ? 'active' : ''}`} onClick={() => setActiveTab('projects')}><ChevronRight/></div>
                    </div>
                </div>

                <div className="more-item">
                    <img src={hortaCircuito} alt="" />
                    <div className="item-text">
                        <p>Circuito</p>
                        <div className={`item-button ${activeTab === 'circuits' ? 'active' : ''}`} onClick={() => setActiveTab('circuits')}><ChevronRight/></div>
                    </div>
                </div>

                <div className="more-item">
                    <img src={hortaAlface} alt="" />
                    <div className="item-text">
                        <p>Imagens</p>
                        <div className={`item-button ${activeTab === 'images' ? 'active' : ''}`} onClick={() => setActiveTab('images')}><ChevronRight/></div>
                    </div>
                </div>
            </div>

            
        </div>
    );
}
