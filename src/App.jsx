import {useState} from 'react'
import Sidebar from './components/Sidebar'
import SelectedProject from './components/SelectedProject'
import ProjectForm from './components/ProjectForm'

const INITIAL_PROJECT = {
	title: '',
	description: '',
	dueDate: '',
	tasks: [],
}
const INITIAL_APP_DATA = {
	projects: [],
	projectFormOpen: false,
	selectedProject: 0,
}

function App() {
	const [appData, setAppData] = useState(INITIAL_APP_DATA)
	const selectedProjectData = appData.projects[appData.selectedProject]

	function toggleProjectForm(shouldOpen) {
		shouldOpen === undefined
			? setAppData(prev =>
					prev.projectFormOpen ? {...prev, projectFormOpen: false} : {...prev, projectFormOpen: true}
			  )
			: setAppData(prev => ({...prev, projectFormOpen: shouldOpen}))
	}

	function addNewProject(project) {
		const newProjects = [...appData.projects, project]
		setAppData(prev => ({
			...prev,
			projects: newProjects,
			selectedProject: prev.projects.length,
		}))
		toggleProjectForm(false)
	}

	function editProject(project, indexOfProject) {
		const newProjects = [
			...appData.projects.slice(0, indexOfProject),
			project,
			...appData.projects.slice(indexOfProject + 1),
		]
		setAppData(prev => ({...prev, projects: newProjects, selectedProject: indexOfProject}))
		toggleProjectForm()
	}

	function deleteProject(indexOfProject) {
		const indexToRemove = indexOfProject
		const newProjects = [...appData.projects.slice(0, indexToRemove), ...appData.projects.slice(indexToRemove + 1)]
		setAppData(prev => ({...prev, projects: newProjects, selectedProject: -1}))
	}

	function selectProject(indexOfProject) {
		setAppData(prev => ({...prev, selectedProject: indexOfProject}))
	}

	function addNewTask(taskName) {
		const newTasks = [...selectedProjectData.tasks, taskName]
		const newProjects = appData.projects.map((project, index) =>
			index === appData.selectedProject ? {...project, tasks: newTasks} : project
		)
		setAppData(prev => ({...prev, projects: newProjects}))
	}

	function clearTask(indexOfTask) {
		const newTasks = [
			...selectedProjectData.tasks.slice(0, indexOfTask),
			...selectedProjectData.tasks.slice(indexOfTask + 1),
		]
		const newProjects = appData.projects.map((project, index) =>
			index === appData.selectedProject ? {...project, tasks: newTasks} : project
		)
		setAppData(prev => ({...prev, projects: newProjects}))
	}

	return (
		<main className='flex mt-8'>
			<Sidebar
				handleAddProjectBtnClick={() => {
					selectProject(-1)
					toggleProjectForm(true)
				}}
				handleSidebarBtnClick={e => {
					selectProject(+e.target.getAttribute('data-key'))
					toggleProjectForm(false)
				}}
				projects={appData.projects}></Sidebar>
			<div className='w-1/2 pt-16 text-lg text-emerald-50 mx-8 sm:w-3/5'>
				{!appData.projectFormOpen ? (
					<SelectedProject
						handledProject={selectedProjectData}
						onAddProject={() => {
							toggleProjectForm(true)
						}}
						onDeleteProject={() => {
							deleteProject(appData.selectedProject)
						}}
						onEditProject={() => {
							toggleProjectForm()
						}}
						onAddTask={addNewTask}
						onClearTask={e => {
							clearTask(+e.target.closest('[data-key]').getAttribute('data-key'))
						}}></SelectedProject>
				) : (
					<ProjectForm
						key={`Project ${appData.selectedProject}`}
						handledProject={selectedProjectData ?? INITIAL_PROJECT}
						handleSave={
							selectedProjectData
								? project => {
										editProject(project, appData.selectedProject)
								  }
								: addNewProject
						}
						handleCancel={() => {
							toggleProjectForm()
						}}></ProjectForm>
				)}
			</div>
		</main>
	)
}

export default App
