(() =>{

   console.log();
   
   discSet = document.querySelectorAll('.display'),
   dragDiscs = document.querySelectorAll('.display img'),
   dropZones = document.querySelectorAll('.drag-box');
   
   function startDrop(ev){
      ev.preventDefault();
   }
   
   function startDrag(ev){
      ev.dataTransfer.setData("img",ev.target.id);
   }
   
   
   document.addEventListener("dragover", function(ev) {
   ev.preventDefault();
   });
   
   function startDrop(ev){
      ev.preventDefault();
      ev.target.appendChild(document.getElementById(data));
   }
   
   
   dragDiscs.forEach(piece => {
   piece.addEventListener("dragstart", function(ev) {
      console.log();
   
      ev.dataTransfer.setData("img", this.id);
   })
   });
   
   dropZones.forEach(zone => {
   zone.addEventListener("dragover", function(ev){
   ev.preventDefault();
   });
   zone.addEventListener("drop", function(ev) {
   
   
   ev.preventDefault();
   console.log();
   
   if (this.childElementCount > 0) {
      console.log();
      return;
   }

   console.log(ev.dataTransfer.getData('img'));
   
   let targetAudio = document.querySelector(`#${ev.dataTransfer.getData('img')}`).dataset.audio;
   
   console.log(targetAudio);
   
   playAudio = document.createElement('audio');
   playAudio.src = targetAudio;
   
   playAudio.loop = "true";
   
   document.body.appendChild(playAudio);
   
   playAudio.loop = "true"; document.body.appendChild(playAudio);
   playAudio.play();
   let data = ev.dataTransfer.getData("img");
   
   ev.target.appendChild(document.querySelector(`#${data}`));










   
   
   })
   
   });
   })();
