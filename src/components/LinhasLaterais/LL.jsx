import './LL.css'
import { Component } from "react"

export default class LL extends Component {
  render(){
      return (
        <div className="base">
          <div className="tituloLinha">
            <span>Nova Linha (<div className="dddLinha">12</div>)</span>
          </div>
          <div className="conteudoLinha">
            <div>
              <div className="contTitulo">Plano de Voz</div>
              <div className="contDados">Ilimitado</div>
            </div>
            <div>
              <div className="contTitulo">Pacote de Dados</div>
              <div className="contDados">5GB</div>
            </div>
            <div>
              <div className="contTitulo">Valor Mensal</div>
              <div className="contDados">39GB</div>
            </div>
          </div>
        </div>
      )
  }
}
