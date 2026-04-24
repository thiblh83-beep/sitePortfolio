<template>
  <section id="projets" class="projects-section">
    <img src="/src/assets/marine-bg.png" class="technical-bg" alt="Marine radar background" />
    <div class="section-overlay"></div>
    <div class="container">
      <h2 
        class="section-title"
        v-motion-slide-visible-once-left
        v-html="$t('projects.title')"
      >
      </h2>

      <div class="projects-grid">
        <div 
          v-for="(project, index) in translatedProjects" 
          :key="index"
          class="project-card-container"
          v-motion-slide-visible-once-bottom
          @click="project.flipped = !project.flipped"
        >
          <div class="project-card-inner" :class="{ 'is-flipped': project.flipped }">
            <!-- Front Face -->
            <div class="project-card-front">
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
                <div class="flip-hint">
                  <InfoIcon :size="14" /> {{ $t('projects.hint') }}
                </div>
              </div>
            </div>

            <!-- Back Face -->
            <div class="project-card-back" :style="{ borderTopColor: project.color }">
              <div class="back-content">
                <div class="back-header">
                  <component :is="project.icon" :size="32" :style="{ color: project.color }" />
                  <h3>{{ $t('projects.details_btn') }}</h3>
                </div>
                <div class="full-description">
                  <p>{{ project.fullDescription }}</p>
                </div>
                <div class="back-footer">
                  <span class="click-return">{{ $t('projects.back_btn') }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { CodeIcon, ZapIcon, InfoIcon } from 'lucide-vue-next'

const { t } = useI18n()

// Keep reactive state for flipping
const states = reactive({
  iffFlipped: false,
  ifpmFlipped: false
})

const translatedProjects = computed(() => [
  {
    title: t('hero.title_thibault') === 'Thibault' ? 'Aéronef de la Marine' : 'Navy Aircraft', // Small manual override for consistency if not in locale
    tag: t('projects.iff.tag'),
    icon: ZapIcon,
    description: t('projects.iff.desc'),
    highlights: [
      t('projects.iff.h1'),
      t('projects.iff.h2'),
      t('projects.iff.h3')
    ],
    fullDescription: t('projects.iff.details'),
    tech: ['C++', 'Protocoles Avioniques', 'Intégration', 'Temps Réel'],
    color: '#3b82f6',
    flipped: states.iffFlipped
  },
  {
    title: t('hero.title_thibault') === 'Thibault' ? 'Aéronef de la Marine' : 'Navy Aircraft',
    tag: t('projects.ifpm.tag'),
    icon: CodeIcon,
    description: t('projects.ifpm.desc'),
    highlights: [
      t('projects.ifpm.h1'),
      t('projects.ifpm.h2'),
      t('projects.ifpm.h3')
    ],
    fullDescription: t('projects.ifpm.details'),
    tech: ['VHDL', 'FPGA', 'C++', 'Temps Réel', 'Rétro-ingénierie'],
    color: '#ea580c',
    flipped: states.ifpmFlipped
  }
])
</script>

<style scoped>
.projects-section {
  padding: 100px 0;
  perspective: 1500px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 3rem;
  margin-top: 4rem;
}

.project-card-container {
  height: 520px;
  cursor: pointer;
}

.project-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: left;
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
}

.is-flipped {
  transform: rotateY(180deg);
}

.project-card-front, .project-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 30px;
  background: var(--card-bg);
  border: 1px solid rgba(255, 255, 255, 0.05);
  overflow: hidden;
}

.project-card-back {
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background: linear-gradient(135deg, rgba(15, 25, 45, 0.95), rgba(5, 10, 21, 0.98));
  border-top: 4px solid;
}

.card-image {
  height: 180px;
}

.placeholder-img {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  opacity: 0.9;
}

.card-content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  height: calc(100% - 180px);
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
  margin-bottom: 0.5rem;
}

.card-content p {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  line-height: 1.4;
}

.project-highlights {
  margin-bottom: auto;
}

.project-highlights li {
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-bottom: 0.4rem;
  padding-left: 1rem;
  position: relative;
}

.project-highlights li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--accent-color);
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.project-tech span {
  background: rgba(255, 255, 255, 0.05);
  padding: 0.2rem 0.6rem;
  border-radius: 99px;
  font-size: 0.7rem;
}

.flip-hint {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: var(--text-secondary);
  opacity: 0.6;
  margin-top: 0.5rem;
}

/* Back side specific */
.back-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.back-header h3 {
  font-size: 1.25rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.full-description p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.back-footer {
  margin-top: auto;
  text-align: center;
}

.click-return {
  font-size: 0.8rem;
  color: var(--accent-color);
  opacity: 0.8;
  font-weight: 600;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  .project-card-container {
    height: 580px;
  }
}
</style>
