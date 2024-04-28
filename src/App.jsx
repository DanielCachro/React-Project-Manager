import {useState} from 'react'
import Sidebar from './components/Sidebar'
import SelectedProject from './components/SelectedProject'
import AddProjectForm from './components/AddProjectForm'

const INITIAL_PROJECT = {
	title: '',
	description: '',
	dueDate: '',
}

function App() {
	const [projects, setProjects] = useState([])
	const [isAddingProject, setIsAddingProject] = useState(false)

	function addProject(newProject) {
		setProjects(prev => [...prev, newProject])
		setIsAddingProject(false)
	}

	return (
		<main className='h-screen mt-8 flex gap-8'>
			<Sidebar
				handleAddProjectBtn={() => {
					setIsAddingProject(true)
				}}
				projects={projects}></Sidebar>
			<div className='w-3/5 pt-16 text-lg text-emerald-50'>
				{!isAddingProject ? (
					<SelectedProject></SelectedProject>
				) : (
					<AddProjectForm handleSave={addProject} initialProject={INITIAL_PROJECT}></AddProjectForm>
				)}
			</div>
		</main>
	)
}

export default App
