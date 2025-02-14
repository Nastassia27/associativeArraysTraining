import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

export type todolistsType = {
    id: string,
    title: string,
    filter: FilterValuesType
}
export type taskType = {
    id: string,
    title: string,
    isDone: boolean,
}
export type taskArrayType = {
    [key: string]: taskType[]
}

function App() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<todolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState<taskArrayType>({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });


    function removeTask(id: string) {
        /*let filteredTasks = tasks.filter(t => t.id != id);
        setTasks(filteredTasks);*/
    }

    function addTask(title: string) {
        /* let task = {id: v1(), title: title, isDone: false};
         let newTasks = [task, ...tasks];
         setTasks(newTasks);*/
    }

    function changeStatus(taskId: string, isDone: boolean) {
        /* let task = tasks.find(t => t.id === taskId);
         if (task) {
             task.isDone = isDone;
         }

         setTasks([...tasks]);*/
    }


    function changeFilter(todolistId: string, value: FilterValuesType) {
        const filteredTodolists = todolists.map(t => todolistId === t.id ? {...t, value} : t)
        setTodolists(filteredTodolists)
        /* setFilter(value);*/
    }


    return (
        <div className="App">
            {todolists.map(t => {
                let tasksForTodolist = tasks[t.id];

                if (t.filter === "active") {
                    tasksForTodolist = tasks[t.id].filter(t => t.isDone === false);
                }
                if (t.filter === "completed") {
                    tasksForTodolist = tasks[t.id].filter(t => t.isDone === true);
                }

                return (
                    <Todolist
                        todolistsId={t.id}
                        key={t.id}
                        title={t.title}
                        filter={t.filter}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}/>)
            })
            }
        </div>
    )
}


export default App;
