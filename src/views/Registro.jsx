import { useState} from "react"

const Registro = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

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
            console.log({
                name: name,
                email: email,
                password: password,
            })

        // limpia el estado
        setName("")
        setEmail("")
        setPassword("")
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
            <button>Iniciar Sesión</button>
        </form>
        {!email && <p>No has ingresado ningún email</p>}
        {email && <p>Valor del mail actualizado: {email}</p>} 
        </>
    )
}

export { Registro }