import  * as express from 'express'
import ChirpsRouter from './routes'

const router = express.Router()
router.use('/chirps', ChirpsRouter)


export default router