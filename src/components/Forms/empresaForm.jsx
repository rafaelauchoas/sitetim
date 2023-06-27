import './forms.css'
import { Component } from "react"
import Button from '../Button/button.jsx'
import React from 'react'
import { useContext } from 'react';
// import { Context } from './context';
import { ContextProvider } from '../../contexts/ContextProvider';
// import { StateContext } from '../../contexts/ContextProvider';

export default class EmpresaForm extends Component {
    render(){
        return (
            <>
                <div className="viewbaseBody">
                    <div className="tituloBase">Vamos começar, primeiro os dados da empresa:</div>
                    <h4>CNPJ*</h4>
                    <input className="inputExtraLongo" placeholder="Nos informe o CNPJ da empresa"/>

                    <div className="flexHorizontal">
                        <div className="flexVertical">
                            <h4>Razão Social*</h4>
                            <input className="inputLongo" placeholder="Razão Social"/>
                        </div>
                        <div className="flexVertical">
                            <h4>Telefone*</h4>
                            <input className="inputCurto" placeholder="Telefone com DDD*"/>
                        </div>
                    </div>

                    <div className="flexHorizontal">
                        <div className="flexVertical">
                            <h4>Representante Legal 1*</h4>
                            <input className="inputMedio" placeholder="Nome Completo"/>
                        </div>
                        <div className="flexVertical">
                            <h4>CPF*</h4>
                            <input className="inputCurto" placeholder="Informe o CPF"/>
                        </div>
                        <div className="flexVertical">
                            <h4>RG*</h4>
                            <input className="inputCurto" placeholder="Informe o RG"/>
                        </div>
                    </div>

                    <div className="flexHorizontal">
                        <div className="flexVertical">
                            <h4>Representante Legal 2*</h4>
                            <input className="inputMedio" placeholder="Nome Completo"/>
                        </div>
                        <div className="flexVertical">
                            <h4>CPF*</h4>
                            <input className="inputCurto" placeholder="Informe o CPF"/>
                        </div>
                        <div className="flexVertical">
                            <h4>RG*</h4>
                            <input className="inputCurto" placeholder="Informe o RG"/>
                        </div>
                    </div>
                    
                    <a className="link" href="/administracao">
                        <Button />
                    </a>
                </div>
            </>
        )
    }
}
