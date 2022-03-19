import React from "react"
import styled from "styled-components"

const Info = styled.div`
    width:45vw;
    height:10.5vw;
    border: 0.5vw ridge #925E78;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:space-evenly;
    font-size:1.5vw;
    background-color: #BD93BD;
    color: #F2EDEB;
`
const Span = styled.span`
    text-decoration: underline;
`

const About = ({nome, idade, estudo}) => {
    return(
        <Info>
            <p><Span>Nome:</Span> {nome}</p>
            <p><Span>Idade:</Span> {idade}</p>
            <p><Span>Tema de estudo ou interesse:</Span> {estudo}</p>
        </Info>
    )
}

export default About
