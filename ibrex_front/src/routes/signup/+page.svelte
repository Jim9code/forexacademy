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
            <h1>Create an Account</h1>
            <p>Start your journey to consistent profitability.</p>
        </div>

        <Card padding="2rem" hoverEffect={false}>
            <form action="/dashboard" method="GET">
                <div class="form-row">
                    <div class="form-group">
                        <label for="firstName">First Name</label>
                        <input type="text" id="firstName" placeholder="John" required>
                    </div>
                    <div class="form-group">
                        <label for="lastName">Last Name</label>
                        <input type="text" id="lastName" placeholder="Doe" required>
                    </div>
                </div>

                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" placeholder="you@example.com" required>
                </div>
                
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="••••••••" required>
                </div>

                <div class="form-group checkbox-group">
                    <input type="checkbox" id="terms" required>
                    <label for="terms" class="checkbox-label">
                        I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
                    </label>
                </div>

                <Button text="Sign Up" variant="primary" fullWidth={true} type="submit" />
            </form>
            
            <p class="switch-auth">
                Already have an account? <a href="/login">Log in</a>
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
        max-width: 500px;
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

    .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
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

    input[type="text"],
    input[type="email"],
    input[type="password"] {
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

    .checkbox-group {
        display: flex;
        align-items: flex-start;
        gap: 0.8rem;
    }

    .checkbox-group input {
        margin-top: 0.2rem;
        accent-color: var(--accent-gold);
    }

    .checkbox-label {
        font-size: 0.9rem;
        color: var(--text-muted);
        margin: 0;
    }

    .checkbox-label a {
        color: var(--accent-gold);
    }

    .checkbox-label a:hover {
        text-decoration: underline;
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
