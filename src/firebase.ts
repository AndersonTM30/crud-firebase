import { Firestore } from '@google-cloud/firestore';
import serviceAccountKey from '../serviceAccountKey.json';

const FirebaseConnect = new Firestore({
  credentials: serviceAccountKey,
  projectId: 'node-firebase-52e3a'
});

export default FirebaseConnect;
