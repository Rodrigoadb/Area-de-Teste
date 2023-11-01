import React from 'react'
import {StyledContainer} from './container-styled'
import {Card} from './container-styled'
import {FiHome} from 'react-icons/fi'

function Container() {
    return (<StyledContainer>
                <Card>
                <h1>Titulo</h1>
                <p>Descrição</p>
                <FiHome className='icon' size={42} />
                </Card>
                <Card>
                <h1>Titulo</h1>
                <p>Descrição</p>
                </Card>
                <Card>
                <h1>Titulo</h1>
                <p>Descrição</p>
                </Card>
            </StyledContainer>)   
}

export default Container