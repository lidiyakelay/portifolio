import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from './contexts/theme';
import Layout from './components/Layout/Layout'; // Updated Layout import
import Projects from './components/Projects/Projects';
import ProjectDetail from './components/ProjectDetail/ProjectDetail';
import './App.css';

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <Router>
      <div className={`${themeName} app`}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Projects />} />
            <Route path='project/:id' element={<ProjectDetail />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
