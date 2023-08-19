import userModel from "../models/userModel.js"

export  const registerController = async(req, res, next) => {
   
       const {name,email,password, lastName} = req.body
       //validate
           if (!name){
            next("Name is require")
           }
           if (!email){
            next("Email is require")
           }
           if (!password){
            next("password is require greater than 6 character")
           }

    
       const user = await userModel.create({name,email,password, lastName})

       //token
       const token = user.createJWT()
       res.status(201).send({
        success: true,
        message: "User created successfully",
        user: {
            name: user.name,
            lastName: user.lastName,
            email: user.email,
            location: user.location,

        },
        token,
       })
}


export const loginController = async (req, res, next        ) => {
    const {email, password} = req.body
    //validation
    if(!email || !password) {
      next('please Provide All Fields')
  }
  //find user bt email
  const user = await userModel.findOne({email}).select("+password");
  if(!user){
    next('Invalid username or password');  
  }
  //compare password
   const isMatch = await user.comparePassword(password);
   if(!isMatch){
      next('Invalid username or password')
   }
       user.password = undefined;
       
     const token = user.createJWT()
     res.status(200).json({
        success: true,
        message: "Login successfully",
        user,
        token,
     })
}