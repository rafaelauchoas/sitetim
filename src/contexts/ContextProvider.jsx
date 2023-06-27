import {createContext, useContext, useState} from "react";

// const StateContext = createContext({
//   token: null,
//   notification: null,
//   setToken: () => {},
//   setNotification: () => {}
// })

const StateContext = createContext({
  CNPJ: null,
  setCNPJ: () => {},
  CPFResp: null,
  setCPFResp: () => {},
  NomeResp: null,
  setNomeResp: () => {},
  telefoneResp: null,
  setTelefoneResp: () => {},
  RgResp: null,
  setRGResp: () => {},
  emailResp: null,
  setEmailResp: () => {},
  pontoRef: null,
  setPontoRef: () => {},
  DataVenc: null,
  setDataVenc: () => {},
  emailFatura: null,
  setEmailFatura: () => {}
})

export const ContextProvider = ({children}) => {
  // const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
  const [CNPJ, _setCNPJ] = useState('');
  const [CPFResp, _setCPFResp] = useState('');
  const [NomeResp, _setNomeResp] = useState('');
  const [telefoneResp, _setTelefoneResp] = useState('');
  const [RgResp, _setRGResp] = useState('');
  const [emailResp, _setEmailResp] = useState('');
  const [pontoRef, _setPontoRef] = useState('');
  const [DataVenc, _setDataVenc] = useState('');
  const [emailFatura, _setEmailFatura] = useState('');

  const setToken = (token) => {
    // _setToken(token)
    // if (token) {
    //   localStorage.setItem('ACCESS_TOKEN', token);
    // } else {
    //   localStorage.removeItem('ACCESS_TOKEN');
    // }
  }

  const setCNPJ = (CNPJ) => {
    _setToken(CNPJ)
  }

  const setCPFResp = (CPFResp) => {
    _setToken(CPFResp)
  }
  
  const setNomeResp = (NomeResp) => {
    _setToken(NomeResp)
  }
  
  const setTelefoneResp = (telefoneResp) => {
    _setToken(telefoneResp)
  }
  
  const setRGResp = (RgResp) => {
    _setToken(RgResp)
  }
  
  const setEmailResp = (emailResp) => {
    _setToken(emailResp)
  }
  
  const setPontoRef = (pontoRef) => {
    _setToken(pontoRef)
  }
  
  const setDataVenc = (DataVenc) => {
    _setToken(DataVenc)
  }
  
  const setEmailFatura = (emailFatura) => {
    _setToken(emailFatura)
  }
  
  // const setNotification = message => {
  //   _setNotification(message);

  //   setTimeout(() => {
  //     _setNotification('')
  //   }, 5000)
  // }

  return (
    <StateContext.Provider value={{
      CNPJ,
      setCNPJ,
      CPFResp,
      setCPFResp,
      NomeResp,
      setNomeResp,
      telefoneResp,
      setTelefoneResp,
      RgResp,
      setRGResp,
      emailResp,
      setEmailResp,
      pontoRef,
      setPontoRef,
      DataVenc,
      setDataVenc,
      emailFatura,
      setEmailFatura
      // setNotification
    }}>
      {children}
    </StateContext.Provider>
  );
}

export const useStateContext = () => useContext(StateContext);