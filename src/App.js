import './App.css';
import UserInfoContext from './context/UserInfoContext';
import BlogPage from './components/BlogPage';
import { ThemeProvider } from './context/ThemeProvider';
import ContentComponent from './components/ContentComponent';

function App() {

 
  return (
    <ThemeProvider>
      <ContentComponent></ContentComponent>
    </ThemeProvider>
  );
}

export default App;
