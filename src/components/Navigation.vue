<template>
  <nav :class="{ 'nav-scrolled': scrolled }">
    <div class="container nav-content">
      <div class="logo">
        <span class="logo-dot"></span>
        Thibault
      </div>
      <div class="nav-links">
        <a href="#experience">Expérience</a>
        <a href="#education">Formation</a>
        <a href="#projets">Projets</a>
        <a href="#entrepreneuriat">Entrepreneuriat</a>
        <a href="https://www.linkedin.com/in/thibault-l-h%C3%A9ritier-005a18246" target="_blank" class="nav-social" title="LinkedIn">
          <LinkedinIcon :size="20" />
        </a>
            <a href="./CV_Thibault_LHERITIER.pdf" download class="btn-cv">
              <FileTextIcon :size="18" />
              CV (PDF)
            </a>
        <a href="#contact" class="nav-cta">Contact</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { LinkedinIcon, FileTextIcon } from 'lucide-vue-next'

const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 0;
  z-index: 1000;
  transition: var(--transition-smooth);
}

.nav-scrolled {
  padding: 1rem 0;
  background: rgba(13, 13, 13, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-dot {
  width: 10px;
  height: 10px;
  background: var(--accent-gradient);
  border-radius: 50%;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-links a {
  font-weight: 500;
  color: var(--text-secondary);
}

.nav-links a:hover {
  color: var(--text-primary);
}

.nav-cta {
  background: rgba(255, 255, 255, 0.05);
  padding: 0.5rem 1.2rem;
  border-radius: 99px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-cta:hover {
  background: white !important;
  color: black !important;
}

.nav-social {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0077b5;
  background: rgba(0, 119, 181, 0.1);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(0, 119, 181, 0.2);
  transition: var(--transition-smooth);
}

.nav-social:hover {
  background: #0077b5 !important;
  color: white !important;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 119, 181, 0.3);
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
}
</style>
