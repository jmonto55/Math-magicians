import { render, screen } from '@testing-library/react';
import Quote from '../components/Quote';
import '@testing-library/jest-dom/extend-expect';

describe('Test suite for the Quote component', () => {
  let quote;
  beforeEach(() => {
    render(<Quote />);
    quote = screen.getByTestId('quote');
  });

  it('Should test if Quote component is inside the document', () => {
    expect(quote).toBeInTheDocument();
  });

  it('Should render a snapshot of the Quote component', () => {
    expect(quote).toMatchSnapshot();
  });
});
