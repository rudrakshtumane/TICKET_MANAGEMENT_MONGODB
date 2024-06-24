const  express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const ticketController = require('../controller/ticketController');



router.get('/getAllUser', userController.getAllUser);
router.post('/addUser', userController.addUser);
router.delete('/deleteUser/:id', userController.deleteUser);
router.patch('/updateUser/:id', userController.updateUser);


router.post('/addTicket', ticketController.addTicket);
router.get('/getAllTicket', ticketController.getAllTicket);
router.patch('/updateTicket/:id', ticketController.updateTicket);
router.delete('/deleteTicket/:id', ticketController.deleteTicket);




module.exports = router;     