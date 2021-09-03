
var firebaseConfig = {
      apiKey: "AIzaSyAfVBD8HXNV-80oSCWBSHRihe1fgvB_bLM",
      authDomain: "kwitter-ef820.firebaseapp.com",
      databaseURL:
      projectId: "kwitter-ef820",
      storageBucket: "kwitter-ef820.appspot.com",
      messagingSenderId: "912498079470",
      appId: "1:912498079470:web:e932d8734b464e4fd8e5ff"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
