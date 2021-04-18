import { render, screen } from '@testing-library/react';
import { SomePage } from './SomePage';

test('renders This page has a condition to enter text', () => {
  render(<SomePage />);
  const linkElement = screen.getByText(/This page has a condition to enter/i);
  expect(linkElement).toBeInTheDocument();
});
