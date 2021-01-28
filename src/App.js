import './App.css';
import NameProp from './components/NameProp'
function App() { // root app component
  return (
    <div className="App">
      <NameProp name="Paul" />
      <NameProp name="Rob" />
    </div>
  );
}
// module.exports = App;
export default App;