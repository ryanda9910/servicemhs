const express = require('express')
const mahasiswaController = require('../Controllers/mahasiswa.controller');


const router= express.Router();

router.get('/',mahasiswaController.findAll)

router.post('/',mahasiswaController.create)

router.get('/:id',mahasiswaController.findById)

router.put('/:id',mahasiswaController.update)

router.delete('/:id',mahasiswaController.delete)

module.exports=router;