import userModel from "../models/userModel.js"

export const updateUserController = async (req, res, next) => {
     const {name,email,lastName,location} = req.body
     if(!name || !email ||  !lastName || !location){
     next('please provide all fields')
}

const user = await userModel.findOne({_id: req.user.userId})
user.name = name
user.email = email
user.lastName = lastName

user.location = location

await user.save()
const token  = user.createJWT()
res.status(200).json({
    user,
    token,
})
}

//get user data

export const getUserController  = async(req, res, next) =>{
    try {
        const user = await userModel.findById({_id:req.body.user.userId})
        user.password = undefined
        if (!user){
            return res.status(200).send({
                message:'user not found',
                success:false,
            })
  }else {
    res.status(200).send({
        success:true,
        data:user,
        
    })
  }
    } catch (error){
        console.log(error)
        res.status(500).send({
            message:'auth error',
            success: false,
            error: error.message
        })
    }
   

}