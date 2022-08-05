import React from 'react';


const LeftAside = (imgSrc, altImg) => {

    return ( 

        <section className="section-left-aside">
            <img alt={altImg.alt} src={imgSrc.imagem} className="left-aside-img" />
        </section>

     );
}
 
export default LeftAside;