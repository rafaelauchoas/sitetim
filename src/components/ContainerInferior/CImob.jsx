import './CImob.css'
import { TbNotebook } from "react-icons/tb";
import Container from 'react-bootstrap/Container'
import Button from '../Button/buttonFim.jsx'

export default function CImob () {
  return (
    <Container className='contCImob'>
      <div id='bodyCImob'>
        <div id='tituloMob'>
          <TbNotebook size={60}/> 
          <h3 id="pedidomob">Seu Pedido</h3>
        </div>
        <div id="bottomMob">
          <div className='containerBotMob'>
            <div className='tituloLinhas'>Total de Linhas</div>
            <div className="valorBotMob" id='qtdLinhas'>1</div>
          </div>
          <div id="hrMob"/>
          <div className='containerBotMob'>
            <div className='tituloLinhas'>Valor total dos planos</div>
            <div className="valorBotMob" id='valorTotal'>R$129,90</div>
          </div>
          <Button />
        </div>
      </div>
    </Container>
  )
}