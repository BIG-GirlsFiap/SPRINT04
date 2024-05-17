import VideoExameDeSangue from '../videos/ExameDeSangue.mp4';
import VideoTomografia from '../videos/Tomografia.mp4';
import VideoUltrassom from '../videos/Ultrassom.mp4';
import data from '../../../noticias.json';


function HomeContent() {
  return (
    <main className="HomeInfo">
      <section className='content pt-5'>
        <section className='infos-main '>
          <div className="title">
            <h1 className="">Procedimentos</h1>
            <h3>Explicação lúdica-educativa</h3>
          </div>
          <div className="accordion fit-content small" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Exame de Sangue
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body embed-responsive embed-responsive-1by1">
                  <iframe controls src={VideoExameDeSangue} className='embed-responsive-item mx-auto my-2 w-200px align-content-center '></iframe>
                  <p className=''>Imagine que seu corpo é uma cidade e as células são os moradores. O exame de sangue é como
                    um
                    detetive que coleta informações da "rodovia" do sangue, onde as células viajam. Ele analisa
                    essas
                    pistas para garantir que todos os moradores estejam felizes e saudáveis. É como um check-up
                    divertido para a cidade do seu corpo! Os médicos usam esse check-up para garantir que você
                    esteja
                    saudável e, se houver algum problema, eles podem ajudar a resolver. É um jeito simples de
                    cuidar
                    da
                    sua saúde!</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Tomografia
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body accordion-body embed-responsive embed-responsive-1by1">
                  <iframe controls src={VideoTomografia} className='embed-responsive-item'></iframe>
                  <p className='text-justify'>
                    Vamos imaginar que seu corpo é uma cidade incrível e a tomografia é como um mapa detalhado
                    dessa
                    cidade. Os médicos querem saber exatamente como são os prédios e ruas por dentro, então usam
                    uma
                    máquina especial. Essa máquina é como um superpoder secreto que tira muitas fotos rápidas
                    enquanto você fica deitado. É como se fosse um super-herói espiando todos os cantinhos da
                    cidade
                    para garantir que tudo está em ordem. As fotos são como fatias de bolo que, quando colocadas
                    juntas, criam um mapa 3D completo da sua cidade interna. Assim, os médicos podem ver todos
                    os
                    detalhes, como se estivessem dando uma espiadinha por dentro da sua cidade, sem precisar
                    mexer
                    em nada. Então, a tomografia é como um super-herói com um mapa especial para garantir que
                    sua
                    cidade (seu corpo) esteja sempre segura e saudável!
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Ultrassom
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body embed-responsive embed-responsive-1by1">
                  <iframe controls src={VideoUltrassom} className='embed-responsive-item'></iframe>
                  <p className='text-justify'>
                    O ultrassom é como uma máquina de tirar fotos mágica que os médicos usam para ver o que está
                    acontecendo dentro do nosso corpo. Eles espalham um gelzinho na pele, que é um pouco frio, e
                    usam
                    uma varinha especial que emite sons que não conseguimos ouvir. Esses sons são como ecos que
                    voltam e
                    ajudam os médicos a criar imagens do que está escondido lá dentro, como os órgãos. É uma
                    forma
                    legal
                    de os médicos verem como tudo está funcionando sem precisar abrir nada, como um superpoder
                    mágico!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='apoio-psicologico row h-fit-content'>
          <div className="card   " >

            <div className="card-body">
              <h5 className="card-title">Apoio Psicológico</h5>
              <p className="card-text">
                O acompanhamento psicológico é muito importante no contexto de doenças, tanto para o paciente quanto para os acompanhantes.
                O diagnóstico e tratamento podem trazer muitos sentimentos, como o medo, a ansiedade, a tristeza e frustações.
                Muitas das vezes é preciso ter alterações na rotina, alguns pacientes e acompanhantes precisam passar muito tempo dentro de hospitais,
                que pode afetar no trabalho e nos estudos.
              </p>
              <div className='btns'>
                <a href="#" className="btn btn-primary m-0">Sessão para Pacientes</a>
                <a href="#"></a>
                <a href="#" className="btn btn-primary ">Sessão para Responsáveis</a>
              </div>
            </div>

          </div>
          <div className="card col" >

            <div className="card-body">
              <h5 className="card-title">Campanhas</h5>
              <p className="card-text">
                Campanhas são oportunidades de transformar empatia em ação tangível. Seja apoiando iniciativas locais, ajudando indivíduos em
                necessidade ou impulsionando projetos comunitários, cada contribuição é um passo em direção a um futuro mais solidário e compassivo.
                Não espere para ser parte da mudança que deseja ver no mundo.
              </p>
              <p>
                Explore nossas campanhas, contribua, compartilhe e inspire-se. Juntos,
                podemos transformar vidas e criar um impacto duradouro. Faça a diferença agora, junte-se à nossa comunidade de mudança positiva!
              </p>
              <div className='btns'>
                <a href="#" className="btn btn-primary ml-3"> Saiba Mais </a>
              </div>
            </div>

          </div>
        </section>
        <section className='noticias'>

          {/* <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              {data.noticias.map((noticia, index) => (
                <div class={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <img src={noticia.image} alt="" />
                  <div className='carousel-caption d-none d-md-block'>
                    <h1>{noticia.title}</h1>
                    <p className='descrition text-muted'>{noticia.descrition}</p>
                  </div>
                </div>

              ))}
            </div>
          </div> */}


          <div className='noticias-main'>
            {data.noticias.map((noticia, index) => (
              <div key={index} className='noticias-box'>
                <h1>{noticia.title}</h1>
                <p className='descrition text-muted'>{noticia.descrition}</p>
                <div className='noticia-image'>
                  <img src={noticia.image} alt="" />
                </div>
                <div>
                  <p className='texto-noticia'>{noticia.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main >
  )

}
export default HomeContent