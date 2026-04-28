<script>
    import Card from '$lib/components/Card.svelte';
    import Button from '$lib/components/Button.svelte';
    import { reveal } from '$lib/actions/reveal.js';

    let filter = $state('All'); // All, Beginner, Advanced

    const allCourses = [
        { id: '1', title: 'Forex Fundamentals', level: 'Beginner', desc: 'Learn the basics of currency pairs, pips, and market hours.', img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800' },
        { id: '2', title: 'Risk Management', level: 'Beginner', desc: 'Protect your capital with position sizing and psychology.', img: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800' },
        { id: '3', title: 'Price Action Mastery', level: 'Advanced', desc: 'Understand candlesticks, support/resistance, and patterns.', img: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80&w=800' },
        { id: '4', title: 'Smart Money Concepts', level: 'Advanced', desc: 'Trade with the institutions: order blocks and liquidity voids.', img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800' },
    ];

    let filteredCourses = $derived(filter === 'All' 
        ? allCourses 
        : allCourses.filter(c => c.level === filter));
</script>

<div class="page-container">
    <div class="header" use:reveal>
        <h1>Academy <span class="text-gradient-gold">Courses</span></h1>
        <p>Master the markets with our structured curriculum.</p>
    </div>

    <div class="filters">
        <button class:active={filter === 'All'} on:click={() => filter = 'All'}>All</button>
        <button class:active={filter === 'Beginner'} on:click={() => filter = 'Beginner'}>Beginner</button>
        <button class:active={filter === 'Advanced'} on:click={() => filter = 'Advanced'}>Advanced</button>
    </div>

    <div class="grid">
        {#each filteredCourses as course, i}
            <div use:reveal={{ delay: i * 100 }}>
                <Card padding="0" hoverEffect={true}>
                    <div class="course-img" style="background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url({course.img})"></div>
                    <div class="course-info">
                        <span class="badge {course.level.toLowerCase()}-badge">{course.level}</span>
                        <h3>{course.title}</h3>
                        <p>{course.desc}</p>
                        <div class="action">
                            <a href="/courses/{course.id}">
                                <Button text="View Course" variant="outline" fullWidth={true} />
                            </a>
                        </div>
                    </div>
                </Card>
            </div>
        {/each}
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
        margin-bottom: 3rem;
    }

    .header h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    .header p {
        color: var(--text-muted);
        font-size: 1.1rem;
    }

    .filters {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-bottom: 4rem;
    }

    .filters button {
        padding: 0.5rem 1.5rem;
        border-radius: 30px;
        border: 1px solid var(--border-light);
        background: var(--bg-card);
        color: var(--text-main);
        transition: all 0.3s ease;
    }

    .filters button:hover {
        border-color: var(--accent-gold);
    }

    .filters button.active {
        background: var(--accent-gold);
        color: var(--bg-deep-black);
        border-color: var(--accent-gold);
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
        margin-bottom: 1.5rem;
    }

    .badge {
        display: inline-block;
        padding: 0.3rem 0.8rem;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 600;
    }

    .beginner-badge { background: rgba(0, 200, 83, 0.2); color: var(--accent-green); }
    .advanced-badge { background: rgba(213, 0, 0, 0.2); color: var(--accent-red); }

    .action {
        margin-top: 1rem;
    }
</style>
