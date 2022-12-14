import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './right-aside-cadastro.css'

const RightAside = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        /*console.log(email, password)*/
    }

    return ( 

        <section className="section-right-aside">
            <p className='p-tittle'>Faça Login</p>
            <form onSubmit={handleSubmit}>

                <input 
                type="text" 
                required
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
                className="input-style input-1"
                placeholder='Escreva o seu email'
                />

                <input 
                type="password"
                required
                value={password}
                onChange={(e) => {setPassword(e.target.value)}}
                className="input-style input-2"
                placeholder='Escreva a palavra-passe'
                 />

                <p className="p-esqueceu">Esqueceu a palavra-passe?</p>
                <button className="btn-login">Login</button>
                <p className="p-ainda">Ainda não tem uma conta? <Link to="/" className='link-p'> Cadastre-se! </Link></p>
            </form>
        </section>
     );
}
 
export default RightAside;