<template>
  <section class="hero-section">
    <img :src="heroBg" class="technical-bg" alt="Aeronautics background" />
    <div class="section-overlay"></div>
    <div class="container hero-content">
      <div 
        class="hero-text"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0 }"
      >
        <span class="badge">Disponible en Août 2026</span>
        <h1 class="section-title">
          Thibault <br />
          <span class="gradient-text">L'HERITIER</span>
        </h1>
        <p class="hero-subtitle">
          Ingénieur Systèmes Embarqués & Communicants. <br />
          Passionné par la défense, l'aéronautique et la robotique. <br />
          <span class="highlight-text">À la recherche de nouveaux défis techniques en tant qu'ingénieur système embarqué</span>
        </p>
        <div class="hero-actions">
          <a href="#projets" class="btn-primary">
            Voir mes travaux
            <ArrowRightIcon :size="20" />
          </a>
          <a href="https://www.linkedin.com/in/thibault-l-h%C3%A9ritier-005a18246" target="_blank" class="btn-linkedin">
            <LinkedinIcon :size="20" />
            LinkedIn
          </a>
          <a :href="cvUrl" download class="btn-cv">
            <FileTextIcon :size="20" />
            Mon CV (PDF)
          </a>
          <a href="mailto:Thib.lh@icloud.com" class="btn-secondary">Me contacter</a>
        </div>
      </div>
      
      <div 
        class="hero-image-container"
        v-motion
        :initial="{ opacity: 0, scale: 0.9 }"
        :enter="{ opacity: 1, scale: 1, transition: { delay: 200 } }"
      >
        <div class="image-wrapper">
          <img 
            v-if="photoExists" 
            :src="profilePhotoUrl" 
            alt="Thibault L'HERITIER" 
            class="profile-img" 
            @error="photoExists = false"
          />
          <div v-else class="placeholder-profile">
            <UserIcon :size="120" />
          </div>
          <div class="image-gradient"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { ArrowRightIcon, UserIcon, LinkedinIcon, FileTextIcon } from 'lucide-vue-next'
import heroBg from '../assets/hero-bg.png'
import profileImg from '../assets/profile.jpg'

const photoExists = ref(true)
const profilePhotoUrl = profileImg
const cvUrl = './CV_Thibault_LHERITIER.pdf'
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 100px;
  position: relative;
  overflow: hidden;
}

.hero-content {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  align-items: center;
  gap: 4rem;
}

.badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(255, 138, 101, 0.1);
  color: var(--accent-color);
  border-radius: 99px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 2rem;
  border: 1px solid rgba(255, 138, 101, 0.2);
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 3rem;
  max-width: 600px;
}

.highlight-text {
  display: block;
  margin-top: 1rem;
  color: var(--accent-color);
  font-weight: 600;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.btn-secondary {
  font-weight: 600;
  border-bottom: 2px solid transparent;
  transition: var(--transition-smooth);
}

.btn-secondary:hover {
  border-color: var(--accent-color);
  color: var(--accent-color);
}

.btn-cv {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-primary);
  padding: 0.8rem 1.5rem;
  border-radius: 99px;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: var(--transition-smooth);
}

.btn-cv:hover {
  background: white;
  color: black;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(255, 255, 255, 0.1);
}

.btn-linkedin {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(0, 119, 181, 0.1);
  color: #0077b5;
  padding: 0.8rem 1.5rem;
  border-radius: 99px;
  font-weight: 600;
  border: 1px solid rgba(0, 119, 181, 0.2);
  transition: var(--transition-smooth);
}

.btn-linkedin:hover {
  background: #0077b5;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 119, 181, 0.3);
}

.hero-image-container {
  position: relative;
}

.image-wrapper {
  position: relative;
  border-radius: 40px;
  overflow: hidden;
  aspect-ratio: 4/5;
  box-shadow: 0 40px 80px rgba(0,0,0,0.5);
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
  transition: var(--transition-smooth);
}

.image-wrapper:hover .profile-img {
  filter: grayscale(0%);
  transform: scale(1.05);
}

.placeholder-profile {
  width: 100%;
  height: 100%;
  background: var(--card-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.1);
}

.image-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, var(--bg-color), transparent);
}

@media (max-width: 992px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero-subtitle {
    margin-inline: auto;
  }
  
  .hero-actions {
    justify-content: center;
  }
  
  .hero-image-container {
    max-width: 400px;
    margin: 0 auto;
  }
}
</style>
