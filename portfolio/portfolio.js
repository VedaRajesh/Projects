document.addEventListener("DOMContentLoaded", function () {
    const dots = document.querySelectorAll(".nav-dot");
    const sections = document.querySelectorAll(".section");
  
    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const index = parseInt(dot.getAttribute("data-index"));
        navigateToSection(index);
      });
    });
  
    function navigateToSection(index) {
        // Ensure the index is within the valid range
        if (index >= 0 && index < sections.length) {
          // Scroll to the selected section
          sections[index].scrollIntoView({ behavior: "smooth" });
    
          // Remove 'is-active' class from all dots and sections
          dots.forEach((dot) => dot.classList.remove("is-active"));
          sections.forEach((section) => section.classList.remove("is-active"));
    
          // Add 'is-active' class to the clicked dot and corresponding section
          dots[index].classList.add("is-active");
          sections[index].classList.add("is-active");
        }
      }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const dots = document.querySelectorAll(".nav-dot");
  
    let currentIndex = 0;
  
    document.addEventListener("keydown", function (event) {
      if (event.key === "ArrowUp") {
        navigateCarousel(-1);
      } else if (event.key === "ArrowDown") {
        navigateCarousel(1);
      }
    });
  
    function navigateCarousel(direction) {
      currentIndex += direction;
  
      // Ensure the index is within the valid range
      if (currentIndex < 0) {
        currentIndex = sections.length - 1;
      } else if (currentIndex >= sections.length) {
        currentIndex = 0;
      }
  
      // Scroll to the selected section
      sections[currentIndex].scrollIntoView({ behavior: "smooth" });
  
      // Update the active dot
      updateActiveDot();
    }
  
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentIndex = index;
        sections[currentIndex].scrollIntoView({ behavior: "smooth" });
        updateActiveDot();
      });
    });
  
    function updateActiveDot() {
      dots.forEach((dot, index) => {
        dot.classList.toggle("is-active", index === currentIndex);
      });
    }
  });
  
  //dot updatation

  document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const dots = document.querySelectorAll(".nav-dot");
  
    let currentIndex = 0;
    let isScrolling = false;
    let sectionColors = []; // Array to store background colors of sections
  
    document.addEventListener("keydown", function (event) {
      if (event.key === "ArrowUp" && !isScrolling) {
        navigateCarousel(-1);
      } else if (event.key === "ArrowDown" && !isScrolling) {
        navigateCarousel(1);
      }
    });
  
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentIndex = index;
        scrollToSection();
      });
    });
  
    function navigateCarousel(direction) {
      currentIndex += direction;
  
      // Ensure the index is within the valid range
      if (currentIndex < 0) {
        currentIndex = sections.length-1;
      } else if (currentIndex >= sections.length) {
        currentIndex = 0;
      }
  
      // Scroll to the selected section with a delay for a slower effect
      scrollToSection();
    }
  
    function scrollToSection() {
      isScrolling = true;
  
      const targetSection = sections[currentIndex];
      const targetScrollTop = targetSection.offsetTop;
      const initialScrollTop = window.pageYOffset;
      const distance = targetScrollTop - initialScrollTop;
      const duration = 1000; // Adjust the duration as needed
      const startTime = performance.now();
  
      function animateScroll(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
  
        window.scrollTo(0, initialScrollTop + distance * progress);
  
        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        } else {
          isScrolling = false;
          updateDotColor(targetSection);
        }
      }
  
      requestAnimationFrame(animateScroll);
    }
  
       
    
 
    function updateDotColor(activeSection) {
      const backgroundColor = getComputedStyle(activeSection).backgroundColor;
      let dotColor;
    
      // Set dot color based on the background color of the current section
      if (backgroundColor.toLowerCase() === "rgb(255, 255, 255)") {
        // If background is white, dot color is #4831d4
        dotColor = "#4831d4";
      } else if (backgroundColor.toLowerCase() === "rgb(204, 243, 129)") {
        // If background is #ccf381, dot color is #4831d4
        dotColor = "#4831d4";
      } else if (backgroundColor.toLowerCase() === "rgb(72, 49, 212)") {
        // If background is #4831d4, dot color is #ccf381
        dotColor = "#ccf381";
      } else if(backgroundColor.toLowerCase() === "rgb(61,21,95)"){
        // Add a default dot color in case none of the conditions match
        dotColor = "#ccf381";
      }
      else
      {
        dotColor = "#ccf381"
      }
    
      // Update dot colors based on the conditions
      dots.forEach((dot, index) => {
        dot.style.backgroundColor = dotColor;
    
        if (index === currentIndex || (index === 0 && currentIndex === sections.length - 1)) {
          dot.classList.add("is-active");
        } else {
          dot.classList.remove("is-active");
        }
        
      });
    } 
  
  });
  const imageContainer = document.getElementById('imageContainer');
  const toggleImage = document.getElementById('toggleImage');

  // Function to toggle between cross and minus images
  function toggleImages() {
    const currentImageSrc = toggleImage.src;

    if (currentImageSrc.includes('minus')) {
      toggleImage.src = 'cross.png';
    } else {
      toggleImage.src = 'minus.png';
    }
  }
