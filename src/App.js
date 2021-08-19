import logo from './logo.svg';
import AngularCarCompProject from './components/AngularCarCompProject';
import './App.css';
import CSharpCarCompInterface from './components/CSharpCarCompInterface';

function GreetingToPortfolio(props) {
  return <h1> Welcome to {props.name}'s Portfolio!</h1>
}
function App() {
  return (
    <div className="App">
      <GreetingToPortfolio name="Devon Serrao" />
      <hr />
      <AngularCarCompProject />
      <hr />
      <CSharpCarCompInterface newtitle="C# Windows Form Application GUI"/>

    </div>
  );
}

export default App;
