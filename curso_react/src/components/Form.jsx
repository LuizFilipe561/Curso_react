import { useState } from "react"

function Form () {
    function cadastrarUsuario(){
        alert("User " + name + " registered with the password: " + password)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
    <h1>My registration</h1>
        <form onSubmit={cadastrarUsuario}>
            <div>
                <label htmlFor="name">Nome:</label>
                    <input type="text" 
                        id="name" 
                        name="name" 
                        placeholder="enter your name"
                        onChange={(e) => setName(e.target.value)}
                    />
            </div>
                <div>
                <label htmlFor="password">Senha:</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="enter your password"
                        onChange ={(e) => setPassword(e.target.value)}  
                    />
            </div>
                <div>
                    <input type="submit" value="register"/>
                </div>
            </form>
        </div>
    )
}
export default Form