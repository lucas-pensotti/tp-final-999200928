import { useState, useContext} from "react"
import { ChatContext } from "../context/ChatContext"
import { useNavigate } from "react-router-dom"

const Registro = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    const { users, setUsers, handleUser } =useContext(ChatContext)
    const redirigir = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        
        if (!name) { 
            alert("Campo obligatorio")
        } else if (name.length < 3) {
            alert("El nombre debe tener al menos 3 caracteres")
        } else if (!email) {
            alert("Campo obligatorio")
        } else if (!password) {
            alert("Campo obligatorio")
        } else if (password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres")    
        } else {
            const newUser = {
                id: users.length +1,
                name,
                email,
                password,
                messages: []
            }

        // agrega el usuario 
        setUsers(prev => [...prev, newUser])

        // logea 
        handleUser(newUser)

        // limpia el estado
        setName("")
        setEmail("")
        setPassword("")

        // vuelve al home
        redirigir("/")
        }
    }

    const handleChange = (event) => {
        console.log(event.target.value)

        if (event.target.name === "name") {
            setName(event.target.value) 
        } else if (event.target.name === "email") {
            setEmail(event.target.value)
        } else if (event.target.name === "password"){
            setPassword(event.target.value)
        }        
    }

    return (
        <>
        <form onSubmit={handleSubmit}> 
            <input type="text" placeholder="Ingrese su nombre" required name="name" onChange={handleChange} value={name} />
            <input type="email" placeholder="Ingrese su email" required name="email" onChange={handleChange} value={email} />
            <input type="password" placeholder="Ingrese su contraseña" required name="password" onChange={handleChange} value={password} />
            <button>Registrarse</button>
        </form>
        {!email && <p>No has ingresado ningún email</p>}
        {email && <p>Valor del mail actualizado: {email}</p>} 
        </>
    )
}

export { Registro }