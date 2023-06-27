import './LP.css'
import { Component } from "react"
import { IoMdArrowDropdown } from "react-icons/io";
import { BsPlus } from "react-icons/bs";

export default class LL extends Component {
  render(){
      return (
        <div className="baseMontarPlano">
          <div className="conteudoLinha">
            <div className="flexH">
              <div className="contDados">Nova linha</div>
              <div input></div>
              <IoMdArrowDropdown size={20}/>
            </div>
            <div>
              <div className="contTitulo">DDD da Linha</div>
              <div className="contDados">(12)</div>
            </div>
            <div>
              <div className="contTitulo">Plano de Voz</div>
              <div className="contDados">Ilimitado</div>
            </div>
            <div>
              <div className="contTitulo">Pacote de Dados</div>
              <div className="contDados">5GB</div>
            </div>
            <div className="centerIcon"><BsPlus id="verMais" size={35}/></div>
            <div id="hrW"/>
            <div>
              <div className="contTitulo">Valor Mensal</div>
              <div className="contDados">39GB</div>
            </div>
          </div>
        </div>
      )
  }
}
