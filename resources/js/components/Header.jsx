import './Header.css';

export function Header({ activeTab, setActiveTab }){

    return(
        <header className='horta-header'>

            <nav className="navbar">   

                <div className="logo">

                </div>

                <div className="navbar-items">
                    <div className={`navbar-item ${activeTab === 'landingPage' ? 'active' : ''}`} onClick={() => setActiveTab('landingPage')}>
                        <p>Início</p>
                    </div>

                    <div className={`navbar-item ${activeTab === 'horta' ? 'active' : ''}`} onClick={() => setActiveTab('horta')}>
                        <p>Nossa Horta</p>
                    </div>

                    <div className={`navbar-item ${activeTab === 'projects' ? 'active' : ''}`} onClick={() => setActiveTab('projects')}>
                        <p>Projetos</p>
                    </div>

                    <div className={`navbar-item ${activeTab === 'circuits' ? 'active' : ''}`} onClick={() => setActiveTab('circuits')}>
                        <p>Circuitos</p>
                    </div>

                    <div className={`navbar-item ${activeTab === 'images' ? 'active' : ''}`} onClick={() => setActiveTab('images')}>
                        <p>Imagens</p>
                    </div>

                    <div className={`navbar-item ${activeTab === 'learnMore' ? 'active' : ''}`} onClick={() => setActiveTab('learnMore')}>
                        <p>Saiba mais</p>
                    </div>

                    <div className={`navbar-button ${activeTab === 'login' ? 'active' : ''}`} onClick={() => setActiveTab('login')}>
                        <button>
                            Entrar
                        </button>
                    </div>
                </div>

            </nav>
        </header>
    )
}