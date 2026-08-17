// Arquivo: src/config/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Objeto de configuração fornecido por você
const firebaseConfig = {
  apiKey: "AIzaSyAC2s0YvzQIlYNZlEIldnQksMiWzeSNS2c",
  authDomain: "ifmaker-educador.firebaseapp.com",
  projectId: "ifmaker-educador",
  storageBucket: "ifmaker-educador.firebasestorage.app",
  messagingSenderId: "595545822993",
  appId: "1:595545822993:web:20ca17d0055f4679d1deb0",
  measurementId: "G-4B3EYC41K6"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa e exporta a instância do banco de dados Firestore
export const db = getFirestore(app);