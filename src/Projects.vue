<template>
  <section id="projets" class="projects-section">
    <img src="/src/assets/marine-bg.png" class="technical-bg" alt="Marine radar background" />
    <div class="section-overlay"></div>
    <div class="container">
      <h2 
        class="section-title"
        v-motion-slide-visible-once-left
      >
        Projets <span class="gradient-text">Sélectionnés</span>
      </h2>

      <div class="projects-grid">
        <div 
          v-for="(project, index) in projects" 
          :key="index"
          class="project-card"
          v-motion-slide-visible-once-bottom
        >
          <div class="card-image">
            <div class="placeholder-img" :style="{ background: project.color }">
              <component :is="project.icon" :size="48" />
            </div>
          </div>
          <div class="card-content">
            <span class="project-tag">{{ project.tag }}</span>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="project-highlights">
              <ul>
                <li v-for="highlight in project.highlights" :key="highlight">{{ highlight }}</li>
              </ul>
            </div>
            <div class="project-tech">
              <span v-for="tag in project.tech" :key="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CodeIcon, LayersIcon, ZapIcon } from 'lucide-vue-next'

const projects = [
  {
    title: 'Aéronautique',
    tag: 'Simulateur IFF / Hawkeye',
    icon: ZapIcon,
    description: 'Simulation du système IFF sur banc d\'intégration pour leurrage tactique du calculateur réel.',
    highlights: [
      'Simulateur fonctionnant à l’identique de l’équipement de vol',
      'Maîtrise des protocoles d’échanges avioniques (normes IFF)',
      'Développement C++ et intégration système complexe'
    ],
    tech: ['C++', 'Protocoles Avioniques', 'Intégration'],
    color: 'linear-gradient(45deg, #1e3a8a, #3b82f6)'
  },
  {
    title: 'Aéronef de la Marine',
    tag: 'Simulateur IFPM / Hawkeye',
    icon: CodeIcon,
    description: 'Développement d\'une architecture hybride capable de simuler les pannes des sous-systèmes critiques.',
    highlights: [
      'Architecture Logiciel (PC) + Carte électronique (FPGA)',
      'Interfaçage via bus propriétaire militaire complexe',
      'Décryptage du fonctionnement par rétro-ingénierie'
    ],
    tech: ['VHDL', 'FPGA', 'C++', 'Temps Réel'],
    color: 'linear-gradient(45deg, #7c2d12, #ea580c)'
  }
]
</script>

<style scoped>
.projects-section {
  padding: 100px 0;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-top: 4rem;
}

.project-card {
  background: var(--card-bg);
  border-radius: 30px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: var(--transition-smooth);
}

.project-card:hover {
  transform: translateY(-10px);
  border-color: rgba(255, 138, 101, 0.3);
  box-shadow: 0 30px 60px rgba(0,0,0,0.4);
}

.card-image {
  height: 200px;
}

.placeholder-img {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.5);
}

.card-content {
  padding: 2rem;
}

.project-tag {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--accent-color);
  letter-spacing: 0.1em;
  margin-bottom: 0.75rem;
  display: block;
}

.card-content h3 {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
}

.card-content p {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  font-size: 0.938rem;
  line-height: 1.5;
}

.project-highlights {
  margin-bottom: 2rem;
}

.project-highlights ul {
  list-style: none;
}

.project-highlights li {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  padding-left: 1.25rem;
  position: relative;
}

.project-highlights li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--accent-color);
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.project-tech span {
  background: rgba(255, 255, 255, 0.05);
  padding: 0.3rem 0.8rem;
  border-radius: 99px;
  font-size: 0.75rem;
  font-weight: 500;
}

@media (max-width: 480px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
