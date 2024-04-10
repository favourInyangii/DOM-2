document.addEventListener('DOMContentLoaded', function() {
    // Code inside this function will run when the DOM content is fully loaded
    console.log('DOM content has been loaded');
  });
  document.addEventListener('DOMContentLoaded', function() {
    // Select the color-box and change-color-btn elements
    var colorBox = document.getElementById('color-box');
    var changeColorBtn = document.getElementById('change-color-btn');
  
    if (colorBox && changeColorBtn) {
      console.log('Color box and Change color button are successfully selected.');
  
    } else {
      console.log('Color box or Change color button not found.');
    }
  });
  function getRandomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
  
    var hexColor = '#' + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
  
    return hexColor;
  }
  
  // Test the getRandomColor function
  var randomColor = getRandomColor();
  console.log('Random Color:', randomColor);
  document.addEventListener('DOMContentLoaded', function() {
    var colorBox = document.getElementById('color-box');
    var changeColorBtn = document.getElementById('change-color-btn');
  
    // Event listener for the change-color-btn element
    changeColorBtn.addEventListener('click', function() {
      // Change the background color of color-box to a random color
      colorBox.style.backgroundColor = getRandomColor();
    });
  
    function getRandomColor() {
      var red = Math.floor(Math.random() * 256);
      var green = Math.floor(Math.random() * 256);
      var blue = Math.floor(Math.random() * 256);
      var hexColor = '#' + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
      return hexColor;
    }
  });
        