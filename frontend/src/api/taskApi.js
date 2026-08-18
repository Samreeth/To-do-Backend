const API_URL = "http://localhost:5000/api";

export const fetchTasks = async() =>{
    try{
        const response = await fetch(`${API_URL}/tasks`);
        if(!response.ok){
            throw new Error("Failed to fetch tasks ra babu");
        }
        return await response.json();

    }catch(error){
            console.error("Error fetching tasks:", error);
    }
};

export const createTask = async (taskData)=>{
    try{
        const response = await fetch(`${API_URL}/tasks`,{
            method : "POST",
            headers :{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(taskData)
        });
        if(!response.ok){
            throw new Error("Failed to create task");
        }
        return await response.json();
    }catch(error){
        console.log("Error creating task:", error);
        throw error;

    }

}

export const deleteTask = async (taskId)=>{
    try{
        const response = await fetch(`${API_URL}/tasks/${taskId}`,{
            method : "DELETE"
        });
        if(!response.ok){
            throw new Error("Failed to delete task");
        }
        return await response.json();


    }catch(error){
        console.log("Error deleting task:", error);
        throw error;

    }

}

export const updateTask = async (taskId, updatedData) => {
  try {
    const response = await fetch(`${API_URL}/tasks/${taskId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to update task");
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};

