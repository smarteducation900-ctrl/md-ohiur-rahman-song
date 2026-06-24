// Visitor Counter

document.addEventListener("DOMContentLoaded", function(){

let visitorCount =
document.getElementById("visitorCount");

if(visitorCount){

let visits =
localStorage.getItem("visitorCount");

if(!visits){
visits = 1248;
}else{
visits = Number(visits) + 1;
}

localStorage.setItem(
"visitorCount",
visits
);

visitorCount.innerText =
visits.toLocaleString();

}

// Comment System

const commentBtn =
document.querySelector(".comment-box button");

const nameInput =
document.querySelector(".comment-box input");

const commentInput =
document.querySelector(".comment-box textarea");

if(commentBtn &&
nameInput &&
commentInput){

commentBtn.addEventListener("click", function(){

const name =
nameInput.value.trim();

const comment =
commentInput.value.trim();

if(!name || !comment){
alert("Please write your name and comment.");
return;
}

const commentDiv =
document.createElement("div");

commentDiv.className =
"sample-comment";

commentDiv.innerHTML = `
<h4>${name}</h4>
<p>${comment}</p>
`;

document
.querySelector(".comment-box")
.appendChild(commentDiv);

nameInput.value = "";
commentInput.value = "";

});

}

// Smooth Animation

const cards =
document.querySelectorAll(".glass-card");

cards.forEach((card,index)=>{

card.style.opacity="0";
card.style.transform=
"translateY(30px)";

setTimeout(()=>{

card.style.transition=
"all 0.8s ease";

card.style.opacity="1";

card.style.transform=
"translateY(0px)";

},300*index);

});

// YouTube Latest Videos

const API_KEY = "AIzaSyB9mKHbXmfJtSiX8r8S2WNstV307jGP_Q8";

const CHANNEL_ID =
"UCJliGU8JzBFUD_Eelyh71yQ";

async function loadVideos(){

try{

const url =
`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=50`;

const response =
await fetch(url);

const data =
await response.json();

const videos =
document.getElementById("videos");

if(!videos) return;

videos.innerHTML = "";

data.items.forEach(video=>{

if(video.id.videoId){

videos.innerHTML += `
<div class="video-card">

<iframe
src="https://www.youtube.com/embed/${video.id.videoId}"
allowfullscreen>
</iframe>

<h3>
${video.snippet.title}
</h3>

</div>
`;

}

});

}catch(error){

console.log(error);

}

}

loadVideos();

});