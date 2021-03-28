import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router} from '@reach/router';
import Main from './views/Main';
import Create from './views/Create';
import Edit from './views/Edit';




function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Router>
        <Main path='/' />
        <Create path='/new' />
        <Edit path='/edit/:id' />
      </Router>
    </div>
  );
}

export default App;
