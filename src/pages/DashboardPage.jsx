import React from 'react'

import Nav from './templates/Nav'
import Content from './templates/Content'
import Footer from './templates/Footer'
import Header from './templates/Header'


const DashboardPage = () => (
    <div className="App d-flex flex-column align-items-center justify-content-between">
        <Header />
        <Nav />
        <Content title="Dashboard">
            <div>
                Dashboard
            </div>
        </Content>
        <Footer />
    </div>
)

export default DashboardPage