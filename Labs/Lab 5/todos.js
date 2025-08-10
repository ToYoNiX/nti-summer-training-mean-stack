const fs = require('node:fs');
var filePath = "./tasks.json"

function main (args) {
    if (args.length < 1) {
        console.log("No argument passed")
        return -1
    }

    const command = args[0].toLowerCase()    
    let tasks = eval(fs.readFileSync(filePath, 'utf-8'))
    if (command == "add") {

        if (args.length < 2) {
            console.log("No task statement to add!")
            return -1
        }

        tasks.push({"content": args[1]})
        fs.writeFileSync(filePath, JSON.stringify(tasks))
    } else if (command == "list") {

        console.log("ID : Content")
        let id = 0
        for (let task of tasks) {
            console.log(id, ":", task.content);
            id += 1;
        }
    } else if (command == "edit") {
        
        if (args.length < 2) {
            console.log("Invalid arguments!")
            return -1
        }

        tasks[args[1]] = {"content":args[2]}
        fs.writeFileSync(filePath, JSON.stringify(tasks))
    } else if (command == "delete") {
        
        
        if (args.length < 2) {
            console.log("Invalid arguments!")
            return -1
        }

        tasks.splice(args[1], 1)
        fs.writeFileSync(filePath, JSON.stringify(tasks))
    } else {
        console.log(`Invalid order!!!\nHere is the available orders: \n1. Add {Task Context}\n2. list\n3. Edit {Task ID} {Task Context}\n4. Delete {Task ID}`)
    }
}

main(process.argv.slice(2));
