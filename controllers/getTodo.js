const Todo=require('../models/Todo');

exports.getTodo=async(req,res)=>{
    try{
        const todos=await Todo.find({});
        res.status(200).json(
            {
                success:true,
                data:todos,
                messsge:'Entire Todo Data is fetched'
            }
        )
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                success:false,
                message:"Server error",
                error:err.message,
            }
        )
    }
}

exports.getTodoById=async(req,res)=>{
    try{
        const id=req.params.id;
        const todo=await Todo.findById({_id:id});
        if(!todo)
        {
            res.status(404).json(
                {
                    success:false,
                    messsge:'No data found with given id'
                }
            )
        }
        else
        {
            res.status(200).json(
                {
                    success:true,
                    data:todo,
                    messsge:`Todo ${id} successfully fetched`
                }
            )
        }
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                success:false,
                message:"Server error",
                error:err.message,
            }
        )
    }
}