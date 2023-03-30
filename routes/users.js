const express = require('express');
const router = express.Router();
const userController = require("./controllers/userController")


// /* GET users listing. */
router.get('/all', userController.all)

router.post('/register', userController.register); 

router.post('/login', userController.login)

module.exports = router;




