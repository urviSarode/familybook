var images=[
    "family/mylogo.png","family/mammaslogo.png","family/sharvil's logo.png","mami's logo.png", "mama's logo.png"
];
var i=0;
function nextmember(){
    if(i==9){
        i=0;
    }
    document.getElementById("MyAlbum").src=images[i];
    i++;
}