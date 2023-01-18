import Turno from '../models/Turno.js'

export const getTurns = async (req,res) => {
    try {
        const turns = await Turno.find()
        return res.json(turns)
    } catch (error) {
        return res.status(500).json({message: error.message})
        
    }
}

export const getTurn = async (req,res) =>{
    try {
        const turnFind = await Turno.findById(req.params.id)
        if (!turnFind) return res.sendStatus(404)
        return res.json(turnFind)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const createTurn = async (req,res)=>{
    try {
        const {fecha, nombre, telefono} = req.body
        const newTurn = new Turno({fecha,nombre,telefono})
        await newTurn.save()
        return res.json(newTurn)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const deleteTurn = async (req,res)=>{
    try {
        const turnRemoved = await Turno.findByIdAndDelete(req.params.id)
        if(!turnRemoved) return res.sendStatus(404)
        return res.sendStatus(504)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}