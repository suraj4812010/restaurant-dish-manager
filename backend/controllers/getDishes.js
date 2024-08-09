const Dishes = require("../models/dishes.model")

exports.getDishes = async (req,res) => {
    try{
        const dishes = await Dishes.find({}).sort({dishId : 1});

        return res.status(200).json({
            success: true,
            message : "Data fetched successfully",
            dishes,
        })

    }catch(error){
        return res.status(500).json({
            success : false,
            message : "Data fetching failed",
        })
    }
}