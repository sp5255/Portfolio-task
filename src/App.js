
import './App.css';
import Blogs from './components/Blogs';
import FeedbackForm from './components/FeedbackForm';
import Projects from './components/Projectsl';

import SlideShow from "./components/SlideShow";

function App() {
  return (
    <div className="App">     
      <SlideShow />
      <Projects />
      <Blogs />
      <FeedbackForm />
    </div>
  );
}

export default App;

