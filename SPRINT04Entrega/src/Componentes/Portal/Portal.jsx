import Alegria from '../images/alegria.jpg'
import Raiva from '../images/raivoso.jpg'
import Medo from '../images/medo.jpg'
import Tristeza from '../images/tristeza.jpg'

function Portal() {
    return (
        <>
            <main className='PortalContent'>
                <section className="mainInfo ">
                    <section className='content'>
                        <div id="portal-paciente" class="">
                            <div id="portal">
                                <h1>Acesse o Portal do Paciente para ter acesso a: </h1>
                                <ul>
                                    <li>Agendar exames e consultas</li>
                                    <li>Encontrar um médico perto de você</li>
                                    <li>Acessar o seu prontuário</li>
                                    <li>Consultar seu histórico médico</li>
                                </ul>
                                <form>
                                    <div class="form-box">
                                        <input type="text" id="CPF" placeholder="Digite o seu CPF" />
                                    
                                        <input type="text" id="CPF" placeholder="Digite o número da carteirinha" />
                                        <button>ACESSAR</button>
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div id="avaliation" className=''>
                            <div>
                                <h1>
                                    Como foi a sua passagem no Hospital das Clínicas?
                                </h1>
                                <p>Avalie neste campo como foi a sua experiência no nosso hospital</p>
                                <h4>Motivo da visita?</h4>
                                <div id="checkbox-box">
                                    <input type="checkbox" id="checkbox-box-exame" />
                                    <span class="checkmark"> Exame </span>
                                </div>

                                <div id="exame-container" class="exame-container d-none">
                                    <h4>Qual exame realizou?</h4>
                                    <div id="checkbox-exames">
                                        <input type="checkbox" />
                                        <span class="checkmark"> Exame de Sangue </span>
                                    </div>
                                    <div id="checkbox-exames">
                                        <input type="checkbox" />
                                        <span class="checkmark"> Ultrassografia </span>
                                    </div>
                                    <div id="checkbox-exames">
                                        <input type="checkbox" />
                                        <span class="checkmark"> Tomografia </span>
                                    </div>
                                    <div id="checkbox-exames">
                                        <input type="checkbox" />
                                        <span class="checkmark"> Raio X </span>
                                    </div>
                                    <div id="checkbox-exames">
                                        <input type="checkbox" />
                                        <span class="checkmark"> Ressonância Magnética (RM) </span>
                                    </div>
                                </div>
                                <div id="checkbox-box">
                                    <input type="checkbox" id="check-box-consulta" />
                                    <span class="checkmark"> Consultas </span>
                                </div>
                                <div id="checkbox-consultas" class="checkbox-consultas d-none">
                                    <input type="text" id='box-consulta' placeholder="Digite a especiliadade médica" />
                                    <input type="date" name="Date" id="box-consulta" />
                                </div>
                                <div id="avaliation-box">
                                    <p>Como o paciente se sentiu durante na situação?</p>
                                    <div id="btn-avaliation">
                                        <button id="btn-avaliation">
                                            <img src={Alegria} alt="Botão Alegria" />
                                        </button>
                                        <button id="btn-avaliation">
                                            <img src={Medo} alt="Botão Medo" />
                                            </button>
                                        <button id="btn-avaliation">
                                            <img src={Raiva} alt="Botão Raiva" />
                                            </button>
                                        <button id="btn-avaliation">
                                            <img src={Tristeza}
                                            alt="Botão Tristeza" />
                                            </button>
                                    </div>
                                </div>
                                <div id="agradecimento" class="agradecimento d-none">
                                    <h1>Obrigado pela sua avaliação!</h1>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </main>
        </>
    )
}
export default Portal