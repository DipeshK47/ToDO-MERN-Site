import React, { useState } from 'react';
import './Todo.css';
import TodoCards from './TodoCards';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from './Update';
import axios from "axios"
import { useEffect } from 'react';
function Todo() {
  let id = (sessionStorage.getItem("id"))
  const [Inputs, setInputs] = useState({ title: "", body: "" });
  const [Array, setArray] = useState([]);
  const [isUpdateVisible, setIsUpdateVisible] = useState(false); // State to show/hide the Update component
  const [selectedTodo, setSelectedTodo] = useState(null); // State to store selected todo for updating
  

  const show = () => {
    document.getElementById("textarea").style.display = 'block';
  };

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  const submit = async () => {
    if (Inputs.title === "" || Inputs.body === "") {
      toast.error('Title or Body is missing');
    } else {
        if(id){
          await axios.post("http://localhost:1000/api/v2/addtask", {
            title: Inputs.title,
            body: Inputs.body,
            id: id
        })
            .then((response) => console.log(response))
            
            setInputs({ title: "", body: "" });
            toast.success('Your task is added!!');
        }
        else{
          setArray([...Array, Inputs]);
          setInputs({ title: "", body: "" });
          toast.success('Your task is added!!');
          toast.error('Your task is added but not saved. Please Sign Up');
        }
    }
  };

  const del = async (id) => {
    try {
      const userId = sessionStorage.getItem("id"); // Assuming sessionStorage holds the user ID
      if (!userId) {
        toast.error("User ID is missing");
        return;
      }
  
      await axios.delete(`http://localhost:1000/api/v2/deletetask/${id}`, {
        data: { id: userId }
      });
      toast.success("Your task is deleted");
    } catch (error) {
      toast.error("Failed to delete task");
      console.error(error);
    }
  };

  const showUpdatePopup = (id) => {
    const todoToUpdate = Array[id]; // Find the todo item to update
    setSelectedTodo({ ...todoToUpdate, id }); // Set the selected todo and id
    setIsUpdateVisible(true); // Show the update popup
  };

  const hideUpdatePopup = () => {
    setIsUpdateVisible(false); // Hide the update popup
    setSelectedTodo(null); // Clear the selected todo
  };

  const updateTodo = (updatedTodo) => {
    const updatedArray = Array.map((item, index) =>
      index === updatedTodo.id ? updatedTodo : item
    );
    setArray(updatedArray);
    hideUpdatePopup(); // Hide the update popup after updating
  };
  useEffect(() => {
    const fetch = async () => {
      await axios.get (`http://localhost:1000/api/v2/getTasks/${id}`).then((response) => (setArray(response.data.list)
    ))
    }
    fetch();
  }, [id, submit])

  return (
    <>
      <div className='todo'>
        <ToastContainer />
        <div className='todo-main container d-flex justify-content-center align-items-center my-4 flex-column'>
          <div className='d-flex flex-column todo-inputs-div w-50 p-1'>
            <input
              type="text"
              placeholder='Title'
              className='my-2 p-2 todo-inputs'
              onClick={show}
              name='title'
              value={Inputs.title}
              onChange={change}
            />
            <textarea
              id='textarea'
              type="text"
              placeholder='Body'
              className='p-2 todo-inputs'
              name='body'
              value={Inputs.body}
              onChange={change}
            />
          </div>
          <div className='w-50 d-flex justify-content-end my-3'>
            <button className='home-btn px-2 py-1' onClick={submit}>Add</button>
          </div>
          <div className="todo-body">
            <div className="container-fluid">
              <div className="row">
                {Array && Array.map((item, index) => (
                  <div className='col-lg-3 col-10 mx-5 my-2' key={index}>
                    <TodoCards
                      title={item.title}
                      body={item.body}
                      id={item.id }
                      delid={del}
                      display={showUpdatePopup} // Trigger the popup when Update is clicked
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {isUpdateVisible && (
        <div className="todo-update">
          <div className='container update'>
            <Update
              display={hideUpdatePopup} // Pass function to hide popup
              selectedTodo={selectedTodo} // Pass the selected todo to Update component
              onUpdate={updateTodo} // Handle the update logic here
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Todo;