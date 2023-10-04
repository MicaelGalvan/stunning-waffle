const express = require('express');
const router = express.Router();
const { list, get, remove, create, update } = require('../controllers/medicalHistory');
// const { validateCreate } = require('../validators/medicalHistory');

router.get('/all', list);
router.get('/:id', get);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;