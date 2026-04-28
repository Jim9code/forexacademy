<script>
    import Card from '$lib/components/Card.svelte';
    import { reveal } from '$lib/actions/reveal.js';
</script>

<div class="page-container">
    <div class="header" use:reveal>
        <h1>About <span class="text-gradient-gold">IBREX</span> Academy</h1>
        <p>Built by traders, for traders.</p>
    </div>

    <div class="about-grid">
        <div class="about-content">
            <div use:reveal={{ delay: 100 }}>
                <h2 class="text-gradient-gold">Our Philosophy</h2>
                <p>At IBREX, we believe that consistent profitability in the forex market is achievable through structured education, disciplined risk management, and the right psychological approach.</p>
                <p>We cut through the noise of 'get rich quick' schemes and focus on teaching genuine market mechanics, price action, and institutional concepts that work in real market conditions.</p>
            </div>
            
            <div class="stats-row" use:reveal={{ delay: 200 }}>
                <div class="stat">
                    <span class="stat-number">10k+</span>
                    <span class="stat-label">Active Students</span>
                </div>
                <div class="stat">
                    <span class="stat-number">50+</span>
                    <span class="stat-label">Hours of Content</span>
                </div>
                <div class="stat">
                    <span class="stat-number">24/7</span>
                    <span class="stat-label">Community Support</span>
                </div>
            </div>

            <div use:reveal={{ delay: 300 }}>
                <h2 class="mt-4">Meet the Instructor</h2>
                <Card padding="2rem" hoverEffect={false}>
                    <div class="instructor-profile">
                        <div class="instructor-image"></div>
                        <div class="instructor-details">
                            <h3>Michael J.</h3>
                            <span class="role text-gradient-gold">Lead Trader & Founder</span>
                            <p>Michael has over 8 years of experience trading the foreign exchange and futures markets. Starting as a retail trader, he eventually transitioned to managing institutional capital.</p>
                            <p>His trading style focuses heavily on Smart Money Concepts (SMC) and pure price action, eliminating the need for lagging indicators.</p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
        
        <div class="timeline-column" use:reveal={{ delay: 400 }}>
            <h2>The Journey</h2>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <h3>2018</h3>
                        <p>IBREX Trading Group founded as a small community of dedicated traders.</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <h3>2020</h3>
                        <p>Launched our first comprehensive Price Action course.</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <h3>2022</h3>
                        <p>Expanded curriculum to include Advanced Smart Money Concepts.</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <h3>2026</h3>
                        <p>Launch of the new IBREX interactive learning platform.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .page-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: calc(var(--nav-height) + 4rem) 2rem 4rem;
        min-height: 100vh;
    }

    .header {
        text-align: center;
        margin-bottom: 5rem;
    }

    .header h1 {
        font-size: 3.5rem;
        margin-bottom: 1rem;
    }

    .header p {
        color: var(--text-muted);
        font-size: 1.2rem;
    }

    .about-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 4rem;
    }

    @media (min-width: 900px) {
        .about-grid {
            grid-template-columns: 1.5fr 1fr;
        }
    }

    h2 {
        font-size: 2rem;
        margin-bottom: 1.5rem;
    }

    .mt-4 {
        margin-top: 4rem;
    }

    .about-content p {
        color: #E0E0E0;
        font-size: 1.1rem;
        line-height: 1.8;
        margin-bottom: 1.5rem;
    }

    .stats-row {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        margin: 3rem 0;
        padding: 2rem 0;
        border-top: 1px solid var(--border-light);
        border-bottom: 1px solid var(--border-light);
    }

    .stat {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .stat-number {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--accent-gold);
        margin-bottom: 0.5rem;
    }

    .stat-label {
        color: var(--text-muted);
        font-size: 0.95rem;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .instructor-profile {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    @media (min-width: 600px) {
        .instructor-profile {
            flex-direction: row;
        }
    }

    .instructor-image {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background: linear-gradient(rgba(212, 175, 55, 0.2), rgba(212, 175, 55, 0.2)), url('https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400') center/cover;
        border: 2px solid var(--accent-gold);
        flex-shrink: 0;
    }

    .instructor-details h3 {
        font-size: 1.5rem;
        margin-bottom: 0.2rem;
    }

    .instructor-details .role {
        display: block;
        font-weight: 600;
        margin-bottom: 1rem;
    }

    .instructor-details p {
        font-size: 0.95rem;
        margin-bottom: 1rem;
    }

    .timeline {
        position: relative;
        padding-left: 2rem;
    }

    .timeline::before {
        content: '';
        position: absolute;
        left: 0;
        top: 10px;
        bottom: 0;
        width: 2px;
        background: var(--border-light);
    }

    .timeline-item {
        position: relative;
        margin-bottom: 3rem;
    }

    .timeline-item:last-child {
        margin-bottom: 0;
    }

    .timeline-dot {
        position: absolute;
        left: -2rem;
        top: 6px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: var(--bg-deep-black);
        border: 2px solid var(--accent-gold);
        transform: translateX(-5px);
        box-shadow: 0 0 10px var(--accent-gold-glow);
    }

    .timeline-content h3 {
        color: var(--accent-gold);
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }

    .timeline-content p {
        color: var(--text-muted);
        line-height: 1.6;
    }
</style>
