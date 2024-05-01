import {useState} from 'react'
import MinimalButton from './MinimalButton'
import PrimaryButton from './PrimaryButton'
import Input from './Input'

export default function AddProjectForm({handleSave, handleCancel, handledProject}) {
	const [project, setProject] = useState(handledProject)
	const [showError, setShowError] = useState(false)

	function handleChange(e) {
		setProject(prev => ({...prev, [e.target.id]: e.target.value}))
	}

	return (
		<form>
			<div className='flex justify-end gap-4'>
				<MinimalButton onClick={handleCancel}>Cancel</MinimalButton>
				<PrimaryButton
					onClick={() => {
						Object.values(project).every(value => !!value) ? handleSave(project) : setShowError(true)
					}}>
					Save
				</PrimaryButton>
			</div>
			<div>
				<Input
					label='Title'
					type='text'
					name='title'
					id='title'
					value={project.title}
					handleChange={handleChange}
					isError={!project.title && showError}
				/>
				<Input
					label='Description'
					type='textarea'
					name='description'
					id='description'
					value={project.description}
					handleChange={handleChange}
					isError={!project.description && showError}
				/>
				<Input
					label='Due Date'
					type='date'
					name='dueDate'
					id='dueDate'
					value={project.dueDate}
					handleChange={handleChange}
					isError={!project.dueDate && showError}
				/>
			</div>
		</form>
	)
}
