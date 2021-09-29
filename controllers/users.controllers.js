const users = require('../models/users.models');

const getUsers = async(req, res) =>{
    try{
        const allUsers = await users.find()
        res.json(allUsers)
    } catch (error) {
        console.log('error en getUsers',error)
    }
}

const postUsers = (req, res)=>{

}

module.exports={getUsers, postUsers}