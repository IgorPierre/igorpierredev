//Styles
import './App.css'

//Components
import { SocialLinks } from './components/SocialLinks'
import { Navigator } from './components/Navigator'
import { AboutContainer, Section, Title } from './components/Section'
import { ArowButton, ButtonLink, ProjectsArea } from './components/ProjectsArea'

//Hooks
import { useEffect, useRef, useState } from 'react'

//Icons
import { GrGithub, GrInstagram, GrLinkedin} from "react-icons/gr"
import { AiFillCaretLeft, AiFillCaretRight, AiFillPropertySafety} from "react-icons/ai"
import { SiCss3, SiHtml5, SiJavascript, SiMysql, SiPhp, SiReact } from "react-icons/si"

//Images
import sneakersshop from "./assets/sneakers-shop.png"
import sneakersshop2 from "./assets/sneakers-shop2.png"
import sneakersshop3 from "./assets/sneakers-shop3.png"
import selfie from "./assets/selfie.png"
import locadorafilmes from "./assets/locadora-filmes.png"
import locadorafilmes2 from "./assets/locadora-filmes2.png"
import locadorafilmes3 from "./assets/locadora-filmes3.png"
import nullbank from "./assets/nullbank.png"
import nullbank2 from "./assets/nullbank2.png"
import nullbank3 from "./assets/nullbank3.png"
import formulario from "./assets/formulario.png"
import formulario2 from "./assets/formulario2.png"
import formulario3 from "./assets/formulario3.png"
import { SkillsArea } from './components/SkillsArea'


function App() {

  const projects = [
    {
      id: 1,
      name: "Sneakers Shop",
      image: [sneakersshop, sneakersshop2, sneakersshop3],
      description: "Interface responsiva de um pequeno E-Commerce de tênis, desenvolvido com as tecnologias ReactJs, NodeJs e MySQL",
      githubUrl: "https://github.com/IgorPierre/sneakers-shop"
    },
    {
      id: 2,
      name: "Nullbank",
      image: [nullbank, nullbank2, nullbank3],
      description: "Um banco virtual completo, desenvolvido com as tecnologias HTML5, CSS3, Javascript , PHP e MySQL, onde o usuário pode realizar várias transações bancárias e também possui vários niveis de acesso.",
      githubUrl: "https://github.com/EmanuelDevid/TrabalhoBD-2022_2-Equipe469870"
    },
    {
      id: 3,
      name: "Locadora de Filmes",
      image: [locadorafilmes, locadorafilmes2, locadorafilmes3],
      description: "Uma aplicação feita em ReactJs que consome uma API de filmes e simula uma pequena locadora, onde o usuário pode visualizar filmes e seus detalhes, além de poder pesquisar por outros filmes por seus titulos.",
      githubUrl: "https://github.com/IgorPierre/locadora_filmes_com_react"
    },
    {
      id: 4,
      name: "Formulário Multietapas",
      image: [formulario, formulario2, formulario3],
      description: "Um pequeno formulário dividido em várias etapas feito em ReactJs. a medida que o usuário preenche os dados ele é redirecionado para uma nova etapa.",
      githubUrl: "https://github.com/IgorPierre/form_multi_etapas_react"
    },
  ]


  const [curentData, setCurentData] = useState(0)


  const handleLeftClick = (e) => {
    e.preventDefault()
    setCurentData(curentData -1)
  }

  const handleRightClick = (e) => {
    e.preventDefault()
    setCurentData(curentData + 1)
  }

  return (
    <div className="App">
      <SocialLinks>
        <Navigator vertical>
            <a href=""><GrGithub/></a>
            <a href=""><GrInstagram/></a>
            <a href=""><GrLinkedin/></a>
        </Navigator>
      </SocialLinks>

      <Section primary>
        <AboutContainer >
          <img className='profile-image' src={selfie} alt="" />

          <div className='info-container'>
            <span>Olá, me chamo <strong>Igor Pierre</strong></span>
            <h2>Front-End Developer</h2>
            <div>
              <p>Apaixonado pela Web !!<br/>Iniciei meus estudos na area da programação em 2019 e atualmente estou cursando o 8º semestre do curso de <strong>Engenharia da Computação</strong>, pela Universidade Federal do Ceará (UFC).</p>
              <br/>
              <p>Atualmente, tenho estudado sobre a biblioteca <strong>ReactJs</strong> e venho descobrindo várias possibilidades que esta grande biblioteca proporciona, como o uso dos <strong>ract-hooks</strong>, <strong>react-router</strong>, <strong>styled-components</strong>, etc.</p>
              <br/>
              <p>Logo abaixo, estão listados alguns projetos que, por mais que sejam apenas projetos pessoais, são fruto de deicação e esforço para aplicar os conhecimentos que tenho adiquirido.</p>
            </div>
          </div>
        </AboutContainer>
      </Section>

      <SkillsArea>
        <div className='skill'>
          <SiReact/>
        </div>

        <div className='skill'>
          <SiJavascript/>
        </div>

        <div className='skill'>
          <SiPhp/>
        </div>

        <div className='skill'>
          <SiMysql/>
        </div>

        <div className='skill'>
          <SiHtml5/>
        </div>

        <div className='skill'>
          <SiCss3/>
        </div>
      </SkillsArea>

      <Section>
        <Title primary>PROJETOS</Title>
        
        <ProjectsArea>
          {(curentData != 0) && <ArowButton left onClick={handleLeftClick}><AiFillCaretLeft/></ArowButton>}
          <div className='project-content'>
            <div className="grid-img">
              <img src={projects[curentData].image[0]} alt="imagem do projeto" className='img1'/>
              <img src={projects[curentData].image[1]} alt="imagem do projeto" className='img2'/>
              <img src={projects[curentData].image[2]} alt="imagem do projeto" className='img3'/>
            </div>
            <div className='project-details'>
              <Title>{projects[curentData].name}</Title>
              <p>{projects[curentData].description}</p>
              <ButtonLink className='github-link' href={projects[curentData].githubUrl}>ver mais</ButtonLink>
            </div>
          </div>
          {(curentData < (projects.length -1)) && <ArowButton right onClick={handleRightClick}><AiFillCaretRight/></ArowButton>}
        </ProjectsArea>
      </Section>



    </div>
  )
}

export default App
