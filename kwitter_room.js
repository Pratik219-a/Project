// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBsalmQdxzrm5_D5P4rS6XMHoqIgly-4jY",
      authDomain: "class-94-666ae.firebaseapp.com",
      databaseURL: "https://class-94-666ae-default-rtdb.firebaseio.com",
      projectId: "class-94-666ae",
      storageBucket: "class-94-666ae.appspot.com",
      messagingSenderId: "894740524647",
      appId: "1:894740524647:web:23a4a4b1063c4cf455aec2"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
}