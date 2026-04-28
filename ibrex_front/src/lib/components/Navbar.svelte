<script>
    import { onMount } from 'svelte';
    import Button from './Button.svelte';

    let scrolled = $state(false);
    let mobileMenuOpen = $state(false);

    onMount(() => {
        const handleScroll = () => {
            scrolled = window.scrollY > 20;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    const toggleMenu = () => {
        mobileMenuOpen = !mobileMenuOpen;
    };
</script>

<nav class:scrolled>
    <div class="container">
        <a href="/" class="logo">
            <span class="text-gradient-gold">IBREX</span> Academy
        </a>
        
        <div class="desktop-nav">
            <div class="links">
                <a href="/">Home</a>
                <a href="/courses">Courses</a>
                <a href="/about">About</a>
            </div>

            <div class="actions">
                <a href="/dashboard" class="login-link text-gradient-gold" style="margin-right: 0.5rem;">Demo Dashboard</a>
                <a href="/login" class="login-link">Login</a>
                <a href="/signup">
                    <Button text="Sign Up" variant="primary" />
                </a>
            </div>
        </div>

        <button class="mobile-menu-btn" onclick={toggleMenu} aria-label="Toggle Menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                {#if mobileMenuOpen}
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                {:else}
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                {/if}
            </svg>
        </button>
    </div>

    {#if mobileMenuOpen}
        <div class="mobile-menu">
            <a href="/" onclick={toggleMenu}>Home</a>
            <a href="/courses" onclick={toggleMenu}>Courses</a>
            <a href="/about" onclick={toggleMenu}>About</a>
            <hr class="divider">
            <a href="/dashboard" class="text-gradient-gold" onclick={toggleMenu}>Demo Dashboard</a>
            <a href="/login" onclick={toggleMenu}>Login</a>
            <div class="mobile-action">
                <a href="/signup" onclick={toggleMenu}>
                    <Button text="Sign Up" variant="primary" fullWidth={true} />
                </a>
            </div>
        </div>
    {/if}
</nav>

<style>
    nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: var(--nav-height);
        z-index: 100;
        transition: all 0.3s ease;
        border-bottom: 1px solid transparent;
    }

    nav.scrolled {
        background: rgba(11, 11, 11, 0.95);
        backdrop-filter: var(--glass-blur);
        -webkit-backdrop-filter: var(--glass-blur);
        border-bottom: 1px solid var(--border-light);
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1.5rem;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .logo {
        font-size: 1.5rem;
        font-weight: 700;
        letter-spacing: 1px;
    }

    .desktop-nav {
        display: none;
    }

    @media (min-width: 992px) {
        .desktop-nav {
            display: flex;
            align-items: center;
            gap: 2.5rem;
        }
    }

    .links {
        display: flex;
        gap: 2rem;
    }

    .links a {
        color: var(--text-muted);
        font-weight: 500;
        transition: color 0.2s ease;
    }

    .links a:hover {
        color: var(--accent-gold);
    }

    .actions {
        display: flex;
        align-items: center;
        gap: 1.5rem;
    }

    .login-link {
        color: var(--text-main);
        font-weight: 500;
        transition: color 0.2s ease;
    }
    
    .login-link:hover {
        color: var(--accent-gold);
    }

    .mobile-menu-btn {
        display: block;
        background: none;
        border: none;
        color: var(--text-main);
        cursor: pointer;
        padding: 0.5rem;
    }

    .mobile-menu-btn svg {
        width: 24px;
        height: 24px;
    }

    @media (min-width: 992px) {
        .mobile-menu-btn {
            display: none;
        }
    }

    .mobile-menu {
        position: absolute;
        top: var(--nav-height);
        left: 0;
        right: 0;
        background: rgba(11, 11, 11, 0.98);
        border-bottom: 1px solid var(--border-light);
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        backdrop-filter: blur(10px);
    }

    .mobile-menu a {
        color: var(--text-main);
        font-size: 1.1rem;
        font-weight: 500;
        padding: 0.5rem 0;
    }

    .divider {
        border: none;
        border-top: 1px solid var(--border-light);
        margin: 0.5rem 0;
    }

    .mobile-action {
        margin-top: 1rem;
    }
</style>
