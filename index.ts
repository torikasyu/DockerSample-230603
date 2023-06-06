const batchFunction = async (name:string): Promise<void> => {
	await new Promise(resolve => setTimeout(resolve, 2000))
	console.log(`Process ${name} done`)
}

const main = async (): Promise<void> => {
	// console.log(process.argv)
	// if(process.argv.length < 3) throw new Error('Please provide a command')
	// const command = process.argv[2]

	const command = process.env.COMMAND
	if(command === undefined) throw new Error('Please provide a COMMAND environment variable')

	console.log(`Process ${command} start`)
	await batchFunction(command)
}

main()
