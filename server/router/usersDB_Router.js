const express = require('express');
const router = express.Router();

const { registerUser, loginUser, getMe, getUsers, createUser, getUser, updateUser, deleteUser } = require('../controllers/userControllers');
const { protect } = require('../middleware/authMiddleware');

router.get('/', getUsers);
router.get('/:id', getUser);
router.get('/me', protect, getMe);
router.post('/create', createUser);
router.post('/', registerUser);
router.post('/login', loginUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
