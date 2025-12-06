import Flag from './components/Flag/Flag';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app-header">
        <h1 className="app-title">Indian Flag</h1>
        <p className="app-subtitle">Tiranga - Our Pride</p>
      </div>
      <div className="flag-section">
        <Flag />
      </div>
    </div>
  );
}
export default App;
