const batchFunction = async (name:string): Promise<void> => {
	await new Promise(resolve => setTimeout(resolve, 2000))
	console.log(`Process ${name} done`)
}

const main = async (): Promise<void> => {
	let command = process.env.COMMAND
	if(command === undefined) {
		command = 'Heavy Batch Process'
	}

	console.log(`Process ${command} start`)
	await batchFunction(command)
}

main()
