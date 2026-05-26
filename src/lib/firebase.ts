import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

if (!firebaseConfig || !firebaseConfig.apiKey) {
  console.error("Firebase Configuration Error: Firebase keys are missing. Please make sure Firebase is properly configured via AI Studio Settings.");
}

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Configurações do Provedor Google para o escopo correto
googleProvider.setCustomParameters({
  prompt: 'select_account'
});
