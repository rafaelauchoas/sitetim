import {Link, Navigate, Outlet} from "react-router-dom"
// import {useStateContext} from "../contexts/ContextProvider.jsx"
import {BrowserView, MobileView} from 'react-device-detect';
import Header from '../components/Header/Header.jsx'
import CL from '../components/ContainerLateral/CL.jsx'
import EmpresaForm from '../components/Forms/empresaForm.jsx'
// import Forms from '../components/Forms/forms.jsx'
import './carrinho.css'

export default function Empresa(){
    return (
        <>  
            <BrowserView>
            <div className="container">
                <div className="viewbase">
                    <Header className="viewbaseHeader"/>
                    {/* <Forms/> */}
                    <EmpresaForm/>
                </div>
                <div className="viewbaseLateral">
                    <CL/>     
                </div>
            </div>
            </BrowserView>
            <MobileView>
            <div className="container">
                <div className="viewbase">
                    <Header className="viewbaseHeader"/>
                </div>
                <div className="viewbaseLateral">
                    <CL/>     
                </div>
            </div>
            </MobileView>
        </>
    )
}
