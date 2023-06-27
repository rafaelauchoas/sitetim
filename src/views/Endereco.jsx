import {Link, Navigate, Outlet} from "react-router-dom"
// import {useStateContext} from "../contexts/ContextProvider.jsx"
import {BrowserView, MobileView} from 'react-device-detect';
import Header from '../components/Header/Header.jsx'
import CL from '../components/ContainerLateral/CL.jsx'
import Button from '../components/Button/button.jsx'
import EndForm from '../components/Forms/endForm.jsx'
import './carrinho.css'

export default function Endereco(){
    // const {token} = useStateContext()

    // if (!token) return <Navigate to="/" />
    return (
        <>  
            <BrowserView>
            <div className="container">
                <div className="viewbase">
                    <Header className="viewbaseHeader"/>
                    <EndForm/>
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
