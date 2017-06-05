/*
function someSongs() {
    this.name;
    console.log(this.name);
}


module.exports.someSongs = someSongs;
*/

//here the same thing/

module.exports = {
    /*
     function someSongs() {
     this.name;
     console.log(this.name);
     }
     */


   var someSongs = function () {
        console.log("declearning function before the name is abit inappropriate");
    },

    favMusic: ""

};