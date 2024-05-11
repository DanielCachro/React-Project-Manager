import {useRef} from 'react'

import PrimaryButton from './PrimaryButton'
import MinimalButton from './MinimalButton'
import noProjectImg from '../assets/no-projects.png'
import ProjectTask from './ProjectTask'

export default function SelectedProject({
	handledProject,
	onDeleteProject,
	onEditProject,
	onAddProject,
	onAddTask,
	onClearTask,
}) {
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
						<div className='flex flex-col-reverse gap-0 justify-between mb-4 sm:flex-row sm:mb-2'>
							<h3 className='text-2xl font-medium overflow-hidden whitespace-nowrap text-ellipsis'>{title}</h3>
							<div className='flex gap-4'>
								<MinimalButton onClick={onEditProject}>Edit</MinimalButton>
								<MinimalButton onClick={onDeleteProject}>Delete</MinimalButton>
							</div>
						</div>
						<p className='text-zinc-500'>{formattedDate}</p>
						<p className='my-8 break-words'>{description}</p>
						<div className='w-full h-1 bg-zinc-600'></div>
					</div>
					<div className='mt-8'>
						<h4 className='text-2xl font-medium'>Tasks</h4>
						<div className='flex flex-col-reverse mt-4 mb-8 sm:block'>
							<input ref={taskName} type='text' className='w-full mr-4 mt-2 px-5 py-2 rounded-md bg-zinc-950 sm:w-48' />
							<MinimalButton
								className='text-left'
								onClick={() => {
									onAddTask(taskName.current.value)
									taskName.current.value = ''
								}}>
								Add Task
							</MinimalButton>
						</div>
						<div className='max-h-96 p-4 overflow-y-scroll styled-scrollbar rounded-md bg-zinc-950'>
							{!tasks.length ? (
								<p className='text-zinc-500'>Tasks will be listed here.</p>
							) : (
								<ul>
									{tasks.map((name, iteration) => (
										<ProjectTask dataKey={iteration} key={`Task ${iteration}`} name={name} onClear={onClearTask} />
									))}
								</ul>
							)}
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
