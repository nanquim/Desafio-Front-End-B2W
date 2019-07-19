import React, { useState, useEffect } from 'react'
import GetPlanets from '../services'
import { Loader, Container, Name, Info, Button } from '../components'

export default function Planetas () {

  const [ counter, setCounter ] = useState(1)
  const [ planetas, setPlanetas ] = useState([])
  const [ toShow, setToShow ] = useState({})

  useEffect( () => {
    
    const fetchPlanetas = async () => {
      const planetas = await GetPlanets()
      
      setPlanetas(planetas)
      setToShow(planetas[0])
    };
    fetchPlanetas()
  }, [])
  
  const handleClick = () => {
    if(counter === (planetas.length - 1)){
      setCounter(0)
      setToShow(planetas[counter])
    } else {
      setCounter(counter + 1)
      setToShow(planetas[counter])
    }
  }

  if(typeof toShow.films !== 'undefined') {
    return (    
      <Container>
        <Name>{toShow.name}</Name>
        <Info>
        <p>Population: {toShow.population}</p>
        <p>Climate: {toShow.climate}</p>
        <p>Terrain: {toShow.terrain}</p>
        Featured in Films:
        <ul>
        {toShow.films.map((film, key) => (
            <li key={key}>{film.title}</li>
           ))}
        </ul>
        </Info>
        <Button onClick={handleClick}>Next</Button>
      </Container>
     )
  } else {
    return(
      <Loader>Loading...</Loader>
    )
  }
}

