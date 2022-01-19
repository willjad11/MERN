import { useState } from 'react';

const ToDoList = () => {
    const [list, addTask] = useState(null)

    const submitHandler = (e) => {
        e.preventDefault();
        const task = document.getElementById("taskid").value;
        document.getElementById("taskid").value = "";
        if (list == null) {
            addTask({ ["task1"]: task });
        }
        else {
            addTask(oldState => ({ ...oldState, ["task" + (Object.keys(list).length + 1)]: task }));
        }
    }

    const taskDone = (elem) => {
        const elemid = document.getElementById(elem.toString());
        if (elemid.style.textDecorationLine != "line-through") {
            elemid.style.textDecorationLine = 'line-through';
        }
        else {
            elemid.style.textDecorationLine = ""
        }
    }

    const deleteTask = (item) => {
        let newList = {...list};
        delete newList[item];
        addTask({...newList})
    }
    const listMap = list != null
        ? Object.keys(list).map(function (item, i) {
            return (
                <p id={i} key={i}>
                    {list[item]} - <input type="checkbox" id={i} unchecked="true" onChange={() => taskDone(i)} /><button type="button" onClick={() => deleteTask(item)}>Delete</button>
                </p>
            )
        })
        : "Please submit a task!";

        return (
            <div>
            <form onSubmit={submitHandler}>
                <input type="text" id="taskid" placeholder="enter new task..." />
                <input type="submit" value="Add" />
            </form>
            {listMap}
        </div>
    );
};

export default ToDoList;