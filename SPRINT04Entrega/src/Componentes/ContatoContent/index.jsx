function ContactForm() {
  return (
    <div className="mainInfo">
      <div className="contactArea">
        <div>
          <img className='imgHC' src="https://media.licdn.com/dms/image/D4E16AQHaICs876czsw/profile-displaybackgroundimage-shrink_200_800/0/1697631780695?e=2147483647&v=beta&t=l4Ef_Nj0q7gySrIuoS2frdMYozAwbB2VkOIquznpxuY" alt="Imagem HC" />
        <h2>Entre em Contato</h2>
        </div>
        <div id="contact">
          <div className="form-contact">


            <form>
              <input type="text" placeholder="Nome" />
              <input type="email" placeholder="Email" />
              <input type="number" name="telefone" placeholder="Telefone" id="" />
              <textarea placeholder="Mensagem" />
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
        <div className="card">
          <div class="card-body">
            <h5 class="card-title">Localização</h5>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14629.431646292815!2d-46.672815!3d-23.5555857!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5787201231c3%3A0x3f33dfaadb4d9d13!2sInstituto%20da%20Crian%C3%A7a%20e%20do%20Adolescente%20-%20ICr%20HCFMUSP!5e0!3m2!1spt-PT!2sbr!4v1712361213929!5m2!1spt-PT!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            <p class="card-text">Av. Dr. Enéas Carvakho de Aguiar, 647 - Cerqueira César, Sâo Paulo</p>
            <a href="https://maps.app.goo.gl/K6RubGJ7UCqn9it48" class="card-link">Goggle Maps</a>
          </div>
        </div>
        <div className="card">
          <div class="card-body">
            <h5 class="card-title">Telefone</h5>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14629.431646292815!2d-46.672815!3d-23.5555857!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5787201231c3%3A0x3f33dfaadb4d9d13!2sInstituto%20da%20Crian%C3%A7a%20e%20do%20Adolescente%20-%20ICr%20HCFMUSP!5e0!3m2!1spt-PT!2sbr!4v1712361213929!5m2!1spt-PT!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            <p class="card-text">Av. Dr. Enéas Carvakho de Aguiar, 647 - Cerqueira César, Sâo Paulo</p>
            <a href="https://maps.app.goo.gl/K6RubGJ7UCqn9it48" class="card-link">Goggle Maps</a>
          </div>
        </div>
      </div>
    </div>

  );
}

export default ContactForm;