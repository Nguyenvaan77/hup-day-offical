document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Scroll animation for sections
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
      }
    })
  }, observerOptions)

  // Observe all sections for animation
  document.querySelectorAll("section").forEach((section) => {
    section.classList.add("fade-in")
    observer.observe(section)
  })

  // Partner carousel
  const partnerTrack = document.getElementById("partnerTrack")
  if (partnerTrack) {
    const partnerLogos = partnerTrack.querySelectorAll(".partner-logo")
    const visibleCount = 5
    let partnerIndex = 0

    function slidePartners() {
      const total = partnerLogos.length
      partnerIndex = (partnerIndex + visibleCount) % total
      const offset = (partnerIndex * 100) / visibleCount
      partnerTrack.style.transform = `translateX(-${offset}%)`
    }

    // Auto-slide every 5 seconds
    setInterval(slidePartners, 5000)
  }

  // Mobile menu toggle (basic implementation)
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const nav = document.querySelector(".nav")

  if (mobileMenuBtn && nav) {
    mobileMenuBtn.addEventListener("click", () => {
      nav.style.display = nav.style.display === "flex" ? "none" : "flex"
    })
  }

  // Form submission handling
  const contactForm = document.querySelector(".contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // Basic form validation
      const inputs = this.querySelectorAll("input[required], textarea[required]")
      let isValid = true

      inputs.forEach((input) => {
        if (!input.value.trim()) {
          isValid = false
          input.style.borderColor = "#e53e3e"
        } else {
          input.style.borderColor = "#e5e5e5"
        }
      })

      if (isValid) {
        // Show success message (you can replace this with actual form submission)
        alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.")
        this.reset()
      } else {
        alert("Vui lòng điền đầy đủ thông tin bắt buộc.")
      }
    })
  }

  // Remove this entire section that causes images to disappear:
  /*
  // Add loading animation for images
  const images = document.querySelectorAll("img")
  images.forEach((img) => {
    img.addEventListener("load", function () {
      this.style.opacity = "1"
    })

    // Set initial opacity for smooth loading
    img.style.opacity = "0"
    img.style.transition = "opacity 0.3s ease"
  })
  */
})

// Replace with simpler image handling:
document.addEventListener("DOMContentLoaded", () => {
  // Ensure all images are visible
  const images = document.querySelectorAll("img")
  images.forEach((img) => {
    img.style.opacity = "1"

    // Add error handling for broken images
    img.addEventListener("error", function () {
      this.style.display = "none"
    })
  })
})

// Add smooth hover effects for cards
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".feature-card, .step-card, .team-card, .problem-card, .benefit-card")

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px) scale(1.02)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })
})
