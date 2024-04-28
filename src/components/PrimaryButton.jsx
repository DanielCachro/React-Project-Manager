export default function PrimaryButton({children, className, ...props}) {
	const classes = `mt-4 mb-4 py-2 px-4 rounded-md bg-emerald-600 text-emerald-100 hover:bg-emerald-500 transition-colors ${className}`
	return (
		<button type='button' className={classes} {...props}>
			{children}
		</button>
	)
}
