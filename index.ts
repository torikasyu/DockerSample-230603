const batchFunction = async (name:string): Promise<void> => {
	await new Promise(resolve => setTimeout(resolve, 1000))
	console.log(`Process ${name} done`)
}

batchFunction('hololab')
