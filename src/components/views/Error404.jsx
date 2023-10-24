const Error404 = () => {
    return(

        <div>

        <div class="container error">
            {/* <img src="../imagenes/error404/error404.jpg" alt="" /> */}
            <h3>Lo sentimos, pagina que solicitaste no se encuentra disponible</h3>
            <div class="boton">
                <button type="button" class="btn btn-primary">
                    <a class="nav-link active" href="../index.html"
                    >Volver a la pagina de inicio</a
                    >
                </button>
            </div>
        </div>
        </div>
    )
}
export default Error404;