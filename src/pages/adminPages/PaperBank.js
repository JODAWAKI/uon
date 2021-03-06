import React from 'react'
import styled from 'styled-components'
import Nav from '../../components/main/Nav'
import Sidebar from '../../components/sidebar/sidebar'
import NewProductForm from '../../components/Ecommerce/NewProductForm.js'

const PaperBank = () => {
    return (
        <Container>
            <Sidebar permission="admin"/>
            <Nav/>
            <NewProductForm />
        </Container>
    )
}

export default PaperBank

const Container = styled.div`
background-color: #f4eaff;
min-height: 100vh;
height: fit-content;
    width: auto;
    margin-left: 16rem;
    position: relative;
    padding: 0 4rem 4rem;
`