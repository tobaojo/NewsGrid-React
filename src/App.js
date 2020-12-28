import './App.css';
import Header from './components/Header';
import Showcase from './components/Showcase';
import ShowcaseContent from './components/ShowcaseContent';
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="container">
      <Header></Header>
      <Showcase></Showcase>
      <ShowcaseContent></ShowcaseContent>
      <Footer></Footer>
    </div>
  );
}

export default App;
