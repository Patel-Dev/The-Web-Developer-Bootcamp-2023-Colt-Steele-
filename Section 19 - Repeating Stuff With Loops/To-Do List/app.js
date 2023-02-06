const toDoList = [];

let action = (prompt("What would you like to do?")).toLowerCase();

while (action !== "quit" && action !== "q") {
    if (action === "new") {
        const newTask = prompt("Ok, what is the to-do?");
        toDoList.push(newTask);
        console.log(`${newTask} added to the list!`)
    } else if (action === "list") {
        if (toDoList.length === 0) {
            console.log("NO TASKS IN TO-DO LIST");
        } else {
            console.log("**********");
            for (let i = 1; i <= toDoList.length; i++) {
                console.log(`${i}: ${toDoList[i - 1]}`);
            }
            console.log("**********");
        }
    } else if (action === "delete") {
        if (toDoList.length === 0) {
            console.log("Cannot delete anything as there is nothing in the to-do list!");
        } else {
            let taskToRemove = parseInt(prompt("Ok, enter the number of the task you want to remove."));
            while (true) {
                if (!Number.isNaN(taskToRemove) && taskToRemove >= 1 && taskToRemove <= toDoList.length) {
                    const deleted = toDoList.splice(taskToRemove - 1, 1);
                    console.log(`Removed ${deleted[0]} from to-do!`);
                    break;
                }
                taskToRemove = parseInt(prompt("Invalid number. Please try again - enter the number of the task you want to remove."));
            }
        }
    }

    action = (prompt("What would you like to do?")).toLowerCase();
}

console.log("OK, YOU QUIT.")