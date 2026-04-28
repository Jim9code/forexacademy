<script>
    let { padding = "1.5rem", hoverEffect = true, children } = $props();
</script>

<div class="card" style="padding: {padding}" class:hover-effect={hoverEffect}>
    <slot />
</div>

<style>
    .card {
        background: var(--bg-card);
        border: 1px solid var(--border-light);
        border-radius: 12px;
        backdrop-filter: var(--glass-blur);
        -webkit-backdrop-filter: var(--glass-blur);
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }

    .hover-effect:hover {
        transform: translateY(-5px);
        border-color: rgba(212, 175, 55, 0.4);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    }
</style>
