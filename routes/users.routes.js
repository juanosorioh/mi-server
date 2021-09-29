const router = require('express').Router();
const{getUsers, postUsers}=require('../controllers/users.controllers');

router.get('/users', getUsers);
router.post('/users', postUsers);
module.exports=router