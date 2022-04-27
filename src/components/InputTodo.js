import React, {Fragment, useState} from "react";

const InputTodo = () => {
    
    const [description, setDescription] = useState("");

    const onSubmitForm = async (event)=>{
        try{
            event.preventDefault();
            const body = {description};
            console.log("on submit");
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            window.location = "/"
        } catch(err){
            console.log(err)
        }
    }
    return (
        <Fragment>
            <h1 className="text-center mt-5">ToDo List</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input type="text" className="form-control" value={description}
                // onClick={e=>setDescription("")}
                onChange={e=>setDescription(e.target.value)}/>
                <button className="btn btn-success" >Add</button>
            </form>
        </Fragment>
       
    )
}

export default InputTodo;