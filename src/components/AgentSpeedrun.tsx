import React from 'react'
import styled from 'styled-components'

interface Props {
  ButtonColor: string,
  PlaylistLink: string,
  AgentName: string,
  ImageName: string
}

const AgentSpeedrun = (props: any) => {
  return (
    <HeaderStyle {...props}>
      <h1>Agent:</h1>
      <h2>{props.AgentName}</h2>
      <a href={props.PlaylistLink}>
        <button className='btn'>Playlist</button>
      </a>
      <img src={props.ImageName} alt="" />
    </HeaderStyle>
  )
}

interface HeaderProps {
  ButtonColor: string
}

const HeaderStyle = styled.header<HeaderProps>`
  color: ${props => props.ButtonColor};
  justify-content: space-between;
  display: flex;
  align-items: center;
  border: .1rem solid steelblue;
  width: 20vw;
  height: 10vh;
  margin: 0 3rem;
  > a > button{
    background-color: ${(props: any) => props.ButtonColor || 'red'};
  }

  > h1, > h2 {
    color: black;
    padding: .5%;
  }
  
  > img {
    height: 100%;
    width: 25%;
    object-fit: cover;
  }
  
`

const ButtonStyle = styled.button`
  color: ${(props: any) => props.ButtonColor}
`



export default AgentSpeedrun