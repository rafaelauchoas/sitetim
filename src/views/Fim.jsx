import {Link, Navigate, Outlet} from "react-router-dom"
// import {useStateContext} from "../contexts/ContextProvider.jsx"
import {BrowserView, MobileView} from 'react-device-detect';
import Header from '../components/Header/Header.jsx'
import CL from '../components/ContainerLateral/CL.jsx'
import ButtonFim from '../components/Button/buttonFim.jsx'
import './carrinho.css'

export default function Fim(){
    // const {token} = useStateContext()

    // if (!token) return <Navigate to="/" />
    return (
        <>  
            <div className="container">
                <div className="viewbase">
                    <Header className="viewbaseHeader"/>
                    <div className="viewbaseFim">
                        <div className="tituloFim">Obrigado por realizar seu pedido com a TIM</div>
                        <h3>Em breve um dos nossos colaboradores entrará em contato</h3>
                        
                        <a className="link" href="/">
                            <ButtonFim/>
                        </a>
                    </div>
                </div>
                <div className="viewbaseLateral">
                    <CL/>     
                </div>
            </div>
        </>
    )
}
