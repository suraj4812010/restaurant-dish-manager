const Dishes = require("../models/dishes.model")

exports.deletedishes = async (req,res) => {
    try{
        const {dishId} = req.body;

        const dish = await Dishes.findOne({dishId:dishId});

        if(!dish || dish === undefined){
            return res.status(404).json({
                sucess:false,
                message:`Dish not found with this dishId ${dishId}`
            })
        }

        await Dishes.findOneAndDelete({dishId:dishId});

        return res.status(200).json({
            sucess :true,
            message : `Dish with dishId ${dishId} delete successfully`
        })
    }catch(error){
        return res.status(500).json({
            sucess:false,
            message:"Internal server Error"
        })
    }
}