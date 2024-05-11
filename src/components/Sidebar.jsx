import PrimaryButton from './PrimaryButton'
import SidebarButton from './SidebarButton'

export default function Sidebar({handleAddProjectBtnClick, handleSidebarBtnClick, projects}) {
	return (
		<aside className='w-32 h-screen flex flex-col mt-16 flex-wrap flex-shrink-0 px-4 py-16 overflow-hidden rounded-r-xl bg-zinc-950 text-emerald-50 md:w-72 md:px-8'>
			<h2 className='w-full mb-4 overflow-hidden text-xl font-medium uppercase md:text-2xl'>Your Projects</h2>
			<PrimaryButton
				className='w-full overflow-hidden whitespace-nowrap text-ellipsis md:w-fit'
				onClick={handleAddProjectBtnClick}>
				<span>+</span> Add Project
			</PrimaryButton>
			<menu className='mt-4 w-full'>
				{projects.map((project, iteration) => (
					<SidebarButton handleClick={handleSidebarBtnClick} dataKey={iteration} key={`Project ${iteration}`}>
						{project.title}
					</SidebarButton>
				))}
			</menu>
		</aside>
	)
}
