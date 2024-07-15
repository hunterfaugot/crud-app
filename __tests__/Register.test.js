import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Register from '../src/app/register/page';
import { createUserWithEmailAndPassword } from 'firebase/auth';

jest.mock('firebase/app');
jest.mock('firebase/auth', () => ({
  createUserWithEmailAndPassword: jest.fn(),
}));

describe('Register Component', () => {
  beforeEach(() => {
    createUserWithEmailAndPassword.mockClear();
    createUserWithEmailAndPassword.mockResolvedValue({
      user: { uid: '12345' }
    });
  });

  test('renders Register component', () => {
    render(<Register />);
    expect(screen.getAllByText(/Register/i)).toHaveLength(2);
  });

  test('register form submission', async () => {
    render(<Register />);
    const emailInput = screen.getByPlaceholderText(/Email/i);
    const passwordInput = screen.getByPlaceholderText(/Password/i);
    const registerButton = screen.getAllByText(/Register/i).find(
      (el) => el.tagName === 'BUTTON'
    );

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(registerButton);

    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(expect.any(Object), 'test@example.com', 'password');
    expect(
      await screen.findByText(/Registration successful! You can now log in./i)
    ).toBeInTheDocument();
  });

  test('contains email and password inputs and a register button', () => {
    render(<Register />);
    const emailInput = screen.getByPlaceholderText(/Email/i);
    const passwordInput = screen.getByPlaceholderText(/Password/i);
    const registerButton = screen.getAllByText(/Register/i).find(
      (el) => el.tagName === 'BUTTON'
    );

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(registerButton).toBeInTheDocument();
  });
});
