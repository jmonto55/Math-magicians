import { render, screen } from '@testing-library/react';
import Home from '../components/Home';
import '@testing-library/jest-dom/extend-expect';

describe('Test suite for the Home component', () => {
  let home;
  beforeEach(() => {
    render(<Home />);
    home = screen.getByTestId('home');
  });

  it('Should test if Home component is inside the document', () => {
    expect(home).toBeInTheDocument();
  });

  it('Should render a snapshot of the Home component', () => {
    expect(home).toMatchSnapshot();
  });
});
