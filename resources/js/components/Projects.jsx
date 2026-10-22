import './Projects.css';
import { useState } from 'react';
import { projectsCardsData } from '../data/projectsCardsData';
import { ProjectsModal } from './ProjectsModal';

import { ProjectsCarrousel } from './ProjectsCarrousel';
import imageCarrousel1 from '../assets/carrousel/image1.jpg';
import imageCarrousel2 from '../assets/carrousel/image2.jpg';
import imageCarrousel3 from '../assets/carrousel/image3.jpg';

import { Cpu ,RotateCcwClock, Sprout } from 'lucide-react';

export function Projects({ title, description, image }){

    const [selectedProject, setSelectedProject] = useState(null);
    
    return(
        <div className="horta-projects">
            <div className="projects-title">
                <h1 className="title">Nossos Projetos</h1>
                <h3 className="subtitle">Conheça nossos projetos e objetivos</h3>
            </div>

            <div className="projects-items">
                 {projectsCardsData.map((project) => {

                    const Icon = project.icon;

                    return (
                        <div
                            className="project-item"
                            key={project.id}
                        >

                            <Icon />

                            <h3 className="item-title">
                                {project.title}
                            </h3>

                            <p>
                                {project.description}
                            </p>

                            <button
                                onClick={() => setSelectedProject(project)}
                            >
                                Ver Detalhes
                            </button>

                        </div>
                    );
                })}

                <ProjectsCarrousel
                    images={[
                    imageCarrousel1,
                    imageCarrousel2,
                    imageCarrousel3
                    ]}
                />
            </div>

                {selectedProject && (
                    <ProjectsModal
                        isOpen={true}
                        onClose={() => setSelectedProject(null)}
                        title={selectedProject.title}
                        description={selectedProject.description}
                        modalDescription={selectedProject.modalDescription}
                        modalImage={selectedProject.modalImage}
                    />
                )}

        </div>
    )
}