import {useRef} from 'react'

import MinimalButton from './MinimalButton'
import noProjectImg from '../assets/no-projects.png'
import PrimaryButton from './PrimaryButton'
import ProjectTask from './ProjectTask'

export default function SelectedProject({handledProject, onDeleteProject, onAddProject, onAddTask, onClearTask}) {
	const {title, description, dueDate, tasks} = handledProject || {}
	const formattedDate = formatDate(dueDate)
	const taskName = useRef(null)

	function formatDate(date) {
		const dateObject = new Date(date)

		const month = dateObject.toLocaleString('en-US', {month: 'short'})
		const day = dateObject.getDate()
		const year = dateObject.getFullYear()

		return `${month} ${day}, ${year}`
	}

	return (
		<>
			{handledProject ? (
				<>
					<div>
						<div className='flex justify-between mb-2'>
							<h3 className='text-2xl font-medium'>{title}</h3>
							<MinimalButton onClick={onDeleteProject}>Delete</MinimalButton>
						</div>
						<p className='text-zinc-500'>{formattedDate}</p>
						<p className='my-8'>{description}</p>
						<div className='w-full h-1 bg-zinc-600'></div>
					</div>
					<div className='mt-8'>
						<h4 className='text-2xl font-medium'>Tasks</h4>
						<div className='my-8'>
							<input ref={taskName} type='text' className='mr-4 px-5 py-2 rounded-md bg-zinc-950' />
							<MinimalButton
								onClick={() => {
									onAddTask(taskName.current.value)
								}}>
								Add Task
							</MinimalButton>
						</div>
						<div className='px-6 py-6 rounded-md bg-zinc-950'>
							{!tasks.length && <p className='text-zinc-500'>Tasks will be listed here.</p>}
							{tasks.map((name, iteration) => (
								<ProjectTask dataKey={iteration} key={`Task ${iteration}`} name={name} onClear={onClearTask} />
							))}
						</div>
					</div>
				</>
			) : (
				<>
					<div className='flex flex-col items-center pt-16'>
						<img src={noProjectImg} className='w-16 mb-4' alt='noProjectImg' />
						<h3 className='mb-4 text-2xl font-medium'>No Project Selected</h3>
						<p className='mb-4'>Select a project or get started with a new one</p>
						<PrimaryButton onClick={onAddProject}>Create new project</PrimaryButton>
					</div>
				</>
			)}
		</>
	)
}
