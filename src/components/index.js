import styled from 'styled-components'


export const Loader = styled.div`
margin-top: 50vh;
font-family: 'Press Start 2P', cursive;
color: yellow;
font-size: 5vh;
transform: perspective(200px) rotateX(30deg) scaleY(1.65);
`

export const Container = styled.div`
  margin-top: 8vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `
export const Name = styled.div`
  width: 100%;
  margin-bottom: 5vh;
  padding: 3px;
  text-align: center;
  transform: perspective(500px) rotateX(30deg) scaleY(1.20);
`
export const Info = styled.div`
  padding: 3px;
  transform: perspective(500px) rotateX(30deg) scaleY(1.20);
`

export const Button = styled.button`
  position: fixed;
  bottom: 10vh;
  background: yellow;
  color: black;
  font-size: 1em;
  width: 15vh;
  height: 6vh;
  padding: 0.25em 1em;
  border: 2px solid;
  border-radius: 3px;
  &:hover {
    width: 18vh;
    height: 9vh;  
  }
`
