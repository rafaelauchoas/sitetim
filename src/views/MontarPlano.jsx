import {Link, Navigate, Outlet} from "react-router-dom"
// import {useStateContext} from "../contexts/ContextProvider.jsx"
import {BrowserView, MobileView} from 'react-device-detect';
import logo from '../assets/logo-tim-branco.svg';
import CI from '../components/ContainerInferior/CI.jsx'
import CImob from '../components/ContainerInferior/CImob.jsx'
import LP from '../components/LinhasPlano/LP.jsx'
import HeaderMob from '../components/Header/HeaderMobile.jsx'
import './montarplano.css'
import { BsPlus } from "react-icons/bs";

export default function MontarPlano(){
    // const {token} = useStateContext()

    // if (!token) return <Navigate to="/" />

    return (
        <>
            <BrowserView>
                <div id="containerPlano">
                <img id="imgUm"
                    src={logo}
                    width="10%"
                />
                <div id="textoPlano">
                    <h1>Monte o plano desejado para sua empresa:</h1>
                    <button><BsPlus size={20}/><h3>Adicionar Linha</h3></button>
                </div>
                <div id="listaLinhas">
                    <LP/>
                    {/* <LP/> */}
                    {/* <LP/> */}
                    {/* <LP/> */}
                </div>
                <CI/>
                </div>
            </BrowserView>
            <MobileView>
                <div>
                    <CImob/>
                        <div id="planoMob">
                        <HeaderMob/>
                        <div id="MobPlano">
                            <h1>Monte o plano desejado para sua empresa:</h1>
                        </div>
                        <div id="listaLinhas">
                            <LP/>
                            {/* <LP/> */}
                            {/* <LP/> */}
                            {/* <LP/> */}
                        </div>
                        <button><BsPlus size={40}/></button>
                    </div> 
                </div>
            </MobileView>
        </>
    )
}
