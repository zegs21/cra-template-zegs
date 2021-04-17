import { render, screen } from '@testing-library/react';
import { Home } from './Home';

test("renders welcome to Zegs' CRA text", () => {
  render(<Home />);
  const linkElement = screen.getByText(/Welcome to Zegs' CRA/i);
  expect(linkElement).toBeInTheDocument();
});
