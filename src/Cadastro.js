import React from 'react'
import LeftAside from "./LeftAside";
import imgCadastro from './img/lucas-mendes-CyfmSpqNMD8-unsplash.jpg'
import "@fontsource/source-sans-pro"
import "@fontsource/noto-serif"
import RightAsideCadastro from './RightAsideCadastro';


const Cadastro = () => {

    const altImgCadastro = "Perfume with acessories"
    
    return ( 
        <div className="div-aside">
            <LeftAside imagem={imgCadastro} alt={altImgCadastro} />
            <RightAsideCadastro />
        </div>

     );
}
 
export default Cadastro;