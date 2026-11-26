import PropTypes from 'prop-types';
import ExerciseCard from './ExerciseCard';

function ExerciseList({ exercises, onExerciseClick, planIds = [] }) {
  // Empty state: tell the user instead of showing a blank screen
  if (exercises.length === 0) {
    return <p>No exercises found. Try changing your search.</p>;
  }

  return (
    <div style={{ display: 'grid', gap: 16,
                  gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}>
      {exercises.map((exercise) => (
        <ExerciseCard
          key={exercise.id}
          exercise={exercise}
          onSelect={onExerciseClick}
          isInPlan={planIds.includes(exercise.id)}
        />
      ))}
    </div>
  );
}

ExerciseList.propTypes = {
  exercises: PropTypes.array.isRequired,
  onExerciseClick: PropTypes.func.isRequired,
  planIds: PropTypes.array,
};

export default ExerciseList;