import './CI.css'
import { TbNotebook } from "react-icons/tb";
import Container from 'react-bootstrap/Container'
import Button from '../Button/button.jsx'

export default function CI () {
  return (
    <Container className='contCI'>
      <div id='bodyCI'>
        <div id='titulo'>
          <TbNotebook size={50}/> 
          <h1 id="pedido">Seu Pedido</h1>
        </div>
        <div id="bottom">
          <div className='containerBot'>
            <div className='tituloLinhas'>Total de Linhas</div>
            <div className="valorBot" id='qtdLinhas'>1</div>
          </div>
          <div id="hr"/>
          <div className='containerBot'>
            <div className='tituloLinhas'>Valor total dos planos</div>
            <div className="valorBot" id='valorTotal'>R$129,90</div>
          </div>
          <a className="link" href="/empresa">
            <Button />
         </a>
        </div>
      </div>
    </Container>
  )
}