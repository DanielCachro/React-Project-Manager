import PrimaryButton from './PrimaryButton'
import SidebarButton from './SidebarButton'

export default function Sidebar({handleAddProjectBtn, projects}) {
	return (
		<aside className='w-1/3 px-8 py-16 rounded-r-xl bg-zinc-950 text-emerald-50 md:w-72'>
			<h2 className='text-2xl font-medium uppercase mb-4'>Your Projects</h2>
			<PrimaryButton onClick={handleAddProjectBtn}>
				<span>+</span> Add Project
			</PrimaryButton>
			<menu className='mt-4'>
				{projects.map((project, iteration) => 
					<SidebarButton key={`Project ${iteration}`}>{project.title}</SidebarButton>
				)}
			</menu>
		</aside>
	)
}
