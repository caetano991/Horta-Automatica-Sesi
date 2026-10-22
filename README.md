*🌱 Horta Automática SESI*

Irrigação inteligente, monitoramento em tempo real e tecnologia a serviço da sustentabilidade.

=========================================================================

*📖 Sobre o projeto*

A Horta Automática SESI é um sistema web que integra uma horta física automatizada a uma plataforma digital, permitindo acompanhar e controlar o cultivo de forma simples e acessível.

O projeto nasceu da necessidade de cuidar de hortas mesmo sem estar presente todos os dias, reduzindo o desperdício de água e aumentando a eficiência do cultivo. A plataforma reúne a apresentação do projeto, o acesso de usuários e o painel de acompanhamento da horta.

<div align="center"> <img src="https://github.com/user-attachments/assets/5c54f8ee-2a82-48c8-a5e7-42056698b300" alt="Foto do site oficial" width="80%"></div>

=========================================================================

*✨ Funcionalidades*

🏠 Landing page apresentando o projeto e seus objetivos <br/>
🔐 Cadastro e login de usuários <br/>
🌿 Painel da horta com acompanhamento do cultivo <br/>
⚡ Circuitos e componentes eletrônicos utilizados <br/>
🖼️ Galeria de imagens do projeto <br/>
📚 Saiba mais com informações e conteúdo educativo <br/>
📱 Layout responsivo para diferentes tamanhos de tela <br/>

=========================================================================

*📸 Screenshots*
Landing Page
<div align="center"> <img src="https://github.com/user-attachments/assets/5c54f8ee-2a82-48c8-a5e7-42056698b300" alt="Landing Page" width="90%"> </div>

Login e Cadastro
<div align="center"> 
    <img src="https://github.com/user-attachments/assets/cc963d83-7fe3-4e79-af35-56e8e46345f9" alt="Tela de Login" width="45%"> 
    <img src="https://github.com/user-attachments/assets/d846fa0b-873d-4f10-a5e3-968d59ea4be7" alt="Tela de Cadastro" width="45%"> 
</div>

Painel da Horta
<div align="center"> <img src="https://github.com/user-attachments/assets/a1b11776-6851-47a1-ace5-a72344c86705" alt="Painel da Horta" width="90%"> </div>

Projetos e Circuitos
<div align="center"> 
    <img  src="https://github.com/user-attachments/assets/011ad96e-7a15-4d4e-9b09-370df27e4802" alt="Tela de Projetos" width="30%">
    <img   src="https://github.com/user-attachments/assets/26807009-5578-47e4-8f2c-6734da516fb1" alt="PopUp aberto" width="30%"> 
    <img src="https://github.com/user-attachments/assets/36223441-c241-46e2-8daa-480d813d4c87" alt="Tela de Circuitos" width="30%"> 
</div>

=========================================================================

*🛠️ Tecnologias*

Back-end	PHP + Laravel	Rotas, regras de negócio, autenticação e banco de dados <br/>
Ponte	Inertia.js	Liga o Laravel ao React sem precisar de uma API separada <br/>
Front-end	React	Interface e componentes <br/>
Build	Vite	Compilação e servidor de desenvolvimento rápido <br/>
Banco de dados	MySQL	Armazenamento dos dados <br/>
Hardware	Arduino / sensores	Automação da horta física <br/>

=========================================================================

*🚀 Instalação*

Pré-requisitos <br/>

Antes de começar, você precisa ter instalado:

PHP 8.2 ou superior
Composer
Node.js 18 ou superior (com npm)
Um banco de dados (MySQL, ou SQLite que já vem pronto)
Git
<br/>
*Passo a passo*
<br/>
1. Clone o repositório

bash
git clone https://github.com/caetano991/Horta-Automatica-Sesi.git
cd Horta-Automatica-Sesi

Se o projeto estiver dentro de uma subpasta (ex: Horta-back-front), entre nela antes de continuar:

bash
cd Horta-back-front
<br/><br/>
2. Instale as dependências do PHP

bash
composer install
<br/><br/>
3. Instale as dependências do JavaScript

bash
npm install
<br/><br/>
4. Configure o ambiente
<br/>
bash
cp .env.example .env
php artisan key:generate

Abra o arquivo .env e configure o banco de dados:
<br/>
.env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=horta
DB_USERNAME=root
DB_PASSWORD=
<br/><br/>
5. Crie as tabelas do banco

bash
php artisan migrate
<br/><br/>
6. Rode o projeto (use dois terminais ao mesmo tempo)
<br/>
Terminal 1, servidor do Laravel:
<br/>
bash
php artisan serve
<br/>
Terminal 2, servidor do Vite:
<br/>
bash
npm run dev
<br/><br/>
7. Acesse no navegador
<br/>
http://127.0.0.1:8000
<br/>
⚠️ Acesse sempre pela URL do php artisan serve. O endereço do Vite (localhost:5173) serve apenas para entregar os arquivos JS/CSS ao Laravel.
</details>

=========================================================================

*🗺️ Roadmap* <br/>
✅ Estrutura do front-end em React <br/>
✅ Integração Laravel + Inertia + React <br/>
✅ Autenticação de usuários (login e cadastro) <br/>
✅ Persistência dos dados no banco <br/> 
 Integração com os sensores da horta <br/>
 Controle da irrigação pelo painel <br/>
 Gráficos de umidade e temperatura <br/>
 Notificações e alertas <br/>
 Deploy em produção <br/>

=========================================================================

*📄 Licença*

Distribuído sob a licença Miguel Caetano.

<div align="center">

Feito com 💚 e muito café por quem acredita que tecnologia e natureza podem andar juntas.

</div>
