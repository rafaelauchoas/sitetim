import './forms.css'
import { Component } from "react"
import Button from '../Button/button.jsx'

export default class AdmForm extends Component {
  render(){
      return (
        <>
            <div className="viewbaseBody">
                <div className="tituloBase">Ótimo! Agora informe os dados do responsável pela compra:</div>
                <label className="form-control">
                    <input type="checkbox" />
                    Usar os mesmos dados anteriores?
                </label>

                <div className="flexHorizontal">
                    <div className="flexVertical">
                        <h4>CPF do responsável da empresa</h4>
                        <input className="inputExtraLongo" placeholder="Nos informe o CPF do responsável pela compra"/>
                    </div>
                </div>

                <div className="flexHorizontal">
                    <div className="flexVertical">
                        <h4>Nome Completo*</h4>
                        <input className="inputExtraLongo" placeholder="Nome completo do responsável pela compra"/>
                    </div>
                </div>

                <div className="flexHorizontal">
                    <div className="flexVertical">
                        <h4>Telefone*</h4>
                        <input className="inputMedio2" placeholder="Celular com DDD para contato"/>
                    </div>
                    <div className="flexVertical">
                        <h4>RG*</h4>
                        <input className="inputMedio2" placeholder="Número do RG"/>
                    </div>
                </div>

                <div className="flexHorizontal">
                    <div className="flexVertical">
                        <h4>E-mail*</h4>
                        <input className="inputExtraLongo" placeholder="Informe seu e-mail"/>                        
                    </div>
                </div>
                
                <a className="link" href="/endereco">
                    <Button />
                </a>
            </div>
        </>
      )
  }
}
