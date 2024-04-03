// Style your elements here

import styled from 'styled-components'

export const List = styled.li`
list-style-type: none;
width: 49%;
margin-bottom: 12px;
`

export const DirectionButton = styled.button`
background-color: #ededed;
border: none;
border-radius: 8px;
color: #334155;
font-family: "Roboto";
font-size: 16px;
font-weight: 500;
height: 40px;
width: 100%;
opacity: ${props => (props.currentButton === true ? '1' : '0.5')};
cursor: pointer;
outline: none;
`
