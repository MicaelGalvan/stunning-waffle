const express = require('express');
const router = express.Router();
const { list, get, remove, create, update } = require('../controllers/medicalConsultation');
// const { validateCreate } = require('../validators/medicalConsultation');

router.get('/all', list);
router.get('/:id', get);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;