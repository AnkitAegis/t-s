import { useState } from "react";
import axios,{AxiosResponse} from "axios";
import { api } from "./TodoList";

type InputTodo = {
    title : string
    completed: boolean
    userId : number
}
export default function AddTodo(){
    const [text,setText] = useState<string>("");
    const postTodo = async(title:string)=>{
        try{
            const res:AxiosResponse<InputTodo> = await axios.post(api,{
                title,completed:false,userId:1
            })
            console.log(res.data);
        }catch(e){
            console.log(e);
        }
    }
    return (<div>
        <input value={text} onChange={(e)=>setText(e.target.value)} placeholder="add new todo"/>
        <button>Add Todo</button>
    </div>)
}