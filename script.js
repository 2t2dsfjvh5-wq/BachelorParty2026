
const lines=[
"> Connecting to bachelor-party.service...",
"",
"████████████████████ 100%",
"",
"[ OK ] Groom detected",
"[ OK ] Beer compatibility: PASS",
"[ OK ] Austria module loaded",
"[ OK ] Mountain package installed",
"",
"Running diagnostics...",
"",
"Physical condition............. WARNING",
"Complaining level.............. MUST BE ZERO",
"Destination knowledge.......... ACCESS DENIED",
"",
"Loading packing dependencies...",
"",
"✔ hiking_boots",
"✔ backpack",
"✔ rain_jacket",
"✔ charger",
"✔ powerbank",
"✔ euros",
"",
"sudo reveal-destination",
"ERROR 403: Forbidden",
"",
"Mission ready.",
"Press the button below to continue..."
];
let i=0;
const t=document.getElementById("terminal");
function type(){
 if(i<lines.length){
   t.innerHTML+=lines[i]+"\n";
   window.scrollTo(0,document.body.scrollHeight);
   i++;
   setTimeout(type,250);
 }else{
   document.getElementById("btn").hidden=false;
 }
}
type();
document.getElementById("btn").onclick=()=>{
 document.getElementById("mission").classList.remove("hidden");
 document.getElementById("btn").style.display="none";
 window.scrollTo(0,document.body.scrollHeight);
};
