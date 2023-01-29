import { Counter } from 'comps/Counter'
import AddTodo from 'comps/Todo/AddTodo'
import TodoList from 'comps/Todo/TodoList'
import './App.css'


function App() {

  return (
    <div className="App">
        <Counter/>
        <AddTodo/>
        <TodoList/>
    </div>
  )
}

export default App
