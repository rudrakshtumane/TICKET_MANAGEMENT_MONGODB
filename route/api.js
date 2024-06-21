const  express = require('express');
const router = express.Router();
const userController = require('../controller/userController');



router.get('/getAllUser', userController.getAllUser);
router.post('/addUser', userController.addUser);
router.delete('/deleteUser/:id', userController.deleteUser);





module.exports = router;    