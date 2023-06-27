import './header.css'
import logo from '../../assets/logo-tim-branco.svg'; 
import Flow from '../Flow/flow.jsx'

export default function Header () {
    return (
    /* Uso de div para a header para evitar problemas de compatibilidade com componente Flow */
    <div id="header">
        <img
            src={logo}
            width="10%"
        />
        <Flow />
    </div>
    )
}