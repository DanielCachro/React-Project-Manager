export default function SidebarButton({children}) {
	return (
		<li>
			<button type='button' className='w-full py-2 pl-2 rounded-sm text-left hover:bg-zinc-900 transition-colors'>
				{children}
			</button>
		</li>
	)
}
