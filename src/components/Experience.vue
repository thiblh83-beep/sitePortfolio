<template>
  <section id="experience" class="experience-section">
    <img src="/src/assets/robotics-bg.png" class="technical-bg" alt="Robotics background" />
    <div class="section-overlay"></div>
    <div class="container">
      <h2 
        class="section-title"
        v-motion
        :initial="{ opacity: 0, x: -50 }"
        :enter="{ opacity: 1, x: 0 }"
      >
        Mon <span class="gradient-text">Parcours</span>
      </h2>

      <div class="timeline">
        <div 
          v-for="(exp, index) in experiences" 
          :key="index"
          class="timeline-item"
          v-motion-slide-visible-once-bottom
        >
          <div class="timeline-date">{{ exp.date }}</div>
          <div class="timeline-content">
            <div class="experience-header">
              <div class="company-logo" v-if="exp.logo">
                <img :src="exp.logo" :alt="exp.company" />
              </div>
              <div class="experience-info">
                <h3>{{ exp.title }}</h3>
                <span class="company">{{ exp.company }}</span>
              </div>
            </div>
            <p>{{ exp.description }}</p>
            <ul class="missions">
              <li v-for="mission in exp.missions" :key="mission">{{ mission }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const experiences = [
  {
    date: '2023 - Juin 2026',
    title: 'Apprenti Ingénieur - Pôle Conception',
    company: "Atelier Industriel de l'Aéronautique de Cuers-Pierrefeu",
    logo: '/src/assets/aia-logo.png',
    description: "Alternance au sein du pôle conception systèmes embarqués.",
    missions: [
      "Conception et développement de deux simulateurs de sous-systèmes pour un avion de surveillance maritime (Hawkeye)",
      "Modélisation et implémentation des fonctionnalités en langage C++",
      "Participation aux phases de conception, de test et de validation"
    ]
  },
  {
    date: 'Avril 2025 - Juillet 2025',
    title: 'Mobilité à l\'International',
    company: 'PCI Pharma Services - Dundalk, Ireland',
    logo: '/src/assets/pci-logo.png',
    description: "Expérience internationale en ingénierie et support informatique.",
    missions: [
      "Participation aux activités d'ingénierie et de support informatique",
      "Support aux installations et aux systèmes informatiques industriels",
      "Développement d'un programme de gestion et de traitement de données en C++"
    ]
  },
  {
    date: '2021 - 2023',
    title: 'Technicien Réseaux (Alternance)',
    company: 'Orange - Toulon',
    logo: '/src/assets/orange-logo.png',
    description: "Maintenance et optimisation des réseaux de télécommunication.",
    missions: [
      "Pilotage et gestion des incidents sur les réseaux cuivre et fibre",
      "Analyse et suivi des dysfonctionnements réseau",
      "Développement d'un outil d'optimisation de l'accès aux données (langages web)"
    ]
  }
]
</script>

<style scoped>
.experience-section {
  padding: 100px 0;
  background: #0a0a0a;
}

.timeline {
  margin-top: 4rem;
  position: relative;
  max-width: 800px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 1px;
  background: rgba(255, 255, 255, 0.1);
}

.timeline-item {
  position: relative;
  padding-left: 3rem;
  margin-bottom: 4rem;
}

.timeline-item::after {
  content: '';
  position: absolute;
  left: -5px;
  top: 0;
  width: 11px;
  height: 11px;
  background: var(--accent-gradient);
  border-radius: 50%;
}

.timeline-date {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--accent-color);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.experience-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
}

.company-logo {
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  background: white;
  border-radius: 12px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.company-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.timeline-content h3 {
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
}

.company {
  display: block;
  font-weight: 600;
  color: var(--text-secondary);
}

.missions {
  margin-top: 1rem;
  color: var(--text-secondary);
}

.missions li {
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.5rem;
}

.missions li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--accent-color);
}
</style>
