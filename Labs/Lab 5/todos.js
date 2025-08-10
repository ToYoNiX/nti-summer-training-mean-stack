(function main (args) {
    if (args.length < 1) {
        console.log("No argument passed")
        return -1
    }

    // Get the command for the system
    const command = args[0].toLowerCase()    
    if (command == "add") {

    } else if (command == "list") {

    } else if (command == "edit") {

    } else if (command == "delete") {

    } else {
        console.log(`Invalid order!!!\nHere is the available orders: \n1. Add {Task Context}\n2. list\n3. Edit {Task ID} {Task Context}\n4. Delete {Task ID}`)
    }

})(process.argv.slice(2))

