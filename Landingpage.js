// // Function to trigger all animations
// function animateLandingPage() {
//   // For screens less than 768px (mobile devices)
//   if (window.innerWidth < 768) {
//     // Landingpage left side h1 titles for mobile
//     gsap.from(".elitegear", {
//       y: "-50vh",  // Smaller movement for mobile
//       opacity: 0,
//       duration: 1.2,
//       ease: "power2.out"
//     });
//     gsap.from(".eliteathletes", {
//       x: "-50%",  // Start from left
//       opacity: 0,
//       duration: 1.5,
//       ease: "power2.out"
//     });

//     // SplitType plugin typing effect for paragraph
//     const split = new SplitType(".landingpagepara", { types: 'chars' });
//     gsap.from(split.chars, {
//       opacity: 0,
//       y: 10,
//       stagger: 0.04,
//       duration: 0.2,
//       ease: "power2.out"
//     });

    // Image animation from right for mobile
    gsap.from(".leftsideimg", {
      x: "100%",  // Start off the right side
      opacity: 0,
      scale: 0.9, // Slight zoom-in effect
      rotate: 5,  // Slight angle for realism
      duration: 1.5,
      ease: "power3.out",
      delay: 0.3  // Small delay for dramatic effect
    });

  } else {  // For screens 768px or larger (desktop devices)
    // Landingpage left side h1 titles for desktop
    gsap.from(".elitegear", {
      y: "-100vh",  // Larger movement for desktop
      opacity: 0,
      duration: 1.5,
      ease: "power2.out"
    });
    gsap.from(".eliteathletes", {
      x: "-100%",  // Start from left
      opacity: 0,
      duration: 2,
      ease: "power2.out"
    });

    // SplitType plugin typing effect for paragraph
    const split = new SplitType(".landingpagepara", { types: 'chars' });
    gsap.from(split.chars, {
      opacity: 0,
      y: 10,
      stagger: 0.04,
      duration: 0.2,
      ease: "power2.out"
    });

    // Image animation from right for desktop
    gsap.from(".leftsideimg", {
      x: "100%",  // Start off the right side
      opacity: 0,
      scale: 0.9, // Slight zoom-in effect
      rotate: 5,  // Slight angle for realism
      duration: 1.8,
      ease: "power3.out",
      delay: 0.3  // Small delay for dramatic effect
    });
  }

  // Select all images inside .products-card and redirect to the product-detail-page
  document.querySelectorAll('.products-card img').forEach(function (img) {
    img.style.cursor = 'pointer';  // Change cursor to pointer on hover
    img.addEventListener('click', function () {
      window.location.href = 'product-details.html';  // Redirect to product details
    });
  });
}

// Trigger the animation on page load
window.addEventListener('load', animateLandingPage);

// Optional: Re-trigger animations on window resize (in case user changes window size)
window.addEventListener('resize', animateLandingPage);
