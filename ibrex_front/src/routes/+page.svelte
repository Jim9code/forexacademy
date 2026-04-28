<script>
    import Button from '$lib/components/Button.svelte';
    import Card from '$lib/components/Card.svelte';
    import CandlestickBg from '$lib/components/CandlestickBg.svelte';
</script>

<div class="home">
    <!-- Hero Section -->
    <section class="hero">
        <CandlestickBg />
        <div class="hero-container">
            <!-- Left Side: Text & CTA -->
            <div class="hero-text-content">
                <div class="floating-badge badge-1">
                    <span class="dot green"></span> EUR/USD +42.5 Pips
                </div>
                
                <h1 class="headline">Master Forex Trading With <span class="text-gradient-gold">Precision</span></h1>
                <p class="subtext">Learn proven strategies, risk management, and real market execution. Stop gambling and start trading like an institution.</p>
                
                <div class="cta-group-left">
                    <a href="/courses">
                        <Button text="Start Learning" variant="primary" />
                    </a>
                    <a href="#preview">
                        <Button text="Watch Preview" variant="ghost" />
                    </a>
                </div>
                
                <div class="floating-badge badge-2">
                    <span class="dot red"></span> XAU/USD 2341.20
                </div>
            </div>

            <!-- Right Side: Terminal Mockup -->
            <div class="hero-terminal-wrapper">
                <div class="terminal">
                    <div class="terminal-header">
                        <div class="traffic-lights">
                            <span></span><span></span><span></span>
                        </div>
                        <div class="terminal-title">EUR/USD - 1H</div>
                        <div class="terminal-actions">
                            <button class="t-btn sell">SELL 1.0924</button>
                            <button class="t-btn buy">BUY 1.0926</button>
                        </div>
                    </div>
                    <div class="terminal-body">
                        <div class="mock-chart">
                            <svg viewBox="0 0 400 200" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stop-color="rgba(0, 200, 83, 0.4)" />
                                        <stop offset="100%" stop-color="rgba(0, 200, 83, 0.0)" />
                                    </linearGradient>
                                </defs>
                                <path d="M0,150 L50,120 L100,140 L150,80 L200,100 L250,40 L300,60 L350,20 L400,50 L400,200 L0,200 Z" fill="url(#chartGrad)" />
                                <path d="M0,150 L50,120 L100,140 L150,80 L200,100 L250,40 L300,60 L350,20 L400,50" fill="none" stroke="#00C853" stroke-width="3" />
                                
                                <rect x="48" y="100" width="4" height="40" fill="#D50000" />
                                <rect x="98" y="130" width="4" height="20" fill="#00C853" />
                                <rect x="148" y="70" width="4" height="50" fill="#00C853" />
                                <rect x="198" y="90" width="4" height="30" fill="#D50000" />
                                <rect x="248" y="30" width="4" height="40" fill="#00C853" />
                                <rect x="298" y="50" width="4" height="30" fill="#D50000" />
                                <rect x="348" y="10" width="4" height="40" fill="#00C853" />
                            </svg>
                        </div>
                        <div class="terminal-footer">
                            <div class="open-positions">
                                <span>Open P&L:</span>
                                <span class="profit">+$450.20</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="scroll-indicator">
            <div class="mouse"></div>
        </div>
    </section>

    <!-- Course Preview Section -->
    <section id="preview" class="section">
        <div class="container">
            <div class="section-header">
                <h2>Featured <span class="text-gradient-gold">Courses</span></h2>
                <p>Start your journey from beginner to advanced trader</p>
            </div>
            
            <div class="grid">
                <Card padding="0" hoverEffect={true}>
                    <div class="course-img beginner"></div>
                    <div class="course-info">
                        <span class="badge beginner-badge">Beginner</span>
                        <h3>Forex Fundamentals</h3>
                        <p>Learn the basics of currency pairs, pips, and market hours.</p>
                    </div>
                </Card>
                <Card padding="0" hoverEffect={true}>
                    <div class="course-img intermediate"></div>
                    <div class="course-info">
                        <span class="badge intermediate-badge">Intermediate</span>
                        <h3>Price Action Mastery</h3>
                        <p>Understand candlesticks, support/resistance, and chart patterns.</p>
                    </div>
                </Card>
                <Card padding="0" hoverEffect={true}>
                    <div class="course-img advanced"></div>
                    <div class="course-info">
                        <span class="badge advanced-badge">Advanced</span>
                        <h3>Smart Money Concepts</h3>
                        <p>Trade with the institutions: order blocks and liquidity voids.</p>
                    </div>
                </Card>
            </div>
        </div>
    </section>

    <!-- How It Works Section -->
    <section class="section alternate">
        <div class="container">
            <div class="section-header">
                <h2>How It <span class="text-gradient-gold">Works</span></h2>
                <p>Your path to consistent profitability</p>
            </div>
            
            <div class="steps">
                <div class="step">
                    <div class="step-icon">1</div>
                    <h3>Sign Up</h3>
                    <p>Create your free account and access beginner material.</p>
                </div>
                <div class="step-line"></div>
                <div class="step">
                    <div class="step-icon">2</div>
                    <h3>Learn</h3>
                    <p>Watch structured video lessons and complete quizzes.</p>
                </div>
                <div class="step-line"></div>
                <div class="step">
                    <div class="step-icon">3</div>
                    <h3>Practice</h3>
                    <p>Apply strategies on a demo account with our guided setups.</p>
                </div>
                <div class="step-line"></div>
                <div class="step">
                    <div class="step-icon">4</div>
                    <h3>Profit</h3>
                    <p>Execute live trades with confidence and risk management.</p>
                </div>
            </div>
        </div>
    </section>
</div>

<style>
    .hero {
        position: relative;
        min-height: 100vh;
        display: flex;
        align-items: center;
        padding-top: var(--nav-height);
        overflow: hidden;
    }

    .hero-container {
        position: relative;
        z-index: 10;
        max-width: 1300px;
        margin: 0 auto;
        padding: 0 2rem;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        gap: 4rem;
        align-items: center;
    }

    @media (min-width: 992px) {
        .hero-container {
            grid-template-columns: 1fr 1fr;
        }
    }

    .hero-text-content {
        position: relative;
        max-width: 600px;
        text-align: center;
        margin: 0 auto;
        z-index: 5;
    }

    @media (min-width: 992px) {
        .hero-text-content {
            text-align: left;
            margin: 0;
        }
    }

    .floating-badge {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        background: rgba(11, 11, 11, 0.6);
        border: 1px solid var(--border-light);
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-size: 0.85rem;
        font-weight: 600;
        backdrop-filter: var(--glass-blur);
        box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        position: absolute;
        animation: float 6s ease-in-out infinite;
        z-index: -1;
    }

    .badge-1 {
        top: -40px;
        left: 20px;
    }

    .badge-2 {
        bottom: -20px;
        right: 40px;
        animation-delay: -3s;
    }

    .dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
    }

    .dot.green { background: var(--accent-green); box-shadow: 0 0 8px var(--accent-green); }
    .dot.red { background: var(--accent-red); box-shadow: 0 0 8px var(--accent-red); }

    @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-15px); }
    }

    .headline {
        font-size: clamp(2.5rem, 5vw, 4.5rem);
        font-weight: 700;
        line-height: 1.1;
        margin-bottom: 1.5rem;
    }

    .subtext {
        font-size: clamp(1.1rem, 2vw, 1.3rem);
        color: var(--text-muted);
        margin-bottom: 2.5rem;
        line-height: 1.6;
    }

    .cta-group-left {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: center;
    }

    @media (min-width: 992px) {
        .cta-group-left {
            justify-content: flex-start;
        }
    }

    .hero-terminal-wrapper {
        perspective: 1000px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        padding: 0 2rem;
        opacity: 0.15;
        z-index: 0;
        pointer-events: none;
        display: flex;
        justify-content: center;
    }

    @media (min-width: 992px) {
        .hero-terminal-wrapper {
            position: relative;
            top: auto;
            left: auto;
            transform: none;
            width: auto;
            padding: 0;
            opacity: 1;
            z-index: auto;
            pointer-events: auto;
            display: block;
        }
    }

    .terminal {
        width: 100%;
        max-width: 500px;
        background: rgba(15, 15, 15, 0.7);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        backdrop-filter: blur(20px);
        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(212, 175, 55, 0.1);
        transform: rotateY(0deg) rotateX(0deg);
        transform-style: preserve-3d;
        transition: transform 0.5s ease;
        overflow: hidden;
    }

    @media (min-width: 992px) {
        .terminal {
            transform: rotateY(-15deg) rotateX(5deg);
        }
    }

    .terminal:hover {
        transform: rotateY(-5deg) rotateX(2deg);
    }

    .terminal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 1.5rem;
        background: rgba(0, 0, 0, 0.5);
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .traffic-lights {
        display: flex;
        gap: 6px;
    }

    .traffic-lights span {
        width: 12px;
        height: 12px;
        border-radius: 50%;
    }
    
    .traffic-lights span:nth-child(1) { background: #FF5F56; }
    .traffic-lights span:nth-child(2) { background: #FFBD2E; }
    .traffic-lights span:nth-child(3) { background: #27C93F; }

    .terminal-title {
        font-weight: 600;
        letter-spacing: 1px;
    }

    .terminal-actions {
        display: flex;
        gap: 0.5rem;
    }

    .t-btn {
        padding: 0.4rem 0.8rem;
        border-radius: 4px;
        font-size: 0.8rem;
        font-weight: bold;
        color: white;
    }

    .t-btn.sell { background: rgba(213, 0, 0, 0.2); border: 1px solid var(--accent-red); color: var(--accent-red); }
    .t-btn.buy { background: rgba(0, 200, 83, 0.2); border: 1px solid var(--accent-green); color: var(--accent-green); }

    .terminal-body {
        padding: 1.5rem;
    }

    .mock-chart {
        width: 100%;
        height: 250px;
        border-radius: 8px;
        background: rgba(0, 0, 0, 0.3);
        border: 1px dashed rgba(255, 255, 255, 0.1);
        display: flex;
        align-items: flex-end;
        overflow: hidden;
    }

    .mock-chart svg {
        width: 100%;
        height: 100%;
    }

    .terminal-footer {
        margin-top: 1.5rem;
        padding-top: 1.5rem;
        border-top: 1px solid rgba(255, 255, 255, 0.05);
        display: flex;
        justify-content: space-between;
    }

    .open-positions {
        font-size: 0.9rem;
        color: var(--text-muted);
    }

    .profit {
        color: var(--accent-green);
        font-weight: bold;
        font-size: 1.1rem;
        margin-left: 0.5rem;
        text-shadow: 0 0 10px rgba(0, 200, 83, 0.4);
    }

    .scroll-indicator {
        position: absolute;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
        z-index: 10;
    }

    .mouse {
        width: 24px;
        height: 36px;
        border: 2px solid var(--text-muted);
        border-radius: 12px;
        position: relative;
    }

    .mouse::before {
        content: '';
        position: absolute;
        top: 6px;
        left: 50%;
        transform: translateX(-50%);
        width: 4px;
        height: 6px;
        background: var(--text-muted);
        border-radius: 2px;
        animation: scroll 2s infinite;
    }

    @keyframes scroll {
        0% { transform: translate(-50%, 0); opacity: 1; }
        100% { transform: translate(-50%, 15px); opacity: 0; }
    }

    .section {
        padding: 6rem 0;
    }

    .alternate {
        background: rgba(255, 255, 255, 0.02);
        border-top: 1px solid var(--border-light);
        border-bottom: 1px solid var(--border-light);
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
    }

    .section-header {
        text-align: center;
        margin-bottom: 4rem;
    }

    .section-header h2 {
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
    }

    .section-header p {
        color: var(--text-muted);
        font-size: 1.1rem;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
    }

    .course-img {
        height: 200px;
        background-size: cover;
        background-position: center;
        border-bottom: 1px solid var(--border-light);
    }

    .course-img.beginner { background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800'); }
    .course-img.intermediate { background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800'); }
    .course-img.advanced { background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80&w=800'); }

    .course-info {
        padding: 1.5rem;
    }

    .course-info h3 {
        margin: 0.8rem 0;
        font-size: 1.3rem;
    }

    .course-info p {
        color: var(--text-muted);
        font-size: 0.95rem;
        line-height: 1.5;
    }

    .badge {
        display: inline-block;
        padding: 0.3rem 0.8rem;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 600;
    }

    .beginner-badge { background: rgba(0, 200, 83, 0.2); color: var(--accent-green); }
    .intermediate-badge { background: rgba(212, 175, 55, 0.2); color: var(--accent-gold); }
    .advanced-badge { background: rgba(213, 0, 0, 0.2); color: var(--accent-red); }

    .steps {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        position: relative;
    }

    @media (min-width: 768px) {
        .steps {
            flex-direction: row;
            align-items: flex-start;
            text-align: center;
        }
    }

    .step {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .step-icon {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: rgba(212, 175, 55, 0.1);
        border: 2px solid var(--accent-gold);
        color: var(--accent-gold);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
        box-shadow: 0 0 15px var(--accent-gold-glow);
    }

    .step h3 {
        margin-bottom: 0.5rem;
    }

    .step p {
        color: var(--text-muted);
        font-size: 0.95rem;
    }

    .step-line {
        display: none;
    }

    @media (min-width: 768px) {
        .step-line {
            display: block;
            flex: 1;
            height: 2px;
            background: linear-gradient(90deg, var(--accent-gold) 0%, transparent 100%);
            margin-top: 30px;
            opacity: 0.5;
        }
    }
</style>
