import { Cpu ,RotateCcwClock, Sprout } from 'lucide-react';

import imageTest from "../assets/img/horta-circuito.jpg";
import imageTest2 from "../assets//img/horta-generica.jpg";
import imageTest3 from "../assets/img/horta-alface.jpg";


export const projectsCardsData = [
    {
        id: 1,
        icon: Cpu,
        title: 'Sistema de Irrigação',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor eum architecto sit! Ex mollitia repellendus nobis maiores ad autem veniam odit adipisci officiis facilis consequatur, assumenda quas molestias accusamus neque.',
        modalDescription:
            'O sistema de irrigação automatizada utiliza sensores para verificar a umidade do solo e fornecer água às plantas quando necessário.',
        modalImage: imageTest,
    },

    {
        id: 2,
        icon: RotateCcwClock,
        title: 'Monitoramento em Tempo Real',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor eum architecto sit! Ex mollitia repellendus nobis maiores ad autem veniam odit adipisci officiis facilis consequatur, assumenda quas molestias accusamus neque.',
        modalDescription:
            'O sistema permite acompanhar em tempo real as condições da horta, utilizando sensores para coletar informações importantes sobre as plantas e o ambiente.',
        modalImage: imageTest2,
    },

    {
        id: 3,
        icon: Sprout,
        title: 'Sustentabilidade na Escola',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor eum architecto sit! Ex mollitia repellendus nobis maiores ad autem veniam odit adipisci officiis facilis consequatur, assumenda quas molestias accusamus neque.',
        modalDescription:
            'O projeto busca incentivar práticas sustentáveis dentro da escola, utilizando a horta como ferramenta de aprendizado sobre tecnologia, meio ambiente e produção de alimentos.',
        modalImage: imageTest3,
    }
];