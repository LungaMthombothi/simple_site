// app/javascript/controllers/spin_controller.js
document.addEventListener('DOMContentLoaded', () => {
  const nameElement = document.getElementById('name-element');
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let rotateX = 0;
  let rotateY = 0;

  //Now I apply the 3D effect when a hover happens
  nameElement.addEventListener('mouseenter', () => {
    nameElement.style.transition = 'transform 0.3s ease';
    nameElement.style.transform += ' rotateX(15deg) rotateY(15deg)';
  });
  
  nameElement.addEventListener('mouseleave', () => {
    nameElement.style.transition = 'transform 0.3s ease';
    nameElement.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  //Now I handle the click-and-drag instances
  nameElement.addEventListener('mousedown', (event) => {
    isDragging = true;
    startX = event.clientX - startX;
    startY = event.clientY - startY;
    nameElement.style.transition = 'none'; // Disable transition during drag
  });

  document.addEventListener('mousemove', (event) => {
    if (isDragging) {
      const deltaX = event.clientX - startX;
      const deltaY = event.clientY - startY;

      //Now we need to adjust the rotational sensitivity
      rotateX += deltaY * 0.1;
      rotateY += deltaX * 0.1;

      //Now I update the transfrim with the new rotational values	    
      nameElement.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  });

  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      
      // Add a smooth transition when dragging stops
      nameElement.style.transition = 'transform 0.5s ease-out';
    }
  });
});

