gsap.registerPlugin(ScrollTrigger);

window.onload = () => {
    // 1. INTRO TIMELINE
    const introTl = gsap.timeline();
    introTl.to("#hero-tag", { opacity: 1, y: 0, duration: 0.8, delay: 0.5 })
           .to("#hero-title", { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" }, "-=0.4")
           .to("#hero-details", { opacity: 1, x: 0, duration: 1 }, "-=0.8")
           .from("#main-robot", { opacity: 0, scale: 0.2, duration: 2, ease: "elastic.out(1, 0.75)" }, "-=1.5");

    // 2. BACKGROUND PARALLAX
    gsap.to("#banner-bg", {
        yPercent: 20,
        scrollTrigger: { trigger: "body", start: "top top", end: "bottom top", scrub: true }
    });

    // 3. ROBOT MOVEMENT: GUIDING THE USER
    // The robot will shift to the right side of the Second Section
    gsap.to("#main-robot", {
        scrollTrigger: {
            trigger: "#about",
            start: "top bottom",
            end: "top center",
            scrub: 1.5,
        },
        left: "80%",      // Guides user to focus on text on the left
        scale: 0.6,
        rotation: 12,
        opacity: 0.9
    });

    // 4. SECOND SECTION REVEAL (Neural Mesh)
    gsap.to("#mesh-content", {
        scrollTrigger: { trigger: "#about", start: "top 60%" },
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.out"
    });

    gsap.to("#data-panel", {
        scrollTrigger: { trigger: "#about", start: "top 40%" },
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.out"
    });

    // 5. BOOK 3D OPENING ANIMATION
    gsap.from("#cover-image", {
        scrollTrigger: {
            trigger: "#story",
            start: "top 80%",
            end: "top 20%",
            scrub: 1
        },
        rotationY: -60,
        x: -200,
        opacity: 0,
        scale: 0.7
    });

    // 6. STORY TEXT ANIMATION
    gsap.to("#story-reveal", {
        scrollTrigger: { trigger: "#story", start: "top 50%" },
        opacity: 1,
        y: -50,
        duration: 1.5
    });

    // 7. ROBOT FINAL POSITION (Near Footer)
    gsap.to("#main-robot", {
        scrollTrigger: {
            trigger: "#footer",
            start: "top bottom",
            end: "top center",
            scrub: 1,
        },
        left: "50%",
        top: "60%",
        scale: 0.3,
        opacity: 0.5,
        filter: "blur(5px)"
    });

    // 8. Dynamic Navbar State
    window.addEventListener("scroll", () => {
        const nav = document.getElementById("navbar").firstElementChild;
        if (window.scrollY > 100) {
            nav.classList.add("bg-black/80", "border-cyan-500/20");
        } else {
            nav.classList.remove("bg-black/80", "border-cyan-500/20");
        }
    });
};