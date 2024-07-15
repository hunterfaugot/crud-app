import '@testing-library/jest-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';

// Mock the createUserWithEmailAndPassword function
jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(() => ({
    createUserWithEmailAndPassword: jest.fn(),
  })),
  createUserWithEmailAndPassword: jest.fn(),
}));
