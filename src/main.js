var client_id = '66741e4e58bb40afbed6a3b7ac5eef5a';
var client_secret='f6645bffcc5440cab57c01a1a76d7d7e';
var redirect_uri = 'http://localhost:5000/';

const AUTHORIZE = 'https://accounts.spotify.com/authorize?'

function onPageLoad(){
}


function requestAthorization(){
  client_id = document.getElementById("clientId").value;
  client_secret =  document.getElementById("clientSecret").value;
  
  localStorage.setItem("client_id", client_id);
  localStorage.setItem("client_secret", client_secret); // In a real app you should not expose your client_secret to the user

    let url = AUTHORIZE;
    url += "?client_id=" + client_id;
    url += "&response_type=code";
    url += "&redirect_uri=" + encodeURI(redirect_uri);
    url += "&show_dialog=true";
    url += "&scope=user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private";
    window.location.href = url; // Show Spotify's author
}
