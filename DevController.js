const axios = ('axios') 
const Dev = require("../models/Dev")
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {

    async index(request, response){
        const devs = await Dev.find()
        return response.json(devs)
    },

    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body
        
        let dev = await Dev.findOne({ github_username })

        if (!dev){
            const locations = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
    
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)
    
            const { login, name = login, avatar_url, bio } = apiResponse.data
    
            const techsArrey = parseStringAsArray(techs)
    
            dev = await Dev.create({
                name,
                github_username,
                bio,
                avatar_url,
                techs : techsArrey,
                locations
            })

        }
    
        return response.json({dev})
    }
}