const Todo=require("../models/Todo");

exports.deleteTodo=async(req,res)=>{
    try{
        const {id}=req.params;
        const todo=await Todo.findByIdAndDelete(id);
        res.status(200).json(
            {
                success:true,
                data:todo,
                message:"Todo Deleted Successfully"
            }
        )
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                success:false,
                data:"Internal server error",
                message:err.message
            }
        )
    }
}