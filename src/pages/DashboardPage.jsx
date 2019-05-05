import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import axios from 'axios'
import moment from 'moment'

import Nav from './templates/Nav'
import Content from './templates/Content'
import Footer from './templates/Footer'
import Header from './templates/Header'

import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

import FormButton from '../components/FormButton'
import { backendUrl } from '../backend'
import './DashboardPage.css'



import "react-datepicker/dist/react-datepicker.css";
class DashboardPage extends Component {

    state = {
        initialDate: new Date(),
        finalDate: new Date(),
        correntes: [],
        tensoes: [],
        potenciasAtivas: [],
        potenciasReativas: [],
        potenciasAparentes: [],
        fatoresPotencias: [],
        energiasAcumuladas: []
    }

    fetchEletricalQuantities = event => {
        event.preventDefault()

        try {
            this.validadeEletricalQuantitiesForm()

            const initialDate = this.formatDate(this.state.initialDate)
            const finalDate = this.formatDate(this.state.finalDate)

            const filter =
                `filtros?initDate=${initialDate}&finalDate=${finalDate}`

            const some = `${backendUrl}/grandezas-eletricas/pesquisa/${filter}`

            axios.get(some)
                .then(response => {
                    const data = response.data

                    data.map(record => console.log(record))
                    this.setState({
                        ...this.state,
                        correntes: data.map(record => {
                            return {
                                corrente: record.corrente,
                                dataCriacao: record.data_criacao
                            }
                        }),
                        tensoes: data.map(record => {
                            return {
                                tensao: record.tensao,
                                dataCriacao: record.data_criacao
                            }
                        }),
                        potenciasAtivas: data.map(record => {
                            return {
                                potenciaAtiva: record.potencia_ativa,
                                dataCriacao: record.data_criacao
                            }
                        }),
                        potenciasReativas: data.map(record => {
                            return {
                                potenciaReativa: record.potencia_reativa,
                                dataCriacao: record.data_criacao
                            }
                        }),
                        potenciasAparentes: data.map(record => {
                            return {
                                potenciaAparente: record.potencia_aparente,
                                dataCriacao: record.data_criacao
                            }
                        }),
                        fatoresPotencias: data.map(record => {
                            return {
                                fatorPotencial: record.fator_potencia,
                                dataCriacao: record.data_criacao
                            }
                        }),
                        energiasAcumuladas: data.map(record => {
                            return {
                                energiaAcumulada: record.energia_acumulada,
                                dataCriacao: record.data_criacao
                            }
                        })
                    })
                })
                .catch(error => error)

        } catch (error) {

        }
    }

    formatDate = date => {
        return moment(date).format('YYYY-MM-DD')
    }

    updateInitialDate = date => {
        this.setState({
            initialDate: date
        })
    }

    updateFinalDate = date => {
        this.setState({
            finalDate: date
        })
    }

    validadeEletricalQuantitiesForm = () => {
        if (this.state.initialDate.lenth <= 0) {
            throw Error('Data inicial não preenchida')
        }

        if (this.state.finalDate.lenth <= 0) {
            throw Error('Data final não preenchida')
        }
    }

    render() {
        console.log(this.state)

        const dadosCorrentes = this.state.correntes.map(record => {
            return {
                name: record.dataCriacao,
                uv: record.corrente,
                pv: 2400,
                amt: 2400
            }
        })

        const dadosPotenciasAtivas = this.state.potenciasAtivas.map(potencia => {
            return {
                name: potencia.dataCriacao,
                uv: potencia.potenciaAtiva,
                pv: 2400,
                amt: 2400
            }
        })

        const dadosPotenciasAparentes = this.state.potenciasAparentes.map(record => {
            return {
                name: record.dataCriacao,
                uv: record.potenciaAparente,
                pv: 2400,
                amt: 2400
            }
        })

        const dadosPotenciaisReativas = this.state.potenciasReativas.map(record => {
            return {
                name: record.dataCriacao,
                uv: record.potenciaReativa,
                pv: 2400,
                amt: 2400
            }
        })

        const dadosTensoes = this.state.tensoes.map(tensao => {
            return {
                name: tensao.dataCriacao,
                uv: tensao.tensao,
                pv: 2400,
                amt: 2400
            }
        })

        const dadosFatorPotencial = this.state.fatoresPotencias.map(record => {
            return {
                name: record.dataCriacao,
                uv: record.fatorPotencial,
                pv: 2400,
                amt: 2400
            }
        })

        const dadosEnergiaAcumulada = this.state.energiasAcumuladas.map(record => {
            return {
                name: record.dataCriacao,
                uv: record.energiaAcumulada,
                pv: 2400,
                amt: 2400
            }
        })

        const MyChart = ({ data }) => (
            <LineChart width={300} height={250} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        )

        return (
            <div className="App d-flex flex-column align-items-center justify-content-between">
                <Header />
                <Nav />
                <Content title="Dashboard">
                    <form onSubmit={this.fetchEletricalQuantities}>

                        <div className="d-flex flex-row">

                            <div className="d-flex flex-column" >
                                <span className="date-span">
                                    Data inicial:
                                </span>
                                <DatePicker selected={this.state.initialDate}
                                    onChange={this.updateInitialDate} />
                            </div>
                            <div className="d-flex flex-column ml-2" >

                                <span className="date-span">

                                    Data final:
                                </span>
                                <DatePicker selected={this.state.finalDate}
                                    onChange={this.updateFinalDate} />
                            </div>
                            <div className="d-flex align-items-end ml-2">

                                <FormButton text="Pesquisar" type="submit" />
                            </div>
                        </div>
                    </form>
                    <hr />
                    <div className="chart-area">

                        {dadosCorrentes.length
                            ? (<div> Correntes:
                                <MyChart data={dadosCorrentes} />
                            </div>
                            )
                            : ''
                        }

                        {dadosTensoes.length
                            ? (<div> Tensões:
                                <MyChart data={dadosTensoes} />
                            </div>
                            )
                            : ''
                        }

                        {dadosPotenciasAtivas.length
                            ? (<div> Potências ativas:
                                <MyChart data={dadosPotenciasAtivas} />
                            </div>
                            )
                            : ''
                        }

                        {dadosPotenciasAparentes.length
                            ? (<div> Potências ativas:
                                <MyChart data={dadosPotenciasAparentes} />
                            </div>
                            )
                            : ''
                        }

                        {dadosPotenciaisReativas.length
                            ? (<div> Potências reativas:
                                <MyChart data={dadosPotenciaisReativas} />
                            </div>
                            )
                            : ''
                        }

                        {dadosFatorPotencial.length
                            ? (<div> Fator potencial:
                                <MyChart data={dadosFatorPotencial} />
                            </div>
                            )
                            : ''
                        }

                        {dadosEnergiaAcumulada.length
                            ? (<div> Fator potencial:
                                <MyChart data={dadosEnergiaAcumulada} />
                            </div>
                            )
                            : ''
                        }

                    </div>
                </Content>
                <Footer />
            </div>
        )
    }
}

export default DashboardPage