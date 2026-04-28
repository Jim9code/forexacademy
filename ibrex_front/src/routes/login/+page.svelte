<script>
    import Button from '$lib/components/Button.svelte';
    import Card from '$lib/components/Card.svelte';
</script>

<div class="auth-container">
    <div class="auth-box">
        <div class="text-center">
            <a href="/" class="logo">
                <span class="text-gradient-gold">IBREX</span> Academy
            </a>
            <h1>Welcome Back</h1>
            <p>Log in to continue your trading journey.</p>
        </div>

        <Card padding="2rem" hoverEffect={false}>
            <form action="/dashboard" method="GET">
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" placeholder="you@example.com" required>
                </div>
                
                <div class="form-group">
                    <div class="password-header">
                        <label for="password">Password</label>
                        <a href="#" class="forgot-link">Forgot password?</a>
                    </div>
                    <input type="password" id="password" placeholder="••••••••" required>
                </div>

                <Button text="Log In" variant="primary" fullWidth={true} type="submit" />
            </form>
            
            <p class="switch-auth">
                Don't have an account? <a href="/signup">Sign up</a>
            </p>
        </Card>
    </div>
</div>

<style>
    .auth-container {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        background: radial-gradient(circle at center, rgba(212, 175, 55, 0.05) 0%, transparent 50%);
    }

    .auth-box {
        width: 100%;
        max-width: 450px;
    }

    .text-center {
        text-align: center;
        margin-bottom: 2rem;
    }

    .logo {
        font-size: 1.5rem;
        font-weight: 700;
        display: inline-block;
        margin-bottom: 2rem;
    }

    h1 {
        font-size: 2rem;
        margin-bottom: 0.5rem;
    }

    .text-center p {
        color: var(--text-muted);
    }

    .form-group {
        margin-bottom: 1.5rem;
    }

    label {
        display: block;
        margin-bottom: 0.5rem;
        color: var(--text-main);
        font-size: 0.95rem;
    }

    .password-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .forgot-link {
        font-size: 0.85rem;
        color: var(--accent-gold);
    }

    .forgot-link:hover {
        text-decoration: underline;
    }

    input {
        width: 100%;
        padding: 0.8rem 1rem;
        background: rgba(0, 0, 0, 0.2);
        border: 1px solid var(--border-light);
        border-radius: 6px;
        color: var(--text-main);
        font-family: inherit;
        font-size: 1rem;
        transition: all 0.2s ease;
    }

    input:focus {
        outline: none;
        border-color: var(--accent-gold);
        box-shadow: 0 0 10px rgba(212, 175, 55, 0.2);
    }

    .switch-auth {
        text-align: center;
        margin-top: 1.5rem;
        color: var(--text-muted);
        font-size: 0.95rem;
    }

    .switch-auth a {
        color: var(--accent-gold);
        font-weight: 500;
    }

    .switch-auth a:hover {
        text-decoration: underline;
    }
</style>
