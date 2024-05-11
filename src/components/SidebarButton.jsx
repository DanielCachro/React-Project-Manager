export default function SidebarButton({children, handleClick, dataKey}) {
	return (
		<li>
			<button
				type='button'
				className='w-full py-2 pl-2 overflow-hidden whitespace-nowrap rounded-sm text-ellipsis text-left hover:bg-zinc-900 transition-colors'
				data-key={dataKey}
				onClick={handleClick}>
				{children}
			</button>
		</li>
	)
}
