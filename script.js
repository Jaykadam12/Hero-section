const trackContainers = document.querySelectorAll(".track-container");
const heroText = document.querySelector(".hero h1");
const images = document.querySelectorAll(".image-box");

images.forEach((box) => {
  box.addEventListener("mouseenter", () => {
    box.classList.add("textFaded");
  });

  box.addEventListener("mouseleave", () => {
    box.classList.remove("textFaded");
  });
});

trackContainers.forEach((container) => {
  const imageBox = container.querySelector(".image-box");

  container.addEventListener("mouseenter", () => {
    heroText.classList.add("text-active"); // Dim text on hover
    container.style.zIndex = "11"; // Bring hovered image above text
  });

  container.addEventListener("mouseleave", () => {
    heroText.classList.remove("text-active"); // Restore text color
    container.style.zIndex = "1"; // Move image back under text
  });

  container.addEventListener("mousemove", (e) => {
    const bounds = container.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;
    const xPercentage = (x / bounds.width - 0.5) * 2;
    const yPercentage = (y / bounds.height - 0.5) * 2;

    imageBox.style.transform = `translate(${xPercentage * 40}px, ${
      yPercentage * 40
    }px) scale(1.05)`;
  });

  container.addEventListener("mouseleave", () => {
    imageBox.style.transform = "";
  });
});
// Select all image-box elements
const imageBoxes = document.querySelectorAll('.image-box');

// Function to handle mouse enter event
function handleMouseEnter() {
    imageBoxes.forEach(box => {
        if (box !== this) {
            box.classList.add('faded');
        }
    });
}

// Function to handle mouse leave event
function handleMouseLeave() {
    imageBoxes.forEach(box => {
        box.classList.remove('faded');
    });
}

// Attach event listeners to each image-box
imageBoxes.forEach(box => {
    box.addEventListener('mouseenter', handleMouseEnter);
    box.addEventListener('mouseleave', handleMouseLeave);
});
