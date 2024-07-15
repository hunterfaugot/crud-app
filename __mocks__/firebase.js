// __mocks__/firebase.js

const initializeApp = jest.fn();
const getApps = jest.fn(() => []);
const getApp = jest.fn(() => ({}));
const getFirestore = jest.fn();
const getAuth = jest.fn(() => ({
  createUserWithEmailAndPassword: jest.fn(),
  signInWithEmailAndPassword: jest.fn(),
  signOut: jest.fn(),
}));

const mockUserCredential = {
  user: {
    uid: 'test-user-id',
    email: 'test@example.com',
  },
};

const createUserWithEmailAndPassword = jest.fn(() => Promise.resolve(mockUserCredential));
const signInWithEmailAndPassword = jest.fn(() => Promise.resolve(mockUserCredential));
const signOut = jest.fn(() => Promise.resolve());

module.exports = {
  initializeApp,
  getApps,
  getApp,
  getFirestore,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
};
