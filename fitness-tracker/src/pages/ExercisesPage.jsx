import { useNavigate } from 'react-router-dom';
import exercises from '../data/exercises';
import ExerciseList from '../components/ExerciseList';

function ExercisesPage() {
  const navigate = useNavigate();

  // Send the user to the detail page for the chosen exercise
  const handleSelect = (id) => navigate(`/exercises/${id}`);

  return (
    <div>
      <h2>Exercises</h2>
      <ExerciseList exercises={exercises} onExerciseClick={handleSelect} />
    </div>
  );
}
export default ExercisesPage;