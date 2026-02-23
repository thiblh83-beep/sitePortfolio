<template>
  <section id="skills" class="skills-matrix-section">
    <div class="container">
      <h2 
        class="section-title"
        v-motion-slide-visible-once-bottom
      >
        Matrice de <span class="gradient-text">Compétences</span>
      </h2>

      <div class="matrix-grid">
        <!-- Savoirs (Outils) -->
        <div class="matrix-column" v-motion-slide-visible-once-bottom>
          <div class="column-header">
            <h3>Mes savoirs (outils)</h3>
          </div>
          <div class="column-body">
            <div class="skill-group">
              <h4>Architecture Systèmes & SoC</h4>
              <p>Compréhension des structures hétérogènes (ARM/FPGA) et des interactions PS/PL sur Xilinx Zynq.</p>
            </div>
            <div class="skill-group">
              <h4>Protocoles & Bus Avioniques</h4>
              <p>Maîtrise des couches physiques et protocolaires : Série, Synchrone, Full-Duplex.</p>
            </div>
            <div class="skill-group">
              <h4>Ingénierie de Simulation</h4>
              <p>Principes de centralisation des états (IFPM) et simulation Hardware-in-the-Loop.</p>
            </div>
          </div>
        </div>

        <!-- Savoirs-faire (Actions) -->
        <div class="matrix-column accent" v-motion-slide-visible-once-bottom>
          <div class="column-header">
            <h3>Mes savoir-faire (actions)</h3>
          </div>
          <div class="column-body">
            <div class="skill-group">
              <h4>Conception & Développement</h4>
              <p>Programmation en <strong>VHDL (FPGA)</strong> et <strong>C/C++ (Logiciel/IHM)</strong> avec gestion des contraintes temps réel dur.</p>
            </div>
            <div class="skill-group">
              <h4>Rétro-ingénierie & Audit</h4>
              <p>Analyse de systèmes non documentés à l'oscilloscope pour décoder des protocoles et assurer le leurrage numérique.</p>
            </div>
            <div class="skill-group">
              <h4>Pilotage & Management</h4>
              <p>Gestion de projet industriel (10 mois) en autonomie et tutorat fonctionnel.</p>
            </div>
          </div>
        </div>

        <!-- Savoirs-être (Personnalité) -->
        <div class="matrix-column" v-motion-slide-visible-once-bottom>
          <div class="column-header">
            <h3>Mes savoir-être (personnalité)</h3>
          </div>
          <div class="column-body">
            <div class="skill-group">
              <h4>Rigueur & Précision</h4>
              <p>Capacité d'analyse méthodique pour respecter les exigences temporelles critiques (&lt; 2,5 µs).</p>
            </div>
            <div class="skill-group">
              <h4>Esprit d'analyse</h4>
              <p>Curiosité technique et ténacité face aux verrous technologiques complexes.</p>
            </div>
            <div class="skill-group">
              <h4>Adaptabilité & Pédagogie</h4>
              <p>Capacité à vulgariser des concepts techniques pour collaborer avec divers corps de métier.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-matrix-section {
  padding: 100px 0;
}

.matrix-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;
}

.matrix-column {
  background: var(--card-bg);
  border-radius: 30px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
}

.matrix-column.accent {
  border-color: rgba(255, 138, 101, 0.3);
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}

.column-header {
  padding: 2rem;
  background: rgba(255, 255, 255, 0.02);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  text-align: center;
}

.column-header h3 {
  font-size: 1.25rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.matrix-column.accent .column-header h3 {
  color: var(--accent-color);
}

.column-body {
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  flex: 1;
}

.skill-group h4 {
  font-size: 1.125rem;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}

.skill-group p {
  font-size: 0.938rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

strong {
  color: var(--text-primary);
}

@media (max-width: 992px) {
  .matrix-grid {
    grid-template-columns: 1fr;
  }
}
</style>
