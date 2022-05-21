var firebaseConfig = {
      apiKey: "AIzaSyAmTq0obNbkoHJzYW2YbzbDxj8NCgjDnxM",
      authDomain: "kwitter-1afda.firebaseapp.com",
      databaseURL: "https://kwitter-1afda-default-rtdb.firebaseio.com",
      projectId: "kwitter-1afda",
      storageBucket: "kwitter-1afda.appspot.com",
      messagingSenderId: "440030630088",
      appId: "1:440030630088:web:a5178cfb80321244ef15fd"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
