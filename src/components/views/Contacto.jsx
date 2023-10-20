const Contacto = () => {
    return(
        <div>
        <div className="container contacto">
        <h1>Contáctate con nosotros</h1>

        <div className="row">
          <div className="col-6 contac">
            {/* <img
              src="../src/ropa-deportiva-nike-2-zonal-strength-tights_2.jpeg"
              alt=""
            /> */}
          </div>
          <div className="col-6 contac">
            <h2>Consultas</h2>
            <h5>
              Utiliza este formulario si deseas realizar consultas y/o
              comentarios sobre nuestro servicio y te responderemos lo antes
              posible.
            </h5>
            <div className="mb-3">
              <label htmlFor = "exampleFormControlInput1" className="form-label"
                >Nombre </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Maria Juarez"/>
            </div>
            <div className="mb-3">
              <label htmlFor = "exampleFormControlInput1" className="form-label"
                >Email</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="nombre@gmail.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor = "exampleFormControlTextarea1" className="form-label"
                >Dejanos tu mensaje</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              <a href="./error404.html"></a>
              Enviar</button>
          </div>
        </div>
      </div>
      <div className="container contacto">
        <h2>Ubicación</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.2071161741874!2d-65.20469742517122!3d-26.8333639766945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d618480bf97%3A0x670b6033eb077bea!2sJuan%20Gregorio%20de%20las%20Heras%20128%2C%20T4000IDD%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1693885566632!5m2!1ses-419!2sar"
          width="100%"
          height="400px"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      </div>

    )
}
export default Contacto;