function navi(filename){
    window.location.href = "/ncloyaltyprogram/" + filename + ".html";
}


//firebase
function pushFBase(){
    var firebaseRef = firebase.database().ref();

    firebaseRef.push().set({
        points: 10
    });
}