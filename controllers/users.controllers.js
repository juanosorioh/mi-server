const crltHome = {}
const User = require('../models/users.models');

crltHome.getUsers = async(req, res) =>{
    try{
        const allUsers = await User.find()
        res.json(allUsers)
    } catch (error) {
        console.log('error en getUsers',error)
    }
}

/* crltHome.postUsers = async(req, res) =>{
    try{
        const allUsers = await User.()
        res.json(allUsers)
    } catch (error) {
        console.log('error en getUsers',error)
    }
} */

crltHome.postUsers = async (req, res) => {

    const { users, pass} = req.body;
    try {
      const user = new User({ users, pass});    
      await user.save();
      res.json({
        user
      });
    } catch (error) {
      console.log("Error al crear un nuevo usuario: ", error);
      res.status(500).json({ msg: "Error al crear nuevo usuario" });
    }
  };

module.exports=crltHome