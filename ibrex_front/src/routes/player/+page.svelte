<script>
    import Button from '$lib/components/Button.svelte';

    const course = {
        title: 'Forex Fundamentals',
        instructor: 'Michael J.',
        lessons: [
            { id: 1, title: 'Introduction to Forex', duration: '12:45', completed: true },
            { id: 2, title: 'Reading Currency Pairs', duration: '15:20', completed: true },
            { id: 3, title: 'Types of Market Orders', duration: '14:30', completed: false, active: true },
            { id: 4, title: 'Pips, Lots, and Leverage', duration: '18:10', completed: false },
            { id: 5, title: 'Setting up TradingView', duration: '22:15', completed: false },
        ]
    };
</script>

<div class="player-layout">
    <div class="main-content">
        <div class="video-container">
            <div class="video-placeholder">
                <div class="play-indicator">▶</div>
                <div class="controls-bar">
                    <div class="progress">
                        <div class="progress-fill" style="width: 30%"></div>
                    </div>
                    <div class="controls-icons">
                        <span>▶</span>
                        <span>04:15 / 14:30</span>
                        <span class="spacer"></span>
                        <span>⚙</span>
                        <span>⛶</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="lesson-details">
            <div class="header-row">
                <h1>Types of Market Orders</h1>
                <Button text="Next Lesson →" variant="primary" />
            </div>
            <p class="instructor">Instructor: {course.instructor}</p>
            
            <div class="tabs">
                <button class="active">Overview</button>
                <button>Resources</button>
                <button>Discussion</button>
            </div>
            
            <div class="tab-content">
                <p>In this lesson, we will cover the different types of orders you can use to enter and exit the market. You'll learn the difference between Market execution and Pending orders (Buy Limit, Sell Limit, Buy Stop, Sell Stop).</p>
                <p>Understanding when to use each order type is crucial for your risk management and execution strategy.</p>
            </div>
        </div>
    </div>
    
    <div class="sidebar">
        <div class="sidebar-header">
            <h3>{course.title}</h3>
            <div class="course-progress">
                <span>Progress: 40%</span>
                <div class="mini-bar">
                    <div class="mini-fill" style="width: 40%"></div>
                </div>
            </div>
        </div>
        
        <div class="lessons-list">
            {#each course.lessons as lesson}
                <div class="lesson-item" class:active={lesson.active} class:completed={lesson.completed}>
                    <div class="lesson-icon">
                        {#if lesson.completed}
                            ✓
                        {:else if lesson.active}
                            ▶
                        {:else}
                            ○
                        {/if}
                    </div>
                    <div class="lesson-info">
                        <h4>{lesson.title}</h4>
                        <span>{lesson.duration}</span>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .player-layout {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        padding-top: var(--nav-height);
    }

    @media (min-width: 900px) {
        .player-layout {
            flex-direction: row;
            height: 100vh;
            overflow: hidden;
        }
    }

    .main-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
    }

    .video-container {
        width: 100%;
        background: #000;
        aspect-ratio: 16/9;
    }

    @media (min-width: 900px) {
        .video-container {
            max-height: 70vh;
        }
    }

    .video-placeholder {
        width: 100%;
        height: 100%;
        background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200') center/cover;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .play-indicator {
        font-size: 4rem;
        color: rgba(255, 255, 255, 0.7);
    }

    .controls-bar {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 1rem;
        background: linear-gradient(transparent, rgba(0,0,0,0.9));
    }

    .progress {
        width: 100%;
        height: 4px;
        background: rgba(255, 255, 255, 0.2);
        margin-bottom: 0.5rem;
        cursor: pointer;
    }

    .progress-fill {
        height: 100%;
        background: var(--accent-gold);
    }

    .controls-icons {
        display: flex;
        gap: 1rem;
        align-items: center;
        color: #fff;
        font-size: 0.9rem;
    }

    .spacer {
        flex: 1;
    }

    .lesson-details {
        padding: 2rem;
        max-width: 1000px;
        margin: 0 auto;
        width: 100%;
    }

    .header-row {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 1rem;
        margin-bottom: 0.5rem;
    }

    .header-row h1 {
        font-size: 1.8rem;
    }

    .instructor {
        color: var(--text-muted);
        margin-bottom: 2rem;
    }

    .tabs {
        display: flex;
        gap: 2rem;
        border-bottom: 1px solid var(--border-light);
        margin-bottom: 2rem;
    }

    .tabs button {
        padding: 1rem 0;
        color: var(--text-muted);
        font-size: 1rem;
        font-weight: 500;
        border-bottom: 2px solid transparent;
    }

    .tabs button.active {
        color: var(--accent-gold);
        border-bottom-color: var(--accent-gold);
    }

    .tab-content {
        color: #E0E0E0;
        line-height: 1.6;
    }

    .tab-content p {
        margin-bottom: 1rem;
    }

    .sidebar {
        width: 100%;
        background: var(--bg-card);
        border-left: 1px solid var(--border-light);
        display: flex;
        flex-direction: column;
    }

    @media (min-width: 900px) {
        .sidebar {
            width: 350px;
            min-width: 350px;
            overflow-y: auto;
        }
    }

    .sidebar-header {
        padding: 1.5rem;
        border-bottom: 1px solid var(--border-light);
    }

    .sidebar-header h3 {
        font-size: 1.1rem;
        margin-bottom: 0.8rem;
    }

    .course-progress {
        font-size: 0.85rem;
        color: var(--text-muted);
    }

    .mini-bar {
        width: 100%;
        height: 4px;
        background: rgba(255, 255, 255, 0.1);
        margin-top: 0.5rem;
        border-radius: 2px;
    }

    .mini-fill {
        height: 100%;
        background: var(--accent-gold);
        border-radius: 2px;
    }

    .lessons-list {
        display: flex;
        flex-direction: column;
    }

    .lesson-item {
        display: flex;
        padding: 1.2rem 1.5rem;
        gap: 1rem;
        border-bottom: 1px solid var(--border-light);
        cursor: pointer;
        transition: background 0.2s;
    }

    .lesson-item:hover {
        background: var(--bg-card-hover);
    }

    .lesson-item.active {
        background: rgba(212, 175, 55, 0.1);
    }

    .lesson-item.active .lesson-info h4 {
        color: var(--accent-gold);
    }

    .lesson-icon {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        font-size: 0.8rem;
        color: var(--text-muted);
    }

    .lesson-item.completed .lesson-icon {
        background: rgba(0, 200, 83, 0.2);
        color: var(--accent-green);
    }

    .lesson-item.active .lesson-icon {
        background: var(--accent-gold);
        color: var(--bg-deep-black);
    }

    .lesson-info h4 {
        font-size: 0.95rem;
        margin-bottom: 0.3rem;
        color: #E0E0E0;
    }

    .lesson-info span {
        font-size: 0.8rem;
        color: var(--text-muted);
    }
</style>
