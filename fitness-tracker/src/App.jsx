import Button from './components/Button';
import Card from './components/Card';
import Badge from './components/Badge';

function App() {
  return (
    <div>
      <h1>Fitness Tracker</h1>
      <Card><h2>Push-Up</h2><p>Great for chest.</p><Badge label="Expert"/></Card>
      
    </div>
  );
}
export default App;