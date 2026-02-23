<template>
  <section id="entrepreneuriat" class="entrepreneurship-section">
    <div class="section-overlay"></div>
    <div class="container">
      <h2 class="section-title" v-motion-slide-visible-once-left>
        <span class="gradient-text">Entrepreneuriat</span>
      </h2>

      <div class="comimmo-pitch" v-motion-slide-visible-once-right>
        <p class="project-intro">Pendant mon temps personnel, j'ai développé une application qui sert à faciliter la vie professionnelle des agents immobiliers. Cette application est disponible sur iOS et Android.</p>
        <p class="pitch-intro">Vous êtes agent immobilier, mandataire ou conseiller indépendant ?</p>
        <p class="pitch-main">Fini la paperasse, les calculs compliqués et les pertes de temps : <strong>ComImmo s'occupe de tout.</strong></p>
        <p class="pitch-details">Une seule application pour gérer vos ventes, calculer vos commissions, créer vos factures et organiser vos rendez-vous. Tout est centralisé, automatisé et pensé pour vous faire gagner du temps au quotidien.</p>
      </div>

      <div class="comimmo-card glass-card" v-motion-slide-visible-once-bottom>
        <div class="card-header">
          <div class="brand">
            <span class="badge">Projet Personnel</span>
            <h3>ComImmo</h3>
            <p class="slogan">"Votre cockpit immobilier"</p>
          </div>
          <div class="qr-placeholder">
            <div class="qr-box">
              <img src="/src/assets/comimmo-qr.jpg" alt="QR Code ComImmo" class="qr-img" />
            </div>
            <span>Scannez-moi</span>
          </div>
        </div>

        <div class="card-grid">
          <div class="interface-col agent">
            <h4>Côté Agent commercial :</h4>
            <ul>
              <li><strong>Gestion des Ventes :</strong> Suivi du cycle complet.</li>
              <li><strong>Calcul Auto :</strong> Commissions nettes et historique.</li>
              <li><strong>Productivité :</strong> Facturation intégrée & rappels.</li>
            </ul>
          </div>

          <div class="interface-col boss">
            <h4>Côté Patron d'agence :</h4>
            <ul>
              <li><strong>Management :</strong> Fiches perfs & suivi équipe.</li>
              <li><strong>Pilotage Global :</strong> Dashboard CA & objectifs.</li>
              <li><strong>Reporting :</strong> Exports PDF/Excel pro.</li>
            </ul>
          </div>
        </div>

        <div class="value-proposition">
          <div class="value-item" v-for="val in values" :key="val.title">
            <component :is="val.icon" :size="20" class="accent-icon" />
            <div>
              <strong>{{ val.title }} :</strong>
              <span>{{ val.desc }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { 
  QrCodeIcon, 
  ZapIcon, 
  ShieldCheckIcon, 
  ClockIcon, 
  TrendingUpIcon 
} from 'lucide-vue-next'

const values = [
  { title: 'Productivité', desc: 'Libère l’agent des tâches administratives.', icon: ZapIcon },
  { title: 'Transparence', desc: 'Vision claire des revenus pour les agents.', icon: ShieldCheckIcon },
  { title: 'Gain de temps', desc: 'Automatisation des rapports et de la facturation.', icon: ClockIcon },
  { title: 'Modernisation', desc: 'Interface "Mobile First" sécurisée.', icon: TrendingUpIcon }
]
</script>

<style scoped>
.entrepreneurship-section {
  padding: 100px 0;
  background: var(--bg-color);
  position: relative;
}

.comimmo-pitch {
  margin: 2rem 0 3.5rem;
  max-width: 800px;
}

.project-intro {
  font-size: 1.2rem;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.pitch-intro {
  color: var(--accent-color);
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.pitch-main {
  font-size: 1.5rem;
  color: var(--text-primary);
  line-height: 1.4;
  margin-bottom: 1rem;
}

.pitch-details {
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 1.05rem;
}

.comimmo-card {
  padding: 3rem;
  margin-top: 3rem;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 3rem;
}

.brand h3 {
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0.5rem 0;
}

.slogan {
  font-size: 1.25rem;
  color: var(--accent-color);
  font-weight: 600;
}

.qr-placeholder {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.qr-box {
  background: white;
  padding: 12px;
  border-radius: 16px;
  color: black;
  width: 180px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.qr-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.card-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.interface-col h4 {
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.interface-col ul {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.interface-col li {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.5;
}

.interface-col strong {
  color: var(--text-primary);
}

.value-proposition {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  padding-top: 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.value-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.accent-icon {
  color: var(--accent-color);
  flex-shrink: 0;
}

.value-item strong {
  display: block;
  font-size: 0.9rem;
  color: var(--text-primary);
}

.value-item span {
  font-size: 0.85rem;
  color: var(--text-secondary);
}

@media (max-width: 768px) {
  .card-grid {
    grid-template-columns: 1fr;
  }
}
</style>
