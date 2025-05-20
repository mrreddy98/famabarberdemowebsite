document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');

  // Width of one slide (assumes all same width)
  const slideWidth = slides[0].getBoundingClientRect().width;

  // Arrange slides next to each other horizontally
  slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px';
  });

  let currentIndex = 0;

  // Move to slide by index
  const moveToSlide = (index) => {
    // Clamp index so it doesn't go out of bounds
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentIndex = index;

    const amountToMove = slides[currentIndex].style.left;
    track.style.transform = 'translateX(-' + amountToMove + ')';
  };

  // Button listeners
  prevBtn.addEventListener('click', () => {
    moveToSlide(currentIndex - 1);
  });

  nextBtn.addEventListener('click', () => {
    moveToSlide(currentIndex + 1);
  });
});

// Wait for DOM ready
document.addEventListener('DOMContentLoaded', () => {
  // Carousel functionality
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');

  const slideWidth = slides[0].getBoundingClientRect().width;

  // Arrange slides next to each other
  slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px';
  });

  let currentIndex = 0;

  function moveToSlide(index) {
    if (index < 0) {
      currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }
    const amountToMove = -slideWidth * currentIndex;
    track.style.transform = `translateX(${amountToMove}px)`;
  }

  prevBtn.addEventListener('click', () => {
    moveToSlide(currentIndex - 1);
  });

  nextBtn.addEventListener('click', () => {
    moveToSlide(currentIndex + 1);
  });

  // Welcome screen timeout, then show main content
  setTimeout(() => {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('main-wrapper').classList.remove('hidden');
  }, 2500); // 2.5 seconds

});

// Toggle "Know More" section
function toggleMore() {
  const moreText = document.getElementById('moreText');
  moreText.classList.toggle('show');
}

// Toggle 'moreText' visibility on clicking "Know More" button
function toggleMore() {
  const moreText = document.getElementById('moreText');
  const btn = document.querySelector('.know-more-btn');

  if (moreText.classList.contains('show')) {
    moreText.classList.remove('show');
    btn.textContent = 'Know More';
  } else {
    moreText.classList.add('show');
    btn.textContent = 'Show Less';
  }
}

document.getElementById('bookingForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const reminder = document.getElementById('reminder').value;

  if (!name || !phone || !date || !time) {
    alert('Please fill in all required fields.');
    return;
  }

  const message = `
    Appointment booked for ${name} on ${date} at ${time}. 
    Reminder: ${reminder.replace('1hour', '1 hour before').replace('1day', '1 day before')}
  `;

  document.getElementById('confirmationMessage').innerText = message;
});

const dateInput = document.getElementById('date');

dateInput.min = new Date().toISOString().split("T")[0]; // disable past dates

document.getElementById('bookingForm').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const phone = document.getElementById('phone').value.trim();
  const phonePattern = /^\+?\d{10,15}$/; // simple international phone format
  
  if (!phonePattern.test(phone)) {
    alert("Please enter a valid phone number.");
    return;
  }
  
  // ... rest of validation and booking logic
});

// Future enhancement placeholder
// Example: Lazy loading or modal popups for gallery images
document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio & Media section loaded.");
});


// Subscription Plan Selection
function selectPlan(planName) {
  alert(`You selected the ${planName.charAt(0).toUpperCase() + planName.slice(1)} Plan!`);
  // Optional: Redirect to payment or checkout page
  // window.location.href = `/checkout?plan=${planName}`;
}


// Feature 27: Virtual Hairstyle Try-On (Simulated)
document.getElementById('upload-photo').addEventListener('change', function (e) {
  const canvas = document.getElementById('tryon-canvas');
  const ctx = canvas.getContext('2d');
  const reader = new FileReader();
  reader.onload = function (event) {
    const img = new Image();
    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      // Simulate overlay
      ctx.fillStyle = 'rgba(255, 0, 0, 0.2)';
      ctx.fillRect(50, 50, 100, 100); // Fake hair overlay box
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(e.target.files[0]);
});

// Feature 28: AI-Powered Style Recommendations (Simplified mock logic)
function getStyleRecommendation() {
  const faceShapes = ["Round", "Oval", "Square", "Heart"];
  const styles = {
    "Round": "Try a layered undercut to elongate the face.",
    "Oval": "Any style suits you! How about a fade?",
    "Square": "Go for a textured crop with volume.",
    "Heart": "Side-swept fringe with light layering."
  };
  const shape = faceShapes[Math.floor(Math.random() * faceShapes.length)];
  document.getElementById("recommendation-output").innerText = `Detected face shape: ${shape}. ${styles[shape]}`;
}

// Feature 29: Loyalty Program (LocalStorage Mock)
function login() {
  const username = document.getElementById("username").value;
  if (!username) return alert("Enter a username");

  let points = localStorage.getItem(username + "_points");
  if (!points) {
    points = Math.floor(Math.random() * 100); // Mock data
    localStorage.setItem(username + "_points", points);
  }

  document.getElementById("login-section").style.display = "none";
  document.getElementById("points-section").style.display = "block";
  document.getElementById("user-welcome").innerText = `Welcome, ${username}`;
  document.getElementById("loyalty-points").innerText = points;

  let discount = 0;
  if (points > 90) discount = 25;
  else if (points > 70) discount = 15;
  else if (points > 50) discount = 10;
  document.getElementById("discount").innerText = `${discount}%`;
}

document.getElementById("review-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = this.querySelector("input").value;
  const rating = this.querySelector("select").value;
  const review = this.querySelector("textarea").value;

  const reviewEntry = document.createElement("div");
  reviewEntry.innerHTML = `<strong>${name}</strong> - ${'⭐'.repeat(rating)}<br>${review}<hr>`;
  document.getElementById("submitted-reviews").appendChild(reviewEntry);
  this.reset();
});

function copyReferralCode() {
  const codeInput = document.getElementById("referral-code");
  codeInput.select();
  codeInput.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(codeInput.value);
  alert("Referral code copied: " + codeInput.value);
}


function addToCart(productName) {
  alert(productName + " has been added to your cart!");
}


