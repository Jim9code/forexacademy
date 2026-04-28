<footer class="footer">
    <div class="container">
        <div class="footer-grid">
            <div class="footer-brand">
                <a href="/" class="logo">
                    <span class="text-gradient-gold">IBREX</span> Academy
                </a>
                <p class="description">Master Forex Trading With Precision. Learn proven strategies, risk management, and real market execution.</p>
            </div>
            
            <div class="footer-links">
                <h3>Platform</h3>
                <a href="/courses">Courses</a>
                <a href="/dashboard">Dashboard</a>
                <a href="/about">About Us</a>
            </div>

            <div class="footer-links">
                <h3>Legal</h3>
                <a href="#">Terms of Service</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Risk Warning</a>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>&copy; {new Date().getFullYear()} IBREX Forex Academy. All rights reserved.</p>
        </div>
    </div>
</footer>

<style>
    .footer {
        background: rgba(0, 0, 0, 0.5);
        border-top: 1px solid var(--border-light);
        padding: 4rem 0 2rem;
        margin-top: auto;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
    }

    .footer-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 3rem;
        margin-bottom: 3rem;
    }

    @media (min-width: 768px) {
        .footer-grid {
            grid-template-columns: 2fr 1fr 1fr;
        }
    }

    .logo {
        font-size: 1.5rem;
        font-weight: 700;
        display: inline-block;
        margin-bottom: 1rem;
    }

    .description {
        color: var(--text-muted);
        line-height: 1.6;
        max-width: 400px;
    }

    .footer-links h3 {
        color: var(--text-main);
        font-size: 1.1rem;
        margin-bottom: 1.5rem;
    }

    .footer-links a {
        display: block;
        color: var(--text-muted);
        margin-bottom: 0.8rem;
        transition: color 0.2s ease;
    }

    .footer-links a:hover {
        color: var(--accent-gold);
    }

    .footer-bottom {
        padding-top: 2rem;
        border-top: 1px solid var(--border-light);
        text-align: center;
        color: var(--text-muted);
        font-size: 0.9rem;
    }
</style>
