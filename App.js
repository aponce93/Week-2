import logo from './logo.svg';
import './App.css';
import EmployeeForm from './components/EmployeeForm';

function App() {
    return (
        <div className="App">
            <h1>Employee Form</h1>
            <EmployeeForm />  {/* Ensure the component is used here */}
        </div>
    );
}


export default App;
