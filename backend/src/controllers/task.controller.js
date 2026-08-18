import Task from "../models/task.model.js";

//Create a new task
export const createTask = async (req,res)=>{
    try{
        const {title,description,priority} = req.body;
        if(!title || !description){
            return res.status(400).json({error:"Title and description are required"});
        }
        const task = await Task.create({
            title,
            description,
            priority
        });
        res.status(201).json({
            message : "Task created Successfully",
            task,
        });

    }catch(error){
        return res.status(500).json({error:error.message});

    }
}

//Get all the tasks;
export const getAllTasks = async (req,res)=>{
    try{
        const tasks = await Task.find();
        return res.status(200).json(tasks);

    }catch(error){
        return res.status(500).json({error: error.message});
    }
}

//Get one task by ID:
export const getTaskById = async(req,res)=>{
    const {id} = req.params;
    try{
        const task = await Task.findById(id);
        if(!task){
            return res.status(404).json({error:"Task not found"});
        }
        return res.status(200).json(task);
    }catch(error){
        return res.status(500).json({error: error.message});
    }
}

//Update a task by ID
export const updateTaskById = async(req,res)=>{
    const {id} = req.params;
    const {title,description,priority,completed} = req.body;
    try{
        const task = await Task.findByIdAndUpdate(
            id,
            {
            title,
            description,
            priority,
            completed,
        },
        {
            new:true,
           runValidators:true
        }
    );
    if(!task){
        return res.status(404).json({error:"Task not found"});
    }
    return res.status(200).json({
        message: "Task updated successfully",
        task,
    })
    }catch(error){
        return res.status(500).json({error: error.message});
    }
}
//Delete task by id
export const deleteTaskById = async (req,res)=>{
    const {id} = req.params;
    try{
        const task = await Task.findByIdAndDelete(id);
        if(!task){
            return res.status(404).json({error:"Task not found"});
        }
        return res.status(200).json({message:"Task deleted successfully"});
    }catch(error){
        return res.status(500).json({error: error.message})
    }
}





