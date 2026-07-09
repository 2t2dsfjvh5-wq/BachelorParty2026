
const lines=[
"> Connecting to bachelor-party.service...",
"",
"████████████████████ 100%",
"",
"[ OK ] Groom detected",
"[ OK ] Austria module loaded",
"",
"Mission ready.",
"Press the button below to continue..."
];

let i=0;
const t=document.getElementById("terminal");
function type(){
 if(i<lines.length){
   t.innerHTML+=lines[i]+"\n";
   i++;
   setTimeout(type,200);
 }else{
   document.getElementById("btn").hidden=false;
 }
}
type();

document.getElementById("btn").onclick=()=>{
 document.getElementById("mission").classList.remove("hidden");
 document.getElementById("btn").style.display="none";
};

let map,marker;
document.getElementById("shareLocation").onclick=()=>{
 const mapDiv=document.getElementById("map");
 mapDiv.style.display="block";

 if(!map){
   map=L.map("map").setView([49.8,15.5],7);
   L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
      attribution:"© OpenStreetMap"
   }).addTo(map);
 }

 if(!navigator.geolocation){
   alert("GPS není podporována.");
   return;
 }

 navigator.geolocation.watchPosition(pos=>{
    const lat=pos.coords.latitude;
    const lng=pos.coords.longitude;

    if(!marker){
      marker=L.marker([lat,lng]).addTo(map).bindPopup("Moje poloha");
    }else{
      marker.setLatLng([lat,lng]);
    }

    map.setView([lat,lng],15);

    // TODO:
    // sem přijde Firebase zápis do Firestore
 },err=>{
    alert("Přístup k poloze nebyl povolen.");
 },{
    enableHighAccuracy:true
 });
};
