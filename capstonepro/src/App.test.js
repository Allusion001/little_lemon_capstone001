import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './Components/BookingForm';
import BookingPage from './Components/BookingPage';

test('renders learn react link', () => {
  render(<BookingForm/>);
  const linkElement = screen.
  expect(linkElement).toBeInTheDocument();
});
