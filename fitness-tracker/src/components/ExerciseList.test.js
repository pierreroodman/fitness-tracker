import { render, screen } from '@testing-library/react';
import ExerciseList from './ExerciseList';

const two = [
  { id: 1, name: 'Push-Up', muscle: 'Chest', category: 'Strength', difficulty: 'Beginner' },
  { id: 2, name: 'Squat', muscle: 'Legs', category: 'Strength', difficulty: 'Beginner' },
];

test('renders one card per exercise', () => {
  render(<ExerciseList exercises={two} onExerciseClick={jest.fn()} />);
  expect(screen.getByText('Push-Up')).toBeInTheDocument();
  expect(screen.getByText('Squat')).toBeInTheDocument();
});

test('shows an empty message when there are no exercises', () => {
  render(<ExerciseList exercises={[]} onExerciseClick={jest.fn()} />);
  expect(screen.getByText(/no exercises found/i)).toBeInTheDocument();
});