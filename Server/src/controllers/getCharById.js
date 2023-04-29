const URL = `https://rickandmortyapi.com/api/character`
const axios = require("axios")



const getCharById = async (req, res) =>{
    //arriba lo parsie pero no era necesario
    try {
        const {id}= req.params; // Dentro de la función haz una petición a la API a partir del id que recibes por Params.
        const {data} = await axios(`${URL}/${id}`)

        if(!data.name) throw Error (`Faltan datos del personaje con ID: ${id}`)

        // const {status, name, species, origin, image, gender} = data
        const charInfo = {
            id: data.id,
            name: data.name,
            species: data.species,
            origin: data.origin,
            image: data.image,
            gender: data.gender,
            status: data.status
        }
        return res.status(200).json(charInfo)
            
        
    } catch (error) {
        return error.message.includes('ID')
        ? res.status(404).send(error.message)
        : res.status(500).send(error.response.data.error)
    }
}

module.exports= {
    getCharById
};
















// const axios = require("axios")

// const getCharById = (response,id) =>{

//     axios
//     .get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then( response => response.data) // el value
//     .then(({ name, gender, species, origin, image, status }) =>{
//         const character ={
//             id,
//             name,
//             gender,
//             species,
//             origin: origin.name,
//             image,
//             status
//         }
//         return response
//             .writeHead(200, {"Content-type":"application/json"})
//             .end(JSON.stringify(character))
//     })
//     .catch((error)=> {
//         return response
//         .writeHead(500,{"Content-Type":"text-plain"})
//         .end(error.message)
//     })
// }

// module.exports={getCharById}