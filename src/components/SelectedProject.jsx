import MinimalButton from './MinimalButton'
import noProjectImg from '../assets/no-projects.png'
import PrimaryButton from './PrimaryButton'

export default function SelectedProject() {
	return (
		<>
			{true ? (
				<>
					<div>
						<div className='flex justify-between mb-2'>
							<h3 className='text-2xl font-medium'>Project 1</h3>
							<MinimalButton>Delete</MinimalButton>
						</div>
						<p className='text-zinc-500'>Oct 31, 2024</p>
						<p className='my-8'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio beatae voluptas placeat ea error fugit
							dignissimos labore consectetur rerum natus est nostrum aliquam molestias sunt corporis cum, quidem quasi
							culpa.
						</p>
						<div className='w-full h-1 bg-zinc-600'></div>
					</div>
					<div className='mt-8'>
						<h4 className='text-2xl font-medium'>Tasks</h4>
						<div className='my-8'>
							<input type='text' className='mr-4 px-5 py-2 rounded-md bg-zinc-950' />
							<MinimalButton>Add Task</MinimalButton>
						</div>
						<div className='px-5 py-16 rounded-md bg-zinc-950'>
							<ul>
								<li className='flex justify-between'>
									<p>Task 1</p>
									<MinimalButton>Clear</MinimalButton>
								</li>
							</ul>
						</div>
					</div>
				</>
			) : (
				<>
					<div className='flex flex-col items-center pt-16'>
						<img src={noProjectImg} className='w-16 mb-4' alt='noProjectImg' />
						<h3 className='mb-4 text-2xl font-medium'>No Project Selected</h3>
						<p className='mb-4'>Select a project or get started with a new one</p>
						<PrimaryButton>Create new project</PrimaryButton>
					</div>
				</>
			)}
		</>
	)
}
