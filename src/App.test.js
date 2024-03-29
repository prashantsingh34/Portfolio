import { render, screen } from '@testing-library/react';
import AboutCard from './components/About/AboutCard';

test('renders learn react link', () => {
  render(<AboutCard />);
  const linkElement = screen.getByText(/I am currently employed/i);
  expect(linkElement).toBeInTheDocument();
});
