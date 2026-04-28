<script>
    let { 
        text = "Button",
        variant = "primary", // primary, secondary, outline, ghost
        type = "button",
        fullWidth = false,
        children
    } = $props();
</script>

<button {type} class="btn {variant} {fullWidth ? 'full-width' : ''}" on:click>
    {text}
    <slot />
</button>

<style>
    .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        font-weight: 500;
        border-radius: 6px;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }

    .full-width {
        width: 100%;
    }

    .primary {
        background-color: var(--accent-gold);
        color: var(--bg-deep-black);
        box-shadow: 0 0 10px rgba(212, 175, 55, 0.2);
    }
    .primary:hover {
        background-color: #e6c858;
        box-shadow: 0 0 20px var(--accent-gold-glow);
        transform: translateY(-2px);
    }

    .secondary {
        background-color: var(--bg-card);
        color: var(--text-main);
        border: 1px solid var(--border-light);
    }
    .secondary:hover {
        background-color: var(--bg-card-hover);
        border-color: var(--accent-gold);
        transform: translateY(-2px);
    }

    .outline {
        background: transparent;
        color: var(--accent-gold);
        border: 1px solid var(--accent-gold);
    }
    .outline:hover {
        background: var(--accent-gold-glow);
        transform: translateY(-2px);
    }

    .ghost {
        background: transparent;
        color: var(--text-muted);
    }
    .ghost:hover {
        color: var(--text-main);
    }
</style>
