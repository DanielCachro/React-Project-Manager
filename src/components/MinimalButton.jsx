export default function MinimalButton({children, className, ...props}) {
	const classes = `capitalize hover:text-emerald-500 transition-colors ${className}`
	return (
		<button type='button' className={classes} {...props}>
			{children}
		</button>
	)
}
