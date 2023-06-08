// Change background body color

const colorModeIcon = document.getElementById('color-mode-icon');
const body = document.getElementById('body');
const currentColorMode = body.getAttribute('data-bs-theme');

function changeColorMode(){
    if (currentColorMode === "dark" && colorModeIcon.classList.contains("bi-sun")){
        body.setAttribute ('data-bs-theme', "light");
        colorModeIcon.classList.remove("bi-sun");
        colorModeIcon.classList.add("bi-moon");
    }else{
        body.setAttribute ('data-bs-theme', "dark");
        colorModeIcon.classList.remove("bi-moon");
        colorModeIcon.classList.add("bi-sun");
    }

}


// Smooth scroll to section when navbar link is clicked
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    const headerHeight = document.querySelector('header').offsetHeight;
    
    window.scrollTo({
      top: targetSection.offsetTop - headerHeight,
      behavior: 'smooth'
    });
  });
});



// Animation control scroll to view

const animateElements = document.querySelectorAll('.animated');

animateElements.forEach(animate => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const animation = animate.getAttribute('data-animation');
        animate.classList.add('animate', animation);
        observer.unobserve(animate);
      }
    });
  });

  observer.observe(animate);
});