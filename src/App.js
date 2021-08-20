import logo from './logo.svg';
import AngularCarCompProject from './components/AngularCarCompProject';
import './App.css';
import CSharpCarCompInterface from './components/CSharpCarCompInterface';
import BookstoreWebsite from './components/BookstoreWebsite';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom'
import { EmailList, ListContactDetails } from './components/ListContactDetails';




function GreetingToPortfolio(props) {
  return <h1> Welcome to {props.name}'s Portfolio!</h1>
}
function App() {
  return (
    <div className="App">
      <GreetingToPortfolio name="Devon Serrao" />
      <hr />
      <Router>
        <NavBar />

        <Switch>
          <Route path="/bookstore" component={returnBookstoreWebsite} />
          <Route path="/angular" component={returnAngularProject} />
          <Route path="/csharp" component={returnCSharpProject} />
          <Route path="/contact" component={returnEmailList} />
        </Switch>
      </Router>

      <AngularCarCompProject />
      <hr />
      <CSharpCarCompInterface newtitle="C# Windows Form Application GUI"/>
      <hr />
      <BookstoreWebsite />
      <hr />
      <EmailList />
    </div>
  );
}

function returnBookstoreWebsite () {
  return (
    <div>
      <BookstoreWebsite />
    </div>
  )
}

function returnAngularProject () {
  return (
    <div>
      <AngularCarCompProject />
    </div>
  )
}

function returnCSharpProject () {
  return (
    <div>
      <CSharpCarCompInterface />
    </div>
  )
}

function returnEmailList() {
  return (
    <div>
      <EmailList />
    </div>
  )
}
export default App;
