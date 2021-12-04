import express from 'express'
import dotenv from 'dotenv'

import loginRouter from './userRoutes/authRouter.js'
import userDataRouter from './userRoutes/userDataRouter.js'
import { jwtParser } from '../utils/jwt.utils.js'

const router = express.Router()


router.use(express.json());
router.use(express.urlencoded({extended: true}))



router.use("/auth", loginRouter);
router.use('/users', userDataRouter)

router.get('/', (req, res) => {

    res.send('root path0')
})






export default router