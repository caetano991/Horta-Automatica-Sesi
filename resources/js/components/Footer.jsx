import "./Footer.css";

import {
  Sprout,
  ArrowUpRight,
  Heart,
} from "lucide-react";

import { FaInstagram, FaLinkedin } from "react-icons/fa";

const desenvolvedores = [
  {
    nome: "Alicya",
    instagram: "a",
    linkedin: "a",
  },
  {
    nome: "Miguel",
    instagram: "a",
    linkedin: "a",
  },
  {
    nome: "Octavio",
    instagram: "a",
    linkedin: "a",
  },
  {
    nome: "Raviel",
    instagram: "a",
    linkedin: "a",
  },
];

const orientadores = ["Ricardo", "André"];

function Desenvolvedor({ pessoa }) {
  return (
    <li className="footer-developer">
      <span className="footer-developer-name">
        {pessoa.nome}
      </span>

      <div className="footer-socials">
        {pessoa.instagram && pessoa.instagram !== "#" && (
          <a
            href={pessoa.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram de ${pessoa.nome}`}
          >
            <FaInstagram />
          </a>
        )}

        {pessoa.linkedin && pessoa.linkedin !== "#" && (
          <a
            href={pessoa.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`LinkedIn de ${pessoa.nome}`}
          >
            <FaLinkedin />
          </a>
        )}
      </div>
    </li>
  );
}

export function Footer() {
  return (
    <footer className="horta-footer">
      <div className="footer-content">

        {/* Identidade visual */}
        <div className="footer-about">

          <div className="footer-logo">
            <Sprout className="footer-logo-icon" />

            <h2>Horta Inteligente</h2>
          </div>

          <p className="footer-description">
            Tecnologia, sustentabilidade e educação
            cultivando um futuro melhor.
          </p>
        </div>

        {/* Navegação */}
        <nav className="footer-navigation">
          <h3 className="footer-title">
            Navegação
          </h3>

          <ul className="footer-links">
            <li>
              <a href="#inicio">
                Início
                <ArrowUpRight />
              </a>
            </li>

            <li>
              <a href="#projetos">
                Nossos Projetos
                <ArrowUpRight />
              </a>
            </li>

            <li>
              <a href="#circuitos">
                Nosso Circuito
                <ArrowUpRight />
              </a>
            </li>

            <li>
              <a href="#imagens">
                Imagens da Horta
                <ArrowUpRight />
              </a>
            </li>

            <li>
              <a href="#saiba-mais">
                Saiba Mais
                <ArrowUpRight />
              </a>
            </li>
          </ul>
        </nav>

        {/* Desenvolvedores */}
        <div className="footer-developers">
          <h3 className="footer-title">
            Desenvolvedores
          </h3>

          <ul className="footer-developer-list">
            {desenvolvedores.map((pessoa) => (
              <Desenvolvedor
                key={pessoa.nome}
                pessoa={pessoa}
              />
            ))}
          </ul>
        </div>

      </div>

      {/* Orientadores na parte inferior */}
      <div className="footer-mentors">
        <h3 className="footer-title">
          Orientadores
        </h3>

        <div className="footer-mentor-list">
          {orientadores.map((nome) => (
            <span
              className="footer-mentor"
              key={nome}
            >
              {nome}
            </span>
          ))}
        </div>
      </div>

      {/* Créditos */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          © {new Date().getFullYear()} Horta Inteligente.
          Todos os direitos reservados.
        </p>

        <p className="footer-credit">
          Desenvolvido com dedicação pela equipe.
          <Heart className="footer-heart" />
        </p>
      </div>
    </footer>
  );
}