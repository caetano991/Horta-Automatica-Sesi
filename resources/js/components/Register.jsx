import './Register.css';

import { useState } from 'react';

export function Register({ activeTab, setActiveTab }){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function handleSubmit(event){
        event.preventDefault();

        if (password !== confirmPassword) {
        alert("As senhas não coincidem!");
        return;
        }

        console.log("Cadastro realizado!");
    }

    return(
        <div className="horta-register">

            <div className="container">

                <div className="logo"></div>

                <h1>Cadastre sua conta</h1>

                <form onSubmit={handleSubmit}>

                    <div className="input-group">

                        <div className="input-box">
                            <label htmlFor="name">Nome</label>

                            <input
                            type="text"
                            id="name"
                            placeholder='Insira seu nome completo'
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            required
                            />
                        </div>

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

                        <div className="input-box">
                            <label htmlFor="confirmPassword">Confirmar senha</label>

                            <input
                            type="password"
                            id="confirmPassword"
                            placeholder='Insira sua senha novamente'
                            value={confirmPassword}
                            onChange={(event) => setConfirmPassword(event.target.value)}
                            required
                            />
                        </div>
                    </div>

                        <button type='submit' className="register-button">Cadastrar-se</button>

                </form>
                    
                    <div className="login-more">
                        <p>Já tem uma conta?</p><span className={`register-link ${activeTab === 'login' ? 'active' : ''}`} onClick={() => setActiveTab('login')}>Faça login</span>
                    </div>
                   
                </div>

            </div>
    );
}