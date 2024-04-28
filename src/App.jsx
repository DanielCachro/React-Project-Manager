import {useState} from 'react'
import Sidebar from './components/Sidebar'
import SelectedProject from './components/SelectedProject'
import ProjectForm from './components/ProjectForm'

const INITIAL_PROJECT = {
	title: '',
	description: '',
	dueDate: '',
}
const INITIAL_APP_DATA = {
	projects: [],
	isAddingProject: false,
	selectedProject: 0,
}

function App() {
	const [appData, setAppData] = useState(INITIAL_APP_DATA)
	const selectedProject = appData.projects[appData.selectedProject]

	function addNewProject(newProject) {
		const newProjects = [...appData.projects, newProject]
		setAppData(prev => ({
			...prev,
			projects: newProjects,
			isAddingProject: false,
			selectedProject: prev.selectedProject + 1,
		}))
	}

	function deleteProject(indexOfProject) {
		const indexToRemove = +indexOfProject
		const newProjects = [...appData.projects.slice(0, indexToRemove), ...appData.projects.slice(indexToRemove + 1)]
		setAppData(prev => ({...prev, projects: newProjects, selectedProject: indexToRemove - 1}))
	}

	function selectProject(e) {
		const selectedIndex = e.target.getAttribute('data-key')
		setAppData(prev => ({...prev, selectedProject: selectedIndex}))
	}

	return (
		<main className='h-screen mt-8 flex gap-8'>
			<Sidebar
				handleAddProjectBtnClick={() => {
					setAppData(prev => ({...prev, isAddingProject: true}))
				}}
				handleSidebarBtnClick={selectProject}
				projects={appData.projects}></Sidebar>
			<div className='w-3/5 pt-16 text-lg text-emerald-50'>
				{!appData.isAddingProject ? (
					<SelectedProject
						handledProject={selectedProject}
						onDeleteProject={() => {
							deleteProject(appData.selectedProject)
						}}
						onAddProject={() => {
							setAppData(prev => ({...prev, isAddingProject: true}))
						}}></SelectedProject>
				) : (
					<ProjectForm handleSave={addNewProject} handledProject={INITIAL_PROJECT}></ProjectForm>
				)}
			</div>
		</main>
	)
}

export default App
