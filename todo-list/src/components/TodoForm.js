import React, { Component, useState } from 'react';

const TodoForm = () => {
	const [job, setJob] = useState('');
	const [jobs, setJobs] = useState([]);
	const handleChange = (event) => {
		const value = event.target.value;
		setJob(value);
	}
	const handleSubmit = (event) => {
		setJobs(pre => [...pre, job]);
		event.preventDefault();
		console.log(jobs);
	}
	return (
		<div className="todo-form-container">
			<form onSubmit={handleSubmit}>
				<input type="text" name='job' value={job} onChange={handleChange} placeholder="What need to be done?" />
				<input type='submit'></input>
			</form>
		</div>
	);
}
export default TodoForm;


