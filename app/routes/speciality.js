const express = require('express');
const router = express.Router();
const { list, get, remove, create, update } = require('../controllers/speciality');
// const { validateCreate } = require('../validators/speciality');

router.get('/all', list);
router.get('/:id', get);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;