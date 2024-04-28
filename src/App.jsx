import {useState} from 'react'
import Sidebar from './components/Sidebar'
import SelectedProject from './components/SelectedProject'
import ProjectForm from './components/ProjectForm'

const INITIAL_APP_DATA = {
	projects: [],
	isAddingProject: false,
}

const INITIAL_PROJECT = {
	title: '',
	description: '',
	dueDate: '',
}

function App() {
	const [appData, setAppData] = useState(INITIAL_APP_DATA)

	function addNewProject(newProject) {
		const newProjects = [...appData.projects, newProject]
		setAppData(prev => ({...prev, projects: newProjects, isAddingProject: false}))
	}

	console.log(appData)

	return (
		<main className='h-screen mt-8 flex gap-8'>
			<Sidebar
				handleAddProjectBtn={() => {
					setAppData(prev => ({...prev, isAddingProject: true}))
				}}
				projects={appData.projects}></Sidebar>
			<div className='w-3/5 pt-16 text-lg text-emerald-50'>
				{!appData.isAddingProject ? (
					<SelectedProject></SelectedProject>
				) : (
					<ProjectForm handleSave={addNewProject} handledProject={INITIAL_PROJECT}></ProjectForm>
				)}
			</div>
		</main>
	)
}

export default App
