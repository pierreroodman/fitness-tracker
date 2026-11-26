import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

test('renders the button text', () => {
  render(<Button text="Save" />);
  expect(screen.getByText('Save')).toBeInTheDocument();
});

test('calls onClick when clicked', async () => {
  const handleClick = jest.fn(); // a fake function that records calls
  render(<Button text="Save" onClick={handleClick} />);
  await userEvent.click(screen.getByText('Save'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('does not call onClick when disabled', async () => {
  const handleClick = jest.fn();
  render(<Button text="Save" onClick={handleClick} disabled />);
  await userEvent.click(screen.getByText('Save'));
  expect(handleClick).not.toHaveBeenCalled();
});