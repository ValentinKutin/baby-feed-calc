import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  it('renders and increments counter', async () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /count is/i });
    await userEvent.click(button);
    expect(button).toHaveTextContent('count is 1');
  });
});


