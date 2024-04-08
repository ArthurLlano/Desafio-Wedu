import React from 'react';
import { useSpring, animated } from 'react-spring';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Dashboard(props) {
  const corPorcentagem = getCorPorcentagem(props.porcent);
  return (
    <animated.div className='Dashboard'>
      <h1 className='titulodapg'>Dashboard</h1>
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
        </div>
        <div className='conteudo'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
          </svg>
          <p>Média dia: R$ 34.000</p>
          <p>Meta:650k / Real: 340k</p>
          <p>Tendência: 600k</p>
        </div>
      </div>
    </animated.div>
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

