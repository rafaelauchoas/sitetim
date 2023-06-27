import './CL.css'
import { TbNotebook } from "react-icons/tb";
import Container from 'react-bootstrap/Container'
import LL from '../LinhasLaterais/LL.jsx'

export default function CL () {
    return (
      <Container className='contCL'>
        <div id='body'>
          <div id='titulo'>
            <TbNotebook size={40}/> 
            <h2 id="pedido">Seu Pedido</h2>
          </div>
          <div id='conteudo'>
            <LL/>
            {/* <LL/> */}
            {/* <LL/> */}
            {/* <LL/> */}
            {/* <LL/> */}
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
          </div>
        </div>
      </Container>
    )
}