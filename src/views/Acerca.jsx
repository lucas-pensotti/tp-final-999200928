const Acerca = () => {
    return (
    <section className= "acerca">
        <h1>Acerca del proyecto</h1>

        <h2 className="sub-acerca">Explicación</h2>
        <p>
            El proyecto consiste en que el usuario pueda registrarse mediante un formulario en el cual debe ingresar su nombre, su email y una contraseña para crear una cuenta dentro de la aplicación, lo cual incluye validaciones para verificar que los datos sean correctos antes de registrarse, accediendo así a una interfaz de chat entre varios usuarios desplegando una lista de contactos y sus conversaciones correspondientes.  
        </p>
        
        <h2 className="sub-acerca">Partes principales de la aplicación</h2>
        <ul>
            <li>Registro</li>
            <li>Login</li>
            <li>Lista de contactos</li>
            <li>Mensajes</li>
        </ul>

        <h2 className="sub-acerca">Tecnologías utilizadas</h2>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>REACT</li>
        </ul>

        <h2 className="sub-acerca">Decisiones de desarrollo</h2>
        <p>
            Se utilizó React Context para manejar el estado global del usuario, de manera que la información pueda ser usada por la aplicación guardándola en localStorage. Cuando el usuario recarga la página, la sesión sigue activa sin necesidad de volver a loguearse.
            Para trabajar con diferentes rutas dentro de la aplicación se usó React Router, y las validaciones en el formulario se realizaron con condicionales en JavaScript, alertando que los campos estén completos además de cumplir con los requisitos mínimos antes de registrarse.
        </p>

        <h2 className="sub-acerca">Observaciones personales</h2>
        <p>
            Fue un viaje y un desafío a la vez, el hecho de aprender las herramientas y tratar de entender cuándo y cómo usarlas. Es un proyecto que ayuda mucho a entender la interacción de los diferentes componentes, obligando a usar el localStorage correctamente desde el Registro en el formulario hasta la lista de chats y por sobre todo trabajar con JSX. Es un proyecto que permite aprender mucho más acerca de React sin duda.   
        </p>

        <h2 className="sub-acerca">Dificultades encontradas</h2>
        <p>
            Aparecieron algunos errores cuando se registraba un nuevo usuario, porque los datos que se guardaban no tenían la misma estructura que los usuarios del mock.
            También me fue difícil el tema de guardar el usuario usando Context y localStorage para que la sesión se mantenga activa incluso al recargar la página, y se me complicó implementar las rutas protegidas, ya que la aplicación debía verificar si el usuario estaba logueado antes de permitir el acceso a ciertas secciones. 
        </p>
    </section>
    )
}

export { Acerca }