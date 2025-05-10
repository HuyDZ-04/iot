  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA36ToE6xvJwBrTMjBtz-IunH92H9I_ZLc",
    authDomain: "tt-iot-819b0.firebaseapp.com",
    projectId: "tt-iot-819b0",
    storageBucket: "tt-iot-819b0.firebasestorage.app",
    messagingSenderId: "602178707361",
    appId: "1:602178707361:web:ed7e3c7f21e3040d5ff5e0"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// khởi tạo database
const database = firebase.database();
const tv=document.getElementById("tv");
const router=document.getElementById("router");
const air=document.getElementById("air");
const light=document.getElementById("light");
const speaker=document.getElementById("speaker");
const alarm=document.getElementById("alarm");
const temp=document.getElementById("temp");
const humid=document.getElementById("humid");

////////////////////////////////////////////////////đọc temp và humid từ firebase về web/////////////////////////////
database.ref("bai3").on("value", function(snapshot) {
    let t=snapshot.val().temp;
    temp.innerHTML = t;
})
database.ref("bai3").on("value", function(snapshot) {
    let u=snapshot.val().humid;
    humid.innerHTML = u;
})
//////////////////////////////////////////////////đồng bộ từ web lên firebase///////////////////////////////////////
tv.addEventListener("click", function() {
    if(tv.checked) {
        database.ref("bai3").update({
            "tv" : 1
        });
    } else {
        database.ref("bai3").update({
            "tv" : 0
        });
    }
})
router.addEventListener("click", function() {
    if(router.checked) {
        database.ref("bai3").update({
            "router" : 1
        });
    } else {
        database.ref("bai3").update({
            "router" : 0
        });
    }
})
air.addEventListener("click", function() {
    if(air.checked) {
        database.ref("bai3").update({
            "air" : 1
        });
    } else {
        database.ref("bai3").update({
            "air" : 0
        });
    }
})
light.addEventListener("click", function() {
    if(light.checked) {
        database.ref("bai3").update({
            "light" : 1
        });
    } else {
        database.ref("bai3").update({
            "light" : 0
        });
    }
})
speaker.addEventListener("click", function() {
    if(speaker.checked) {
        database.ref("bai3").update({
            "speaker" : 1
        });
    } else {
        database.ref("bai3").update({
            "speaker" : 0
        });
    }
})
alarm.addEventListener("click", function() {
    if(alarm.checked) {
        database.ref("bai3").update({
            "alarm" : 1
        });
    } else {
        database.ref("bai3").update({
            "alarm" : 0
        });
    }
})
//////////////////////////////////////////////////đồng bộ từ firebase về web///////////////////////////////////////
database.ref("bai3").on("value", function(snapshot) {
    const data = snapshot.val();
    if(data.tv==1) {
        tv.checked=true;
    } else {
        tv.checked=false;
    }
    if(data.router==1) {
        router.checked=true;
    } else {
        router.checked=false;
    }
    if(data.air==1) {
        air.checked=true;
    } else {
        air.checked=false;
    }
    if(data.light==1) {
        light.checked=true;
    } else {
        light.checked=false;
    }
    if(data.speaker==1) {
        speaker.checked=true;
    } else {
        speaker.checked=false;
    }
    if(data.alarm==1) {
        alarm.checked=true;
    } else {
        alarm.checked=false;
    }
})

