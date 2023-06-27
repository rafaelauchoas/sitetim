import './headerFim.css'
import logo from '../../assets/logo-tim-branco.svg';
import {Link} from 'react-router-dom';

export default function Header () {
    return (
    /* Uso de div para a header para evitar problemas de compatibilidade com componente Flow */
    <div id="header">
        <img
                src={logo}
                width="10%"
         />
         <a id="linkHome" href="/">
            <span>Voltar</span>
         </a>
    </div>
    )
}