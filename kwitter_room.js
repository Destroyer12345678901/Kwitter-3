var firebaseConfig = {
      apiKey: "AIzaSyC--pZxFdAXz2DHelOAicX32MZUJqzOi0k",
      authDomain: "advay-tcws.firebaseapp.com",
      databaseURL: "https://advay-tcws-default-rtdb.firebaseio.com",
      projectId: "advay-tcws",
      storageBucket: "advay-tcws.appspot.com",
      messagingSenderId: "788926735949",
      appId: "1:788926735949:web:391ce19dfa91b657231e04"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_room.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     Room_names = childKey;
     console.log("Room Name-" + Room_names);
     row = "<div class = 'room_name' id =" +Room_names+ "onclick = 'redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
     document.getElementById("output").innerHTML = row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_room.html";
}