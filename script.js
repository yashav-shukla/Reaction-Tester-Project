var start;


    function move() {
      var shape = document.getElementById("shape");

      var top = Math.random() * 400;
      var left = Math.random() * 800;
      var wh = Math.random() * 200 + 50; // width/height: 50–250px

      shape.style.width = wh + "px";
      shape.style.height = wh + "px";
      

      shape.style.top = top + "px";
      shape.style.left = left + "px";
      shape.style.width = wh + "px";
      shape.style.height = wh + "px";

      // Random color
      shape.style.backgroundColor = getRandomColor();

      shape.style.display = "block";
      start = new Date().getTime();
    }

    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    document.getElementById("shape").onclick = function () {
      var end = new Date().getTime();
      var timeTaken = (end - start) / 1000;
      alert("Reaction Time: " + timeTaken + "s");
      this.style.display = "none";
      setTimeout(move, Math.random() * 1000); // delay before showing again
    };

    move(); // Start the game