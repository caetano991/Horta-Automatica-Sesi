
import './LearnMore.css';
import { useState } from 'react';

import {
    Droplet,
    Sprout,
    GraduationCap,
    Cpu,
    ChevronDown
} from 'lucide-react';

export function LearnMore() {
    const [openQuestion, setOpenQuestion] = useState(null);

    const learnMoreCardsData = [
        {
            id: 1,
            icon: Droplet,
            title: 'Irrigação Automática',
            description:
                'Economia de água e irrigação no momento certo.'
        },
        {
            id: 2,
            icon: Sprout,
            title: 'Sustentabilidade',
            description:
                'Práticas sustentáveis que contribuem para o meio ambiente.'
        },
        {
            id: 3,
            icon: GraduationCap,
            title: 'Educação',
            description:
                'Aprendizado prático sobre tecnologia e agricultura.'
        },
        {
            id: 4,
            icon: Cpu,
            title: 'Tecnologia',
            description:
                'Uso de sensores e automação para melhores resultados.'
        }
    ];

    const questionsData = [
        {
            id: 1,
            question: 'Como funciona a irrigação automática?',
            answer:
                'Sensores monitoram a umidade do solo. Quando identificam que a terra está seca, o sistema pode acionar a irrigação para fornecer água às plantas.'
        },
        {
            id: 2,
            question: 'Quais plantas são cultivadas?',
            answer:
                'A horta pode cultivar hortaliças, verduras, ervas e outras espécies adequadas ao espaço, ao clima e às condições de cultivo.'
        },
        {
            id: 3,
            question: 'Como os dados são coletados?',
            answer:
                'Sensores instalados na horta coletam informações, como a umidade do solo. Um sistema eletrônico recebe esses dados para acompanhar as condições de cultivo.'
        },
        {
            id: 4,
            question: 'Posso visitar a horta?',
            answer:
                'As visitas dependem da disponibilidade e das regras da instituição responsável pela horta. Entre em contato com a escola para consultar as possibilidades.'
        }
    ];

    return (
        <section className="horta-learn-more">

            {/* Cabeçalho */}
            <div className="learn-more-title">
                <h1 className="title">Saiba Mais</h1>

                <h3 className="subtitle">
                    Informações importantes sobre nossa horta
                </h3>
            </div>

            {/* Cards informativos */}
            <div className="learn-more-items">

                {learnMoreCardsData.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div
                            className="learn-more-item"
                            key={item.id}
                        >
                            <Icon className="learn-more-icon" />

                            <h3 className="item-title">
                                {item.title}
                            </h3>

                            <p className="item-description">
                                {item.description}
                            </p>
                        </div>
                    );
                })}

            </div>

            {/* Perguntas frequentes */}
            <div className="learn-more-faq">

                <h2 className="faq-title">
                    Dúvidas Frequentes
                </h2>

                <div className="faq-items">

                    {questionsData.map((item) => (
                        <div
                            className={`faq-item ${
                                openQuestion === item.id ? 'active' : ''
                            }`}
                            key={item.id}
                        >
                            <button
                                className="faq-question"
                                onClick={() =>
                                    setOpenQuestion(
                                        openQuestion === item.id
                                            ? null
                                            : item.id
                                    )
                                }
                                aria-expanded={openQuestion === item.id}
                            >
                                <span>{item.question}</span>

                                <ChevronDown
                                    className="faq-icon"
                                    size={17}
                                />
                            </button>

                            {openQuestion === item.id && (
                                <div className="faq-answer">
                                    <p>{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}
