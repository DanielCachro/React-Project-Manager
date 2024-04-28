import {useState} from 'react'
import MinimalButton from './MinimalButton'
import PrimaryButton from './PrimaryButton'
import Input from './Input'

export default function AddProjectForm({handleSave, handledProject}) {
	const [project, setProject] = useState(handledProject)

	function handleChange(e) {
		setProject(prev => ({...prev, [e.target.id]: e.target.value}))
	}

	return (
		<form>
			<div className='flex justify-end gap-4'>
				<MinimalButton>Cancel</MinimalButton>
				<PrimaryButton
					onClick={() => {
						handleSave(project)
					}}>
					Save
				</PrimaryButton>
			</div>
			<div>
				<Input label='Title' type='text' name='title' id='title' value={project.title} handleChange={handleChange} />
				<Input
					label='Description'
					type='textarea'
					name='description'
					id='description'
					value={project.description}
					handleChange={handleChange}
				/>
				<Input
					label='Due Date'
					type='date'
					name='dueDate'
					id='dueDate'
					value={project.date}
					handleChange={handleChange}
				/>
			</div>
		</form>
	)
}
