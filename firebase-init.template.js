const firebaseConfig = {
  apiKey: "__API_KEY__",
  authDomain: "journeyman-edge-exams.firebaseapp.com",
  projectId: "journeyman-edge-exams",
  storageBucket: "journeyman-edge-exams.firebasestorage.app",
  messagingSenderId: "1082302204793",
  appId: "1:1082302204793:web:51de91b5fa6c991b0b7da8"
};

// --- DO NOT EDIT BELOW THIS LINE --- //

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
