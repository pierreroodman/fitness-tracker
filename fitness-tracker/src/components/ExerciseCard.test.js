import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ExerciseCard from './ExerciseCard';

const sample = { id: 1, name: 'Push-Up', muscle: 'Chest',
                 category: 'Strength', difficulty: 'Beginner' };

test('shows the exercise name and difficulty', () => {
  render(<ExerciseCard exercise={sample} onSelect={jest.fn()} />);
  expect(screen.getByText('Push-Up')).toBeInTheDocument();
  expect(screen.getByText('Beginner')).toBeInTheDocument();
});

test('calls onSelect with the exercise id when clicked', async () => {
  const onSelect = jest.fn();
  render(<ExerciseCard exercise={sample} onSelect={onSelect} />);
  await userEvent.click(screen.getByRole('button'));
  expect(onSelect).toHaveBeenCalledWith(1);
});

test('shows the in-plan note only when isInPlan is true', () => {
  const { rerender } = render(<ExerciseCard exercise={sample} onSelect={jest.fn()} />);
  expect(screen.queryByText(/in your plan/i)).not.toBeInTheDocument();
  rerender(<ExerciseCard exercise={sample} onSelect={jest.fn()} isInPlan />);
  expect(screen.getByText(/in your plan/i)).toBeInTheDocument();
});