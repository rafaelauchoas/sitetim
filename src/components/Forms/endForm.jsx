import './forms.css'
import { Component } from "react"
import Button from '../Button/button.jsx'

export default class EndForm extends Component {
  render(){
      return (
        <>
            <div className="viewbaseBody">
                <div className="tituloBase">Quase acabando!</div>

                <h4>O endereço de entrega dos chips é o mesmo cadastrado no CNPJ:</h4>
                <h1 id="Endereco">Endereço</h1>

                <div className="flexVertical">
                    <h4>Ponto de Referência*</h4>
                    <input className="inputExtraLongo" placeholder="Nos informe um ponto de referência"/>
                </div>

                <div className="flexHorizontal">
                    <div className="flexVertical">
                        <div className="tituloBase">Sua fatura mensal</div>        
                    </div>
                </div>

                <div className="flexHorizontal2 textoEnd">
                    <h4>Data de vencimento</h4>
                    <button className="botaoDia">07</button>
                    <button className="botaoDia">10</button>
                    <button className="botaoDia">15</button>
                    <button className="botaoDia">20</button>
                    <button className="botaoDia">25</button>
                </div>

                <div className="flexHorizontal textoEnd">
                    <div className="flexHorizontal textoEnd">
                        <h4>A fatura deve ser enviada para qual e-mail?</h4>
                    </div>
                    <div className="flexHorizontal textoEnd">
                        <input className="inputMedio3" placeholder="Informe o e-mail"/>
                    </div>
                </div>
                
                <a className="link" href="/fim">
                    <Button />
                </a>
            </div>
        </>
      )
  }
}
