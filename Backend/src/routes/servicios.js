const express = require("express");
const servicioSchema = require("../models/servicio");
const router = express.Router();

//crear servicio
router.post('/servicios', (req, res) => {
    const servicio = servicioSchema(req.body);
    servicio
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))
});

//encontrar servicios
router.get('/servicios', (req, res) => {
    servicioSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))
});

//encontrar servicio
router.get('/servicios/:id', (req, res) => {
    const {id} = req.params;
    servicioSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))
});

//cambiar servicio
router.put('/servicios/:id', (req, res) => {
    const {id} = req.params;
    const {nombre, costo, duración, descripción, estado} = req.body;
    servicioSchema
    .updateOne({_id:id}, {$set: {nombre, costo, duración, descripción, estado}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))
});

//borrar servicio
router.delete('/servicios/:id', (req, res) => {
    const {id} = req.params;
    const {nombre, costo, duración, descripción, estado} = req.body;
    servicioSchema
    .remove({_id:id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))
});

module.exports = router;