import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './component/MainPage';
import TodoWriterPage from './component/TodoWriterPage';





function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>} />
          <Route path='/write' element={<TodoWriterPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
