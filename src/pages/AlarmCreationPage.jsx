import React from 'react'

import Nav from './templates/Nav'
import Content from './templates/Content'
import Footer from './templates/Footer'
import Header from './templates/Header'

import FormButton from '../components/FormButton'
import './AlarmCreationPage.css'

const AlermCration = () => (
    <div className="App d-flex flex-column align-items-center justify-content-between">
        <Header />
        <Nav />
        <Content title="Criação de Alarmes">
            <div>
                <form>
                    <div className="d-flex flex-row justify-content-center">
                        <div>
                            <select name="limitType" id="">
                                <option>Selecione a variável</option>
                                <option value="tensao">Tensão</option>
                                <option value="corrente">Corrente</option>
                                <option value="potenciaAtiva">Potência Ativa</option>
                            </select>
                        </div>
                        <div className="ml-2">
                            <select name="limitType" id="">
                                <option>Selecione o tipo de limite...</option>
                                <option value="min">Min.</option>
                                <option value="max">Max.</option>
                            </select>
                        </div>
                        <div className="ml-2">
                            <input type="text" placeholder="Digite o valor" />
                        </div>
                        <div className="ml-2">
                            <FormButton text="Cadastrar" />
                        </div>
                    </div>
                </form>
                <hr/>
            </div>

        </Content>
        <Footer />
    </div>
)

export default AlermCration