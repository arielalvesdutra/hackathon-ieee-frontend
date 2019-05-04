import React from 'react'

import Nav from './templates/Nav'
import Content from './templates/Content'
import Footer from './templates/Footer'
import Header from './templates/Header'


const NotFound
 = () => (
    <div className="App d-flex flex-column align-items-center justify-content-between">
        <Header />
        <Nav />
        <Content title="Dashboard">
          <h1>Erro 404 - Ops, página não encontrada.</h1>
        </Content>
        <Footer />
    </div>
)

export default NotFound
