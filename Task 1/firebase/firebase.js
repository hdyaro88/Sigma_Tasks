const { getDatabase } = require("firebase-admin/database");

var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://to-do-sigma-default-rtdb.firebaseio.com",
});

exports.db = admin.firestore();
