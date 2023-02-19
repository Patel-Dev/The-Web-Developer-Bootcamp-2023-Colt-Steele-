/*
axios.get("https://swapi.dev/api/people/1/")
    .then((res) => {
        console.log(res)
        console.log(res.data)
    })
    .catch((err) => {
        console.log("ERROR ", e)
    })
*/

const getStarWarsCharacter = async function (id) {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`)
        console.log(res.data)
    } catch (e) {
        console.log("ERROR ", e)
    }
}

getStarWarsCharacter(5)
getStarWarsCharacter(10)