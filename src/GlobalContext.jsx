import { createContext, useEffect, useState } from "react";

const GlobalContext = createContext();
export default GlobalContext;

const modal = {
    tasks: [
        { title: 'bali', description: 'askejfhsdj askdjfas' },
        { title: 'babu', description: 'sad' },
    ]
}

const buttonStyle={
    border: "none",
    color: "white",
    // padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inlineBlock",
    fontSize: "16px"
}

const artitecture = {
    modal,
    views: {
        buttons: {
            addTaskBtn: {
                style: {...buttonStyle,padding: "15px 32px",backgroundColor:"green"},
                title: "add task",
                // onClick: null,
            },
            deleteTaskBtn:{
                style: {...buttonStyle},
                title: "x",
                // onClick: null,
            }
        },
        taskItemStyle: {
            container:{},
            title: {},
            description: {},
            createdAt: {},
            status: {},
        },
        taskLoggerStyle:{
            heading:{},
            formContainer:{},
            title:{},
            description:{},
            taskItemContainer:{}
        }
    },
    controller: {
        addTask: null,
        deleteTask: null,
    }
}

export const GlobalProvider = ({ children }) => {
    const [app, setApp] = useState(artitecture);

    const addTask = (task) => {
        setApp((prev) => {
            const updatedApp = { ...prev };
            updatedApp.modal.tasks = [task, ...updatedApp.modal.tasks]
            return updatedApp;
        })
    }
    const deleteTask=(ind)=>{
        setApp((prev) => {
            const updatedApp = { ...prev };
            updatedApp.modal.tasks = updatedApp.modal.tasks.filter((task,index)=>index!==ind);
            return updatedApp;
        })
    }

    useEffect(() => {
        // adding the fEATURES
        setApp((prev) => {
            const updatedApp = { ...prev };
            updatedApp.controller.addTask = addTask;
            updatedApp.controller.deleteTask = deleteTask;
            return updatedApp;
        })
    }, [])


    return (
        <GlobalContext.Provider value={{ app, setApp }}>
            {children}
        </GlobalContext.Provider>
    );
}

