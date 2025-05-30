import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCMrqIBIKSTQ1hRwZBUpBRsZObveae-T0I",
  authDomain: "agent-insight.firebaseapp.com",
  databaseURL: "https://agent-insight-default-rtdb.firebaseio.com",
  projectId: "agent-insight",
  storageBucket: "agent-insight.firebasestorage.app",
  messagingSenderId: "1054673901082",
  appId: "1:1054673901082:web:1f371a4787c4e6806823a3",
  measurementId: "G-SCQ0T4TWKQ"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export const auth = getAuth(app);
export const db   = getDatabase(app);
export default database;

