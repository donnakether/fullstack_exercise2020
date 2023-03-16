const generateUniqueId = require('../utils/generateUniqueid');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const ongs = await connection('ngo').select('*');
    
        return response.json(ongs);
    },
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = generateUniqueId();

        await connection('ngo').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })

        return response.json({ id });
    }
};