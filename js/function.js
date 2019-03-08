function navi(filename){
    window.location.href = "/ncloyaltyprogram/" + filename + ".html";
}


// //firebase
// function pushFBase(){
//     var firebaseRef = firebase.database().ref();
//
//     firebaseRef.push().set({
//         points: 10
//     });
// }

const setButton = document.querySelector("#test");

setButton.addEventListener("click", function () {
    var firebaseRef = firebase.database().ref();

    firebaseRef.push().set({
        points: 10
    });
});