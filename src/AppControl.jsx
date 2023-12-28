import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from './GlobalContext';

export default function AppControl() {
  const { app, setApp } = useContext(GlobalContext);
  // eslint-disable-next-line
  useEffect(() => {
    console.log('inside AppControl');

    setApp((prev) => {
      const updatedApp = { ...prev };
      updatedApp.views.taskItemStyle.container={
        width:"200px",
        border: "2px solid blue",
        margin:"1.2rem",
        padding:"1rem"
      }

      updatedApp.views.taskItemStyle.title={
        fontWeight:"bold",
        paddingBottom:"1px"
      }
      
      updatedApp.views.buttons.deleteTaskBtn.style={
        backgroundColor: "red",
        borderRadius: "4px",
        border: "2px solid red",
        cursor: "pointer",
      }
      updatedApp.views.taskLoggerStyle.heading={color: "yellow"}
      updatedApp.views.taskLoggerStyle.formContainer={
        border: "2px inset skyblue",
        padding:"1rem",
        borderRadius: "20px",
      }
      updatedApp.views.taskLoggerStyle.title={
        padding:"5px",
        margin:"5px",
        borderRadius: "5px",
        border:"none"
      }
      updatedApp.views.taskLoggerStyle.description={
        padding:"5px",
        margin:"5px",
        borderRadius: "5px",
        border:"none",
        height:"50px"
      }

      updatedApp.views.buttons.addTaskBtn.style={
        ...updatedApp.views.buttons.addTaskBtn.style,
        borderRadius: "25px",

      }

      return updatedApp;
  })



  }, [])
  return (<>
    {/* <button onClick={() => {
      app.modal.tasks.map((task, index) => {
        console.log(task);
      })
    }}>check app</button> */}
  </>);
}



const buttonStyle={

}