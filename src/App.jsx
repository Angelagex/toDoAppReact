import './App.css'
import Form from './componenets/Form'
import ListToDo from './componenets/ListToDo'
import StoreProvider from './componenets/StoreProvider'

function App() {

  return (
    <StoreProvider>
      <h1>Hello world</h1>
      <Form />
      <ListToDo />
    </StoreProvider>
    )
  }
    
  
export default App
