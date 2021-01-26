import './App.css';
import Header from './components/Header'

function App() { // root app component
  const name = "Paul" // JS above return injected into JSX with { }
                      // can also use JS if outside elements
  return (
    <div className="App">
    <h1>Welcome to React, {name}</h1>
    <h2>Single Page Application</h2>
    <Header /> { /* mounting of import component */ }
    </div>
  );
}
// module.exports = App;
export default App;