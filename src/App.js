import './assets/css/App.css';
import { TodoAppPage } from './pages/todo-app-page/TodoAppPage';
import { RegisterPage } from './pages/register-page/RegisterPage'
import {
  Routes,
  Route,
} from "react-router-dom";
import { LoginPage } from './pages/login-page/LoginPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/todo" element={<TodoAppPage />} />
      </Routes>
    </>

  );
}

export default App;
