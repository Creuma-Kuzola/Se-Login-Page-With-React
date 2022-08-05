import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const RightAsideCadastro = () => {

    const [nomeDeUsuario,setNomeDeUsuario] = useState('')
    const [email, setEmail] = useState('')
    const [pass1, setPass1] = useState('')
    const [pass2, setPass2] = useState('')

    return (

        <section>
            <p className='p-tittle'>Criar conta</p>
            <form >
                <input
                    type="text"
                    placeholder='Nome de usuário'
                    value={nomeDeUsuario}
                    onChange={(e) => {setNomeDeUsuario(e.target.value)}}
                    className="input-style input-1"
                />

                <input
                    type="email"
                    placeholder='Email'
                    value={email}
                    onChange= {(e) =>{setEmail(e.target.value)}} 
                    className="input-style input-2"

               />

                <input
                    type="password"
                    placeholder='Palavra-passe'
                    value={pass1}
                    onChange= {(e) => {setPass1(e.target.value)}}
                    className="input-style input-3"
                    
                />

                <input
                    type="password"
                    placeholder='Confirmar a palavra-passe'
                    value={pass2}
                    onChange={(e) => {setPass2(e.target.value)}}
                    className="input-style input-4"

               />
                
                <button className='btn-submit'>Criar minha conta</button>
                <p className='p-ainda'>Já tem uma conta? <Link to="/login" >Faça Login </Link> </p>

            </form>
        </section>


    );
}

export default RightAsideCadastro;