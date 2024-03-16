import Navbar from './components/Navbar.jsx';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import Notfound from './Pages/Notfound.jsx';
import Employees from './Pages/Employees.jsx';
import AddEmployee from './Pages/AddEmployee.jsx';

function App() {

	return (
		<>
			<Navbar />
			<div className="wrapper">
				{/* Routes handling of the website */}
				<Routes>
					<Route path='/' element={<AddEmployee />} />
					<Route path='/employees' element={<Employees />} />
					<Route path='/*' element={<Notfound />} />
				</Routes>
				<ToastContainer/>
			</div>

		</>
	)
}

export default App
