const express = require("express");
const citaSchema = require("../models/cita");
const router = express.Router();

//crear cita
router.post('/citas', (req, res) => {
    const cita = citaSchema(req.body);
    cita
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))
});

//encontrar citas
router.get('/citas', (req, res) => {
    citaSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))
});

// encontrar cita por id
router.get('/citas/:id', (req, res) => {
    const {id} = req.params;
    citaSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))
});

//encontrar cita por un idcolaborador y fecha
router.get('/citas/:idcolaborador/:fecha', (req, res) => {
    const params = req.params;
    citaSchema
    .find(params)
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))
});

//cambiar cita
router.put('/citas/:id', (req, res) => {
    const {id} = req.params;
    const { estadoVehiculo, comentario} = req.body;
    citaSchema
    .updateOne({_id:id}, {$set: {estadoVehiculo, comentario}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))
});

//borrar cita
router.delete('/citas/:id', (req, res) => {
    const {id} = req.params;
    citaSchema
    .remove({_id:id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))
});

module.exports = router;