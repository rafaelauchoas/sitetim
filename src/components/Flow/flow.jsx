import './flow.css';
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdArrowForwardIos } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
import { Component } from "react";

export default class Flow extends Component {
    renderSwitch(param) {
    switch(param) {
        case '/empresa':
        return (
            <div className="flowBase">
                <HiOutlineBuildingOffice2 size={30}/> 
                <span>Empresa</span>
                <MdArrowForwardIos size={15}/> 
                <BsPerson size={30}/>
                <MdArrowForwardIos size={15}/> 
                <IoLocationOutline size={30}/>
                <MdArrowForwardIos size={15}/> 
                <HiOutlineDocumentCheck size={30}/>
            </div>)
         case '/administracao':
            return (
                <div className="flowBase">
                    <HiOutlineBuildingOffice2 size={30}/>
                    <MdArrowForwardIos size={15}/> 
                    <BsPerson size={30}/>
                    <span>Administrador</span>
                    <MdArrowForwardIos size={15}/> 
                    <IoLocationOutline size={30}/>
                    <MdArrowForwardIos size={15}/> 
                    <HiOutlineDocumentCheck size={30}/>
                </div>)
         case '/endereco':
            return (
                <div className="flowBase">
                    <HiOutlineBuildingOffice2 size={30}/>
                    <MdArrowForwardIos size={15}/> 
                    <BsPerson size={30}/>
                    <MdArrowForwardIos size={15}/> 
                    <IoLocationOutline size={30}/> 
                    <span>Endereço</span>
                    <MdArrowForwardIos size={15}/> 
                    <HiOutlineDocumentCheck size={30}/>
                </div>)
         case '/fim':
            return (
                <div className="flowBase">
                    <HiOutlineBuildingOffice2 size={30}/>
                    <MdArrowForwardIos size={15}/> 
                    <BsPerson size={30}/>
                    <MdArrowForwardIos size={15}/> 
                    <IoLocationOutline size={30}/>
                    <MdArrowForwardIos size={15}/> 
                    <HiOutlineDocumentCheck size={30}/> 
                    <span>Obrigado!</span>
                </div>)
        default:
        return '';
    }
    }

    render() {
    var param = window.location.pathname;
    return (
        <div>
            {this.renderSwitch(param)}
        </div>
    );
}
}
