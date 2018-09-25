import express from 'express'
import routes from './routes'
import errorHandler from './middleware/errorHandler'

const app = express()

app.use('/tree', routes.treesRoutes)
app.use(errorHandler)

export default app
