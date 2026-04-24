<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <span class="logo-dot"></span>
          Thibault
        </div>
        <p class="copyright">{{ $t('footer.rights') }}</p>
        <div class="social-links">
          <a href="https://www.linkedin.com/in/thibault-l-h%C3%A9ritier-005a18246" target="_blank" title="LinkedIn">
            <LinkedinIcon :size="20" />
          </a>
          <a href="mailto:thib.lh@icloud.com" title="Email">
            <MailIcon :size="20" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  padding: 3rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.footer-links {
  display: flex;
  gap: 2rem;
}

.footer-links a:hover {
  color: var(--text-primary);
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
}
</style>
