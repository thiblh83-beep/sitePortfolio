<template>
  <section id="entrepreneuriat" class="entrepreneurship-section">
    <div class="section-overlay"></div>
    <div class="container">
      <h2 class="section-title" v-motion-slide-visible-once-left>
        <span class="gradient-text">{{ $t('entrepreneurship.title') }}</span>
      </h2>

      <div class="comimmo-intro" v-motion-slide-visible-once-right>
        <div class="pitch-header">
          <div class="brand-badge">{{ $t('entrepreneurship.pitch_badge') }}</div>
          <h3 class="comimmo-title">{{ $t('entrepreneurship.pitch_title') }}</h3>
          <p class="project-intro">
            {{ $t('entrepreneurship.pitch_desc') }}
          </p>
        </div>

        <div class="pillars-grid">
          <div v-for="pillar in translatedPillars" :key="pillar.title" class="pillar-card glass-card">
            <component :is="pillar.icon" :size="32" class="pillar-icon" />
            <h4>{{ pillar.title }}</h4>
            <p>{{ pillar.desc }}</p>
          </div>
        </div>
      </div>

      <div class="solutions-grid">
        <!-- Agent Section -->
        <div class="solution-card glass-card agent-tier" v-motion-slide-visible-once-bottom>
          <div class="tier-header">
            <div class="profile-icon">
              <UserIcon :size="24" />
            </div>
            <div class="tier-info">
              <h4>{{ $t('entrepreneurship.agent.title') }}</h4>
            </div>
          </div>
          
          <div class="features-list">
            <div class="feature-group">
              <h5>{{ $t('entrepreneurship.agent.f1_title') }}</h5>
              <ul>
                <li v-html="$t('entrepreneurship.agent.f1_l1')"></li>
                <li v-html="$t('entrepreneurship.agent.f1_l2')"></li>
                <li v-html="$t('entrepreneurship.agent.f1_l3')"></li>
              </ul>
            </div>
            <div class="feature-group">
              <h5>{{ $t('entrepreneurship.agent.f2_title') }}</h5>
              <ul>
                <li v-html="$t('entrepreneurship.agent.f2_l1')"></li>
                <li v-html="$t('entrepreneurship.agent.f2_l2')"></li>
              </ul>
            </div>
            <div class="feature-group">
              <h5>{{ $t('entrepreneurship.agent.f3_title') }}</h5>
              <ul>
                <li v-html="$t('entrepreneurship.agent.f3_l1')"></li>
                <li v-html="$t('entrepreneurship.agent.f3_l2')"></li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Agency Section -->
        <div class="solution-card glass-card agency-tier" v-motion-slide-visible-once-bottom>
          <div class="tier-header">
            <div class="profile-icon">
              <BuildingIcon :size="24" />
            </div>
            <div class="tier-info">
              <h4>{{ $t('entrepreneurship.agency.title') }}</h4>
            </div>
          </div>
          
          <div class="features-list">
            <div class="feature-group">
              <h5>{{ $t('entrepreneurship.agency.f1_title') }}</h5>
              <ul>
                <li v-html="$t('entrepreneurship.agency.f1_l1')"></li>
                <li v-html="$t('entrepreneurship.agency.f1_l2')"></li>
                <li v-html="$t('entrepreneurship.agency.f1_l3')"></li>
              </ul>
            </div>
            <div class="feature-group">
              <h5>{{ $t('entrepreneurship.agency.f2_title') }}</h5>
              <ul>
                <li v-html="$t('entrepreneurship.agency.f2_l1')"></li>
                <li v-html="$t('entrepreneurship.agency.f2_l2')"></li>
              </ul>
            </div>
            <div class="feature-group">
              <h5>{{ $t('entrepreneurship.agency.f3_title') }}</h5>
              <ul>
                <li v-html="$t('entrepreneurship.agency.f3_l1')"></li>
                <li v-html="$t('entrepreneurship.agency.f3_l2')"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- QR Section -->
      <div class="qr-cta glass-card" v-motion-slide-visible-once-bottom>
        <div class="qr-content">
          <h4>{{ $t('entrepreneurship.qr_title') }}</h4>
          <p>{{ $t('entrepreneurship.qr_desc') }}</p>
        </div>
        <div class="qr-box">
          <img src="/src/assets/comimmo-qr.png" alt="QR Code ComImmo" class="qr-img" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { 
  ZapIcon, 
  ShieldCheckIcon, 
  ClockIcon, 
  TrendingUpIcon,
  UserIcon,
  BuildingIcon
} from 'lucide-vue-next'

const { t } = useI18n()

const translatedPillars = computed(() => [
  { title: t('entrepreneurship.pillars.p1.title'), desc: t('entrepreneurship.pillars.p1.desc'), icon: ZapIcon },
  { title: t('entrepreneurship.pillars.p2.title'), desc: t('entrepreneurship.pillars.p2.desc'), icon: ShieldCheckIcon },
  { title: t('entrepreneurship.pillars.p3.title'), desc: t('entrepreneurship.pillars.p3.desc'), icon: ClockIcon },
  { title: t('entrepreneurship.pillars.p4.title'), desc: t('entrepreneurship.pillars.p4.desc'), icon: TrendingUpIcon }
])
</script>

<style scoped>
.entrepreneurship-section {
  padding: 100px 0;
  background: var(--bg-color);
  position: relative;
}

.comimmo-intro {
  margin-bottom: 4rem;
}

.brand-badge {
  display: inline-block;
  padding: 0.4rem 1rem;
  background: rgba(56, 189, 248, 0.1);
  color: var(--accent-color);
  border-radius: 99px;
  font-size: 0.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
  border: 1px solid rgba(56, 189, 248, 0.2);
}

.comimmo-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
}

.project-intro {
  font-size: 1.15rem;
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 900px;
}

.pillars-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
}

.pillar-card {
  padding: 2rem;
  text-align: center;
  transition: var(--transition-smooth);
}

.pillar-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent-color);
}

.pillar-icon {
  color: var(--accent-color);
  margin-bottom: 1rem;
}

.pillar-card h4 {
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.pillar-card p {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

.solutions-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 4rem;
}

.solution-card {
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.tier-header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.profile-icon {
  width: 48px;
  height: 48px;
  background: rgba(56, 189, 248, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-color);
}

.tier-info h4 {
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  color: var(--text-secondary);
}

.price {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-primary);
  display: block;
}

.tier-quote {
  font-style: italic;
  font-size: 0.95rem;
  color: var(--accent-color);
  opacity: 0.9;
  padding-left: 1rem;
  border-left: 2px solid var(--accent-color);
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.feature-group h5 {
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}

.feature-group ul {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.feature-group li {
  font-size: 0.95rem;
  color: var(--text-secondary);
  list-style: none;
  padding-left: 1.25rem;
  position: relative;
}

.feature-group li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--accent-color);
}


.qr-cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 4rem;
  border-radius: 40px;
}

.qr-content h4 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.qr-content p {
  color: var(--text-secondary);
}

.qr-box {
  background: white;
  padding: 10px;
  border-radius: 12px;
  width: 120px;
  height: 120px;
}

.qr-img {
  width: 100%;
  height: 100%;
}

@media (max-width: 992px) {
  .solutions-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .qr-cta {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    padding: 2rem;
  }
}
</style>
