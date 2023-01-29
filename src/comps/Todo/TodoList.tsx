import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
export let api =  "https://jsonplaceholder.typicode.com/todos"
export default function TodoList() {
    const [todo, setTodo] = useState<Todo[]>([]);
    const getTodos = async () => {
        try {
            const res: AxiosResponse<Todo[]> = await axios.get(api+"?_limit=10");
            //console.log(res.data);
            setTodo(res.data);
        }
        catch (e) {
            console.log(e);
        }

    }
    useEffect(() => {
        getTodos();
    })
    return (<div>
        <h4>Todo List</h4>
        {todo?.map((el) => {
            return <TodoItem key={el.id} {...el} />
        })}
        {!todo?.length && <div>No Todos</div>}
    </div>)
}