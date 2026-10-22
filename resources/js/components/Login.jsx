import './Login.css';

import { useState } from 'react';

export function Login({ activeTab, setActiveTab }){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event){
        event.preventDefault();

        console.log("Email:", email);
        console.log("Senha:", password);
    }

    return(
        <div className="horta-login">

            <div className="container">

                <div className="logo"></div>

                <h1>Entre na sua conta</h1>

                <form onSubmit={handleSubmit}>

                    <div className="input-group">

                        <div className="input-box">
                            <label htmlFor="email">E-mail</label>

                            <input
                            type="email"
                            id="email"
                            placeholder='Insira seu e-mail'
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                            />
                        </div>

                        <div className="input-box">
                            <label htmlFor="password">Senha</label>

                            <input
                            type="password"
                            id="password"
                            placeholder='Insira sua senha'
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            required
                            />
                        </div>
                    </div>

                        <button type='submit' className="login-button">Entrar</button>

                </form>
                    
                    <div className="login-more">
                        <p>Não tem uma conta?</p><span className={`register-link ${activeTab === 'register' ? 'active' : ''}`} onClick={() => setActiveTab('register')}>Cadastre-se</span>
                    </div>
                   
                </div>

            </div>
    );
}