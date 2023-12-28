import React, { useContext } from 'react'
import GlobalContext from '../GlobalContext';

export default function TaskItem(props) {
	const { app } = useContext(GlobalContext);

	const delBtn = app.views.buttons.deleteTaskBtn;
	return (
		<div style={app.views.taskItemStyle.container}>
			<div style={app.views.taskItemStyle.title}>Title:{props.task.title}</div>
			<div style={app.views.taskItemStyle.description}>Description:{props.task.description}</div>
			<button
				onClick={() => app.controller.deleteTask(props.index)}
				style={delBtn.style}
			>{delBtn.title}</button>
		</div>
	)
}
