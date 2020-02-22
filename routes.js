const { Router } = require('Express') // declara que esta trabalhando c express mas somente com o modulo das rotas "Router"
const routes = Router() //function

const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

routes.get('/Devs', DevController.index)
routes.post('/Devs', DevController.store)
routes.get('/Search', SearchController.index)

module.exports = routes // link de exportação
