import './headerMobile.css'
import logo from '../../assets/logo-tim-branco.svg';

export default function HeaderMob () {
    return (
    /* Uso de div para a header para evitar problemas de compatibilidade com componente Flow */
    <div>
        <a id="linkMob" href="/">
            <img
                src={logo}
                width="30%"/>
         </a>
    </div>
    )
}