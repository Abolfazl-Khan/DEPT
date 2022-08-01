import ClientQuestionForm from './index';
import { fireEvent, render, screen } from '@testing-library/react';

const mockFormInputs = [
  { name: 'NAME', value: 'mocke_name' },
  { name: 'EMAIL', value: 'mocke_email' },
  { name: 'MESSAGE', value: 'mocke_message' },
];

it('should has all necessary inputs', async () => {
  render(<ClientQuestionForm />);

  mockFormInputs.map((item) =>
    expect(screen.getByRole('textbox', { name: item.name })).toBeInTheDocument()
  );
});

it('should has a submit button', async () => {
  render(<ClientQuestionForm />);

  const submitButton = screen.getByRole('button', { name: /send/i });

  expect(submitButton).toBeInTheDocument();
});

it('should through error for invalidate form fields', async () => {
  render(<ClientQuestionForm />);

  fireEvent.submit(screen.getByRole('button', { name: /send/i }));

  expect(await screen.findAllByText(/required/i)).toHaveLength(3);
});

it('should works correctly with valid form fields ', async () => {
  render(<ClientQuestionForm />);

  mockFormInputs.map((item) =>
    fireEvent.input(screen.getByRole('textbox', { name: item.name }), {
      target: { value: item.value },
    })
  );

  fireEvent.submit(screen.getByRole('button', { name: /send/i }));

  const errorMessage = screen.queryByText(/required/i);
  expect(errorMessage).not.toBeInTheDocument();
});
