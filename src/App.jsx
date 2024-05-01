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
	projects: [
		{title: 'Test Project', description: 'Test Description', dueDate: '2024-05-15', tasks: []},
		{title: 'Test Project 2', description: 'Test Description', dueDate: '2024-05-15', tasks: []},
	],
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

	function addNewTask(taskName) {
		const newTasks = [...selectedProject.tasks, taskName]
		const newProjects = appData.projects.map((project, index) =>
			index === +appData.selectedProject ? {...project, tasks: newTasks} : project
		)
		setAppData(prev => ({...prev, projects: newProjects}))
	}

	function clearTask(e) {
		const indexToRemove = +e.target.closest('[data-key]').getAttribute('data-key')
		const newTasks = [
			...selectedProject.tasks.slice(0, indexToRemove),
			...selectedProject.tasks.slice(indexToRemove + 1),
		]
		const newProjects = appData.projects.map((project, index) =>
			index === +appData.selectedProject ? {...project, tasks: newTasks} : project
		)
		setAppData(prev => ({...prev, projects: newProjects}))
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
						onAddProject={() => {
							setAppData(prev => ({...prev, isAddingProject: true}))
						}}
						onDeleteProject={() => {
							deleteProject(appData.selectedProject)
						}}
						onAddTask={addNewTask}
						onClearTask={clearTask}></SelectedProject>
				) : (
					<ProjectForm
						handleSave={addNewProject}
						handleCancel={() => {
							setAppData(prev => ({...prev, isAddingProject: false}))
						}}
						handledProject={INITIAL_PROJECT}></ProjectForm>
				)}
			</div>
		</main>
	)
}

export default App
