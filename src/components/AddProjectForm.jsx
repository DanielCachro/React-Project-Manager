import MinimalButton from './MinimalButton'
import PrimaryButton from './PrimaryButton'
import Input from './Input'
import {useState} from 'react'

export default function AddProjectForm({handleSave, initialProject}) {
	const [newProject, setNewProject] = useState(initialProject)

	function handleChange(e) {
		setNewProject(prev => ({...prev, [e.target.id]: e.target.value}))
	}

	return (
		<form>
			<div className='flex justify-end gap-4'>
				<MinimalButton>Cancel</MinimalButton>
				<PrimaryButton
					onClick={() => {
						handleSave(newProject)
					}}>
					Save
				</PrimaryButton>
			</div>
			<div>
				<Input label='Title' type='text' name='title' id='title' value={newProject.title} handleChange={handleChange} />
				<Input
					label='Description'
					type='textarea'
					name='description'
					id='description'
					value={newProject.description}
					handleChange={handleChange}
				/>
				<Input
					label='Due Date'
					type='date'
					name='dueDate'
					id='dueDate'
					value={newProject.date}
					handleChange={handleChange}
				/>
			</div>
		</form>
	)
}
