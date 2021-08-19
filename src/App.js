import logo from './logo.svg';
import AngularCarCompProject from './components/AngularCarCompProject';
import './App.css';

function GreetingToPortfolio(props) {
  return <h1> Welcome to {props.name}'s Portfolio!</h1>
}
function App() {
  return (
    <div className="App">
      <GreetingToPortfolio name="Devon Serrao" />
      <AngularCarCompProject />

    </div>
  );
}

export default App;
