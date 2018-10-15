import * as admin from 'firebase-admin';
const serviceAccount =  require('../adminsdk.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://discover-new-brands.firebaseio.com'
});

const defaultAppDatabase = admin.database();
const defaultAppStorage = admin.storage();


export { admin, defaultAppStorage, defaultAppDatabase as default }
