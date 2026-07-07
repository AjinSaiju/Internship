// Mobile Menu

const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


// Smooth Scrolling

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {

  link.addEventListener('click', e => {

    e.preventDefault();

    const target = document.querySelector(
      link.getAttribute('href')
    );

    if(target){

      target.scrollIntoView({
        behavior: 'smooth'
      });

    }

  });

});


// Shipment Tracking Feature

const trackBtn = document.getElementById('trackBtn');

if(trackBtn){

  trackBtn.addEventListener('click', () => {

    const trackingInput =
      document.getElementById('trackingInput').value.trim();

    const trackingCard =
      document.querySelector('.tracking-card');

    const trackId =
      document.getElementById('trackId');

    const trackStatus =
      document.getElementById('trackStatus');

    const trackLocation =
      document.getElementById('trackLocation');

    const trackDate =
      document.getElementById('trackDate');

    if(trackingInput === ''){

      alert('Please enter a tracking number');
      return;

    }

    // Shipment Status List

    const statuses = [

      'Shipment Picked Up',
      'In Transit',
      'Arrived at Hub',
      'Out for Delivery',
      'Delivered'

    ];

    // Shipment Locations

    const locations = [

      'Kochi, India',
      'Dubai, UAE',
      'Singapore',
      'London, UK',
      'New York, USA'

    ];

    // Random Status

    const randomStatus =
      statuses[Math.floor(Math.random() * statuses.length)];

    // Random Location

    const randomLocation =
      locations[Math.floor(Math.random() * locations.length)];

    // Delivery Date

    const deliveryDate = new Date();

    deliveryDate.setDate(
      deliveryDate.getDate() + 5
    );

    // Show Tracking Details

    trackId.textContent = trackingInput;

    trackStatus.textContent = randomStatus;

    trackLocation.textContent = randomLocation;

    // If Delivered

    if(randomStatus === 'Delivered'){

      trackDate.innerHTML = `
        <span class="delivered-animation">
          ✅ Package Successfully Delivered
        </span>
      `;

      trackStatus.style.color = '#00b894';

      // Confetti Effect

      createConfetti();

    } else {

      trackDate.textContent =
        deliveryDate.toDateString();

      trackStatus.style.color = '#ff9800';

    }

    trackingCard.classList.remove('hidden');

  });

}


// Confetti Animation

function createConfetti(){

  for(let i = 0; i < 80; i++){

    const confetti = document.createElement('div');

    confetti.classList.add('confetti');

    document.body.appendChild(confetti);

    confetti.style.left =
      Math.random() * window.innerWidth + 'px';

    confetti.style.animationDuration =
      (Math.random() * 3 + 2) + 's';

    confetti.style.opacity =
      Math.random();

    confetti.style.transform =
      `rotate(${Math.random() * 360}deg)`;

    setTimeout(() => {
      confetti.remove();
    }, 5000);

  }

}