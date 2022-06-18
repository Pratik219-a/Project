function addUser()
{
    user_name = document.getElementById("user_name").Value;
    firebase.database().ref("/").child(user_name).update({
      purpose : "adding user"
    });
}
//ADD YOUR FIREBASE LINKS
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