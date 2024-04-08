import React, { useEffect, useState, useRef } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './css/dcards.css';
import { Link, animateScroll as scroll } from "react-scroll";

function Dashboard(props) {
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { top, bottom } = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      setIsVisible(top < windowHeight && bottom >= 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const corPorcentagem = getCorPorcentagem(props.porcent);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Link
      activeClass="active"
      to="Dashboard"
      spy={true}
      smooth={true}
      duration={500}
    >
      <div className={`Dashboard ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand} ref={cardRef} style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 1s ease' }}>
        <div className='CompactCard'>
          <div className='grafico'>
            <CircularProgressbar
              value={props.porcent}
              text={`${props.porcent}%`}
              styles={{
                path: {
                  stroke: corPorcentagem,
                },
              }}
            />
          </div>
          <div className='titulodiv'>
            <h3 className='titulo'>{props.titulo}</h3>
            {isExpanded && (
              <div className="detalhes">

                <div className="detalhe-info">
                  <div className="detalhe-subtitulo">
                    <p>Bis Xtra Familia:</p>
                    <p>Budda bala 15g:</p>
                    <p>Budda bala 75g:</p>
                    <p>Club Social: ...</p>
                    <p>Oreo Familia: ...</p>
                    <p>Hall Base:    ...</p>
                    <p>Tablete 34gr: ...</p>
                  </div>
                  <div className="detalhe-item">
                    <p>Meta: 100  Real:75</p>
                    <p>Meta: 100  Real:102</p>
                    <p>Meta: 100  Real:80</p>
                    <p>Meta: 100  Real:60</p>
                    <p>Meta: 100  Real:60</p>
                    <p>Meta: 100  Real:95</p>
                    <p>Meta: 100  Real:60</p>
                  </div>
                  <div className="detalhe-item">
                  </div>
                  <div className='porcentagem'>
                    <p>75%</p>
                    <p>102%</p>
                    <p>80%</p>
                    <p>60%</p>
                    <p>60%</p>
                    <p>95%</p>
                    <p>60%</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className='conteudo'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
            </svg>
            <p>{props.media}</p>
            <p>{props.meta}</p>
            <p>{props.tend}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

function getCorPorcentagem(porcentagem) {
  if (porcentagem > 50) {
    return 'var(--alert-color-green)';
  } else if (porcentagem >= 40 && porcentagem <= 50) {
    return 'var(--alert-color-yellow)';
  } else {
    return 'var(--alert-color-red)';
  }
}

export default Dashboard;
