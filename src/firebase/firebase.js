import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);

  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export { firebase, googleAuthProvider, database as default };

  //database.ref('expenses).on('SELECT FROM 3 BELOW', (snapshot) ={
  //child_removed, child_changed, value, child_added

  // database.ref('expenses')
  //   .once('value')
  //   .then((snapshot) => {
  //     const expenses = [];

  //     snapshot.forEach((childSnapshot) => {
  //       expenses.push({
  //          ...childSnapshot.val(),
  //          id: childSnapshot.key
  //       });
  //     });
  //     console.log(expenses);
  //   });

  // database.ref('expenses').push({
  //   description: 'Rent',
  //   note: '',
  //   amount: 109500,
  //   createdAt: 918273987
  // });

  // database.ref('notes').push({
  //   title: 'To Do',
  //   body: 'Go for a run'
  // });

  // database.ref().on('value', (snapshot) => {
  //   const val = snapshot.val();
  //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
  // });

  // database.ref()
  //   .once('value')
  //   .then((snapshot) => {
  //     const val = snapshot.val();
  //     console.log(val);
  //   }).catch((e) => {
  //     console.log('Error fetching data', e);
  //   });

  // database.ref().set({
  //   name: 'Sung',
  //   age: 25,
  //   stressLevel: 6,
  //   isSingle: false,
  //   job: {
  //     title: 'Software engineer',
  //     company: 'Google'
  //   },
  //   location: {
  //     city: 'Los Angeles',
  //     country: 'United States'
  //   }
  // }).then(() => {
  //   console.log('Data is saved');
  // }).catch((e) => {
  //   console.log('This failed.', e);
  // });

  // database.ref().update({
  //   name: 'Slim',
  //   age: 55,
  //   'location/city': 'New York',
  //   stressLevel: 9,
  //   'job/company': 'Amazon'
  // });
  
  // database.ref('isSingle')
  //   .remove()
  //   .then(() => {
  //     console.log('Data was removed');
  //   }).catch((e) => {
  //     console.log('Did not remove data', e);
  //   });