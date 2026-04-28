<script>
    import Card from '$lib/components/Card.svelte';
    import Button from '$lib/components/Button.svelte';

    let user = $state({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com'
    });
</script>

<div class="page-container">
    <div class="header">
        <h1>Profile <span class="text-gradient-gold">Settings</span></h1>
        <p>Manage your account details and preferences.</p>
    </div>

    <div class="profile-grid">
        <div class="sidebar">
            <Card padding="1.5rem" hoverEffect={false}>
                <div class="user-avatar-section">
                    <div class="avatar">JD</div>
                    <h3>{user.firstName} {user.lastName}</h3>
                    <p class="role">Student</p>
                </div>
                
                <ul class="nav-menu">
                    <li><a href="/profile" class="active">Personal Info</a></li>
                    <li><a href="#security">Security</a></li>
                    <li><a href="#billing">Billing</a></li>
                    <li><a href="/dashboard">Back to Dashboard</a></li>
                </ul>
            </Card>
        </div>
        
        <div class="main-content">
            <Card padding="2rem" hoverEffect={false}>
                <h2>Personal Information</h2>
                <form class="profile-form" on:submit|preventDefault>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="firstName">First Name</label>
                            <input type="text" id="firstName" bind:value={user.firstName}>
                        </div>
                        <div class="form-group">
                            <label for="lastName">Last Name</label>
                            <input type="text" id="lastName" bind:value={user.lastName}>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" bind:value={user.email}>
                    </div>
                    
                    <div class="form-actions">
                        <Button text="Save Changes" variant="primary" />
                    </div>
                </form>
            </Card>

            <div class="spacer"></div>

            <Card padding="2rem" hoverEffect={false}>
                <h2 id="security">Security</h2>
                <form class="profile-form" on:submit|preventDefault>
                    <div class="form-group">
                        <label for="currentPassword">Current Password</label>
                        <input type="password" id="currentPassword" placeholder="••••••••">
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="newPassword">New Password</label>
                            <input type="password" id="newPassword" placeholder="••••••••">
                        </div>
                        <div class="form-group">
                            <label for="confirmPassword">Confirm Password</label>
                            <input type="password" id="confirmPassword" placeholder="••••••••">
                        </div>
                    </div>
                    
                    <div class="form-actions">
                        <Button text="Update Password" variant="secondary" />
                    </div>
                </form>
            </Card>
        </div>
    </div>
</div>

<style>
    .page-container {
        max-width: 1000px;
        margin: 0 auto;
        padding: calc(var(--nav-height) + 4rem) 2rem 4rem;
        min-height: 100vh;
    }

    .header {
        margin-bottom: 3rem;
    }

    .header h1 {
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
    }

    .header p {
        color: var(--text-muted);
        font-size: 1.1rem;
    }

    .profile-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 3rem;
    }

    @media (min-width: 768px) {
        .profile-grid {
            grid-template-columns: 300px 1fr;
        }
    }

    .user-avatar-section {
        text-align: center;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid var(--border-light);
        margin-bottom: 1.5rem;
    }

    .avatar {
        width: 80px;
        height: 80px;
        background: var(--accent-gold);
        color: var(--bg-deep-black);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        font-weight: 700;
        margin: 0 auto 1rem;
        box-shadow: 0 0 15px var(--accent-gold-glow);
    }

    .role {
        color: var(--text-muted);
        font-size: 0.9rem;
    }

    .nav-menu {
        list-style: none;
    }

    .nav-menu li {
        margin-bottom: 0.5rem;
    }

    .nav-menu a {
        display: block;
        padding: 0.8rem 1rem;
        border-radius: 6px;
        color: var(--text-muted);
        transition: all 0.2s ease;
    }

    .nav-menu a:hover {
        background: var(--bg-card-hover);
        color: var(--accent-gold);
    }

    .nav-menu a.active {
        background: rgba(212, 175, 55, 0.1);
        color: var(--accent-gold);
        border-left: 3px solid var(--accent-gold);
    }

    h2 {
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
    }

    .spacer {
        height: 2rem;
    }

    .profile-form {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .form-row {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    @media (min-width: 600px) {
        .form-row {
            grid-template-columns: 1fr 1fr;
        }
    }

    .form-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    label {
        color: var(--text-main);
        font-size: 0.95rem;
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

    .form-actions {
        margin-top: 1rem;
        display: flex;
        justify-content: flex-end;
    }
</style>
