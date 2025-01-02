import './App.css'
import EmployeeComponent from './components/EmployeeComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
          <Routes>
            {/* // http://localhost:3000/ */}
            <Route path='/' element={ <ListEmployeeComponent /> }></Route>
            {/* // http://localhost:3000/employees */}
            <Route path="/employees" element = { <ListEmployeeComponent /> }></Route>
            {/* // http://localhost:3000/add-employee */}
            <Route path='/add-employee' element = { <EmployeeComponent /> }></Route>
            {/* // http://localhost:3000/edit-employee/1 */}
            <Route path='/edit-employee/:id' element = { <EmployeeComponent />} ></Route>
            {/* // http://localhost:3000/delete-employee/1 */}
            <Route path='/delete-employee/:id' element = { <EmployeeComponent />} ></Route>
          </Routes>        
        <FooterComponent></FooterComponent>
      </BrowserRouter>
    </>
  )
}

export default App
