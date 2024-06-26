export default function Input({label, type, name, id, value, handleChange, isError}) {
	let inputClasses =
		'w-full p-1 border-b-2 rounded-sm bg-zinc-950 focus:outline-none focus:border-emerald-600 dark:[color-scheme:dark]'
	!isError ? (inputClasses += ' border-zinc-800') : (inputClasses += ' border-red-800')

	return (
		<div className='flex flex-col text-emerald-50'>
			<label className='font-medium mt-4 pb-2 text-zinc-400 capitalize' htmlFor='title'>
				{label}
			</label>
			{type === 'textarea' ? (
				<textarea
					className={inputClasses}
					name={name}
					id={id}
					rows='3'
					maxLength='255'
					value={value}
					onChange={handleChange}
					required></textarea>
			) : (
				<input
					className={inputClasses}
					type={type}
					name={name}
					id={id}
					value={value}
					onChange={handleChange}
					required
				/>
			)}
		</div>
	)
}
