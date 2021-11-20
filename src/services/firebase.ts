import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

import config from './config'

// const appFirebase = firebase.initializeApp(config.firebase);


// export const Providers = {
//   google: new firebase.auth.GoogleAuthProvider()
// }

firebase.initializeApp(config.firebase);

/*export*/ const auth = firebase.auth();
/*export*/ const database = firebase.database();

 

export{ firebase, auth, database };