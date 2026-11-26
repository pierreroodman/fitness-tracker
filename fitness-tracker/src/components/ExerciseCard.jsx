import PropTypes from 'prop-types';
import Card from './Card';
import Badge from './Badge';
import Button from './Button';

function ExerciseCard({ exercise, onSelect, isInPlan = false }) {
  return (
    <Card>
      <h3>{exercise.name}</h3>
      <p>{exercise.muscle} • {exercise.category}</p>
      <Badge label={exercise.difficulty} />

      {/* Show a green note only when the exercise is in the plan */}
      {isInPlan && <p style={{ color: 'green' }}>✓ In your plan</p>}

      <Button
        text={isInPlan ? 'Added' : 'View Details'}
        variant={isInPlan ? 'secondary' : 'primary'}
        onClick={() => onSelect(exercise.id)}
      />
    </Card>
  );
}

ExerciseCard.propTypes = {
  exercise: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    muscle: PropTypes.string,
    category: PropTypes.string,
    difficulty: PropTypes.string,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
  isInPlan: PropTypes.bool,
};

export default ExerciseCard;