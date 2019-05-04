import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import axios from 'axios'
import  moment from 'moment'

import Nav from './templates/Nav'
import Content from './templates/Content'
import Footer from './templates/Footer'
import Header from './templates/Header'

import FormButton from '../components/FormButton'
import { backendUrl } from '../backend'
import './DashboardPage.css'

import "react-datepicker/dist/react-datepicker.css";
class DashboardPage extends Component {

    state = {
        initialDate: new Date(),
        finalDate: new Date()
    }

    fetchEletricalQuantities = event => {
        event.preventDefault()
        
        try {
            this.validadeEletricalQuantitiesForm()

            const initialDate = this.formatDate(this.state.initialDate)
            const finalDate = this.formatDate(this.state.finalDate)

            const filter = 
                `filtro?initDate=${initialDate}&finalDate=${finalDate}`

            axios.get(
                `${backendUrl}/grandezas-eletricas/pesquisa/${filter}`)
                .then(response => console.log(response.data))
                .catch(error => error)

        } catch(error) {

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
        if (this.state.initialDate.lenth  <= 0) {
            throw Error('Data inicial não preenchida')
        }

        if (this.state.finalDate.lenth  <= 0) {
            throw Error('Data final não preenchida')
        }
    }

    render() {

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
                </Content>
                <Footer />
            </div>
        )
    }
}

export default DashboardPage