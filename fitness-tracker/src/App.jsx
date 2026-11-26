import exercises from './data/exercises';
import ExerciseList from './components/ExerciseList';

function App() {
  return (
    <ExerciseList
      exercises={exercises}
      onExerciseClick={(id) => console.log('clicked', id)}
    />
  );
}
export default App;