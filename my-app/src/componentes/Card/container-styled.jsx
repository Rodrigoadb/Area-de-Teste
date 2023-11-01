import styled from 'styled-components'

export const StyledContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 40px 10px 10px;
    border: 1px solid red;
    flex-wrap: wrap;
    flex-direction: row;
    background-color: #ccc;
`

export const Card = styled.div`
    display: flex;
    position: relative;
    padding: 15px;
    width: 500px;
    height: 145px;
    background-color: #FFF;
    margin: 10px;
    border-radius: 20px;
    box-shadow: 4px 4px 12px #aaa;

    h1{
        position: absolute;
        top: 25px;
        left: 60px;
        color: #000;
    }

    p {
        position: absolute;
        top: 80px;
        left: 60px;
        color: #000;
    }
    .icon {
        position: absolute;
        top: 45px;
        left: 350px;
    }
`