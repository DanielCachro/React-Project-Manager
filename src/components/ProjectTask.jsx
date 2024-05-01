import MinimalButton from './MinimalButton'

export default function ProjectTask({name, dataKey, onClear}) {
	return (
		<ul data-key={dataKey}>
			<li className='flex justify-between mb-4 mt-4'>
				<p>{name}</p>
				<MinimalButton onClick={onClear}>Clear</MinimalButton>
			</li>
		</ul>
	)
}
