import { useParams, useNavigate } from 'react-router-dom';
import exercises from '../data/exercises';
import Badge from './Badge';
import Button from './Button';

function ExerciseDetail() {
  const { id } = useParams();         // always a string, like "3"
  const navigate = useNavigate();

  // Convert the string to a number, then search the array
  const exercise = exercises.find((e) => e.id === Number(id));

  // Error state: the URL had an id that doesn't exist
  if (!exercise) {
    return (
      <div>
        <p>Sorry, we couldn't find that exercise.</p>
        <Button text="Back to exercises" onClick={() => navigate('/exercises')} />
      </div>
    );
  }

  return (
    <div>
      <h2>{exercise.name}</h2>
      <Badge label={exercise.difficulty} />
      <p>{exercise.description}</p>
      <Button text="Back" variant="secondary" onClick={() => navigate(-1)} />
    </div>
  );
}
export default ExerciseDetail;