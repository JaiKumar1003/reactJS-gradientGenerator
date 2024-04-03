// Style your elements here

import styled from 'styled-components'

export const GradientGeneratorContainer = styled.div`
background-image: ${props => {
  const {bgColor1, bgColor2, currentDirection} = props

  return `linear-gradient(to ${currentDirection}, ${bgColor1}, ${bgColor2})`
}};
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
min-height: 100vh;
`

export const GradientGeneratorCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 90%;
margin-top: 60px;
margin-bottom: 60px;
`

export const MainHeading = styled.h1`
color: #ededed;
font-family: "Roboto";
font-size: 26px;
font-weight: bold;
text-align: center;
`

export const DirectionHeading = styled.p`
color: #ededed;
font-family: "Roboto";
font-size: 22px;
font-weight: 500;
`

export const UnorderList = styled.ul`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
width: 100%;
padding: 0px;
`

export const ColorPickerHeading = styled.p`
color: #ededed;
font-family: "Roboto";
font-size: 22px;
font-weight: 500;
margin-bottom: 44px;
`

export const ColorInputContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
width: 100%;
`

export const ColorInputCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
`

export const ColorInputLabel = styled.p`
color: #ededed;
font-family: "Roboto";
font-size: 18px;
font-weight: 500;
margin-bottom: 22px;
`

export const ColorInput = styled.input`
background-color: transparent;
border: none;
height: 50px;
width: 100px;
cursor: pointer;
outline: none;
`

export const GenerateButton = styled.button`
background-color: #00c9b7;
border: none;
border-radius: 10px;
height: 40px;
width: 110px;
color: #1e293b;
font-family: "Roboto";
font-size: 16px;
font-weight: 500;
margin-top: 26px;
cursor: pointer;
outline: none;
`
