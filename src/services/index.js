import axios from 'axios'

const PLANETS_URL = 'https://swapi.co/api/planets'
const FILMS_URL = 'https://swapi.co/api/films'

const GetPlanets = async () => {
    let planetas = {}
    
    await axios.get(`${PLANETS_URL}`)
        .then((p) => {
            
            planetas = p.data.results

            return axios.get(`${FILMS_URL}`)
        }).then((f) => {
            
        planetas.forEach((pv, i) => {
            pv.films.forEach((pf, j) => {
                f.data.results.forEach((el, k) => {
                    if(pf === el.url){
                        pv.films[j] = el 
                    }
                })
            })
        })
        })        
        .catch((e) => {
            console.error(e);
        })

    return planetas
}

export default GetPlanets
