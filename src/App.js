import './outpt.css';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm.jsx';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard.jsx';
function App() {
  return (
    <div className="App">
   <Router>
      <Routes  >
      <Route path='/'  element={<LoginForm />} />
      <Route path='/users'  element={<Dashboard />} />
     </Routes>
   </Router>
    </div>
  );
}


export default App;


