import Header from '../components/Header/HeaderFim.jsx'
import HeaderMob from '../components/Header/HeaderMobile.jsx'
import {BrowserView, MobileView} from 'react-device-detect';

import './carrinho.css'

export default function NotFound(){
    return (
        <>  
            <BrowserView>
                <div className="container">
                    <div className="viewbase">
                        <Header className="viewbaseHeader"/>
                        <div className="viewbaseFim">
                            <div className="tituloFim">404 - Not Found</div>
                        </div>
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <div className="container">
                    <div className="viewbase">
                        <HeaderMob className="mobileHeader"/>
                        <div className="mobileFim">
                            <div className="tituloFim">404 - Not Found</div>
                        </div>
                    </div>
                </div>
            </MobileView>
        </>
    )
}