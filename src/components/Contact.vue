<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <div 
        class="contact-card"
        v-motion-slide-visible-once-bottom
      >
        <h2 class="section-title">Parlons de votre <span class="gradient-text">Prochain Projet</span></h2>
        <p>Je suis actuellement à la recherche de nouveaux challenges en tant qu'Ingénieur Système ou Logiciel pour Août 2026.</p>
        
        <div class="contact-methods">
          <a href="mailto:Thib.lh@icloud.com" class="contact-item">
            <MailIcon :size="24" />
            <span>Thib.lh@icloud.com</span>
          </a>
          <a href="tel:+33635407550" class="contact-item">
            <PhoneIcon :size="24" />
            <span>06 35 40 75 50</span>
          </a>
          <a href="https://www.linkedin.com/in/thibault-l-h%C3%A9ritier-005a18246" target="_blank" class="contact-item">
            <LinkedinIcon :size="24" class="linkedin-icon" />
            <span>LinkedIn</span>
          </a>
          <div class="contact-item">
            <MapPinIcon :size="24" />
            <span>Région Toulonnaise</span>
          </div>
          <a href="/CV_Thibault_LHERITIER.pdf" download class="contact-item cv-download-item">
            <FileTextIcon :size="24" />
            <span>Télécharger mon CV</span>
          </a>
        </div>

        <a href="mailto:Thib.lh@icloud.com" class="btn-primary large-btn">
          M'envoyer un message
          <SendIcon :size="20" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon, LinkedinIcon, FileTextIcon } from 'lucide-vue-next'
</script>

<style scoped>
.contact-section {
  padding: 150px 0;
}

.contact-card {
  background: var(--card-bg);
  padding: 5rem;
  border-radius: 50px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.contact-card p {
  font-size: 1.25rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 4rem;
}

.contact-methods {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  margin-bottom: 5rem;
}

.contact-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: var(--text-primary);
}

.contact-item span {
  font-weight: 500;
}

.contact-item .lucide {
  color: var(--accent-color);
}

.linkedin-icon {
  color: #0077b5 !important;
}

.cv-download-item:hover .lucide {
  color: white !important;
}

.cv-download-item:hover {
  transform: translateY(-5px);
  color: var(--accent-color);
}

.large-btn {
  font-size: 1.125rem;
  padding: 1.5rem 3rem;
}

@media (max-width: 768px) {
  .contact-card {
    padding: 3rem 1.5rem;
  }
  
  .contact-methods {
    gap: 2rem;
  }
}
</style>
