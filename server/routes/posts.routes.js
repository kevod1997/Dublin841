import {Router} from 'express'
import {createTurn, deleteTurn, getTurn, getTurns} from '../controllers/posts.controllers.js'

const router = Router()

router.get("/turnos", getTurns)

router.get("/turnos/:id", getTurn)

router.post("/turnos", createTurn)

router.delete("/turnos/:id", deleteTurn)

export default router