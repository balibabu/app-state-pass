import React, { useContext, useState } from 'react'
import GlobalContext from '../GlobalContext';
import TaskItem from './TaskItem';


const dummyDetails = { title: "", description: "" };
export default function TaskLoggerApp() {
    const { app } = useContext(GlobalContext);
    const [formDetails, setFormDetails] = useState(dummyDetails);

    const onChangeFormDetail = (e) => {
        const { name, value } = e.target;
        setFormDetails((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const addTask = (e) => {
        e.preventDefault();
        app.controller.addTask(formDetails);
        setFormDetails(dummyDetails);
    }


    return (
        <div>
            <h1 style={app.views.taskLoggerStyle.heading}>Task Logger</h1>
            <form onSubmit={addTask} style={app.views.taskLoggerStyle.formContainer}>
                <label htmlFor="title">Title:</label>
                <input name="title" type="text" id='title' value={formDetails.title} onChange={onChangeFormDetail} style={app.views.taskLoggerStyle.title}/><br />
                <label htmlFor="description">description:</label>
                <textarea name="description" id="description" value={formDetails.description} onChange={onChangeFormDetail} style={app.views.taskLoggerStyle.description}/>
                <br />
                <input
                    type="submit" value={app.views.buttons.addTaskBtn.title}
                    style={app.views.buttons.addTaskBtn.style}
                />
            </form>
            <hr />
            <div style={app.views.taskLoggerStyle.taskItemContainer}>
                {app.modal.tasks.map((task, index) => {
                    return <TaskItem key={index} task={task} index={index} />
                })}
            </div>
        </div>
    )
}
