
type TodoProps = {
    id:number
    title:string
    completed:boolean
    userId:number
}
export default function TodoItem({id,userId,title,completed}:TodoProps){
    return (<div>
        {id} : {title} : {<button>{completed ? "Done" : "Not Done"}</button>}
    </div>)
}