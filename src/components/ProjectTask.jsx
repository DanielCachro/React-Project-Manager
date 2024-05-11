import MinimalButton from './MinimalButton'

export default function ProjectTask({name, dataKey, onClear}) {
	return (
		<li data-key={dataKey} className='flex justify-between mb-4 mt-4'>
			<p className='w-[999rem] mr-4 overflow-hidden whitespace-nowrap text-ellipsis'>{name}</p>
			<MinimalButton className='relative' onClick={onClear}>
				Clear
			</MinimalButton>
		</li>
	)
}
