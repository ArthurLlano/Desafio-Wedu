import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/dashbody.css'
import Header from './header';
import Dashboard from './dashboard';
import Dashboard2 from './dashbord2';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Dashboard titulo='Total de Vendas (R$)' porcent='80'/>
    <Dashboard2 titulo='Total de Vendas (ton)' porcent='70' media='Média dia: 0.8t' meta='Meta: 1,60t / real:0,76t' tend='Tendência: 1,58t'/>
    <Dashboard2 titulo='Positivação PDVs' porcent='41 ' media='Média dia: 15' meta='Meta: 350 / real:145' tend='Tendência: 290'/>
    <Dashboard2 titulo='Positivação Produto Foco ' porcent='37' media='Média dia: 18' meta='Meta: 339 / real: 175' tend='Tendência: 350'/>
    <Dashboard2 titulo='Chocolate' porcent='47' media='Média dia: 0.8t' meta='Meta: 25k / real: 10k' tend='Tendência: 280'/>
    <Dashboard2 titulo='Lorem ipsum' porcent='64' media='Média dia: 0.8t' meta='Meta: 25k / real: 10k' tend='Tendência: 1,58t'/>
    <Dashboard2 titulo='Lorem ipsum' porcent='37' media='Média dia: 0.8t' meta='Meta: 1,60t / real:0,76t' tend='Tendência: 1,58t'/>
  </React.StrictMode>,
  document.getElementById('root')
);