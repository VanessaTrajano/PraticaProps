import React, { Component } from "react"
import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
import About from "./components/About"


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100vh;
  background-color: #F05365;
`

const Box = styled.div`
  height: 75%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content:space-evenly;
`

const Tittle = styled.h1`
  color: #FABC2A;
  font-size:3vw;
  text-decoration:overline;
  padding-bottom:0.2vw;
  border-bottom: 0.3vw solid #FABC2A;
` 

export default class App extends Component {
  render() {
    return (
      <Container>
        <GlobalStyle />
        <Tittle>Informações:</Tittle>
        <Box>
          <About nome={"Vanessa"} idade={"17"} estudo={"Patinação"}/>
          <About nome={"Gabriel"} idade={"17"} estudo={"Desenho"}/>
          <About nome={"Nicolas"} idade={"18"} estudo={"Design"}/>
          <About nome={"João"} idade={"28"} estudo={"Pintura"}/>
          <About nome={"Maria"} idade={"37"} estudo={"Fotografia"}/>
          <About nome={"Alice"} idade={"11"} estudo={"Dança"}/>
        </Box>
      </Container>
    );
  }
}
