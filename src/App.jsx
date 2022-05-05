import './App.css'
import ListToDo from './componenets/ListToDo'
import StoreProvider from './componenets/StoreProvider'

function App() {

  return (
    <StoreProvider>
      <h1>Hello world</h1>
      <ListToDo />
    </StoreProvider>
    )
  }
    
  
export default App
