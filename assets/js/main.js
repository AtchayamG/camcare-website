
document.addEventListener("DOMContentLoaded",function(){
  const wa=document.getElementById("whatsappBtn");
  if(wa){ wa.href="https://wa.me/"+CONFIG.whatsapp; }
  const year=document.getElementById("year");
  if(year){ year.innerText=new Date().getFullYear(); }
});
