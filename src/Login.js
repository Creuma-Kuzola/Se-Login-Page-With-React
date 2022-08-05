import React from 'react';
import LeftAside from "./LeftAside";
import RightAsideLogin from "./RightAsideLogin";
import "@fontsource/source-sans-pro"
import "@fontsource/noto-serif"
import imgLogin from './img/allef-vinicius-6ypOmTNK2FA-unsplash.png'


const Login = () => {

    const altImgLogin = "Woman holding perfume"
    return ( 

        <div className="div-aside">
            <LeftAside imagem={imgLogin} alt={altImgLogin} />
            <RightAsideLogin />
        </div>

     );
}
 
export default Login;