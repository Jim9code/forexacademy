<script>
    import Card from '$lib/components/Card.svelte';
    import Button from '$lib/components/Button.svelte';

    const user = {
        name: 'John Doe',
        joinDate: '2026-04-28'
    };

    const enrolledCourses = [
        {
            id: '1',
            title: 'Forex Fundamentals',
            progress: 65,
            nextLesson: 'Types of Market Orders',
            img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800'
        },
        {
            id: '2',
            title: 'Risk Management',
            progress: 10,
            nextLesson: 'Position Sizing Calculator',
            img: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800'
        }
    ];
</script>

<div class="page-container">
    <div class="welcome-section">
        <h1>Welcome back, <span class="text-gradient-gold">{user.name}</span></h1>
        <p>Pick up where you left off and keep growing your skills.</p>
    </div>

    <div class="dashboard-grid">
        <div class="main-column">
            <h2>Your <span class="text-gradient-gold">Learning Path</span></h2>
            
            <div class="courses-list">
                {#each enrolledCourses as course}
                    <Card padding="1.5rem" hoverEffect={false}>
                        <div class="course-progress-card">
                            <div class="course-thumb" style="background-image: url({course.img})"></div>
                            <div class="course-details">
                                <h3>{course.title}</h3>
                                <p class="next-lesson">Next: {course.nextLesson}</p>
                                
                                <div class="progress-container">
                                    <div class="progress-info">
                                        <span>Progress</span>
                                        <span>{course.progress}%</span>
                                    </div>
                                    <div class="progress-bar">
                                        <div class="progress-fill" style="width: {course.progress}%"></div>
                                    </div>
                                </div>
                                
                                <div class="action-btn">
                                    <a href="/player">
                                        <Button text="Continue Learning" variant="primary" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Card>
                {/each}
            </div>
        </div>
        
        <div class="sidebar">
            <Card padding="1.5rem" hoverEffect={false}>
                <h3>Dashboard Menu</h3>
                <ul class="nav-menu">
                    <li><a href="/dashboard" class="active">My Learning</a></li>
                    <li><a href="/courses">Browse Courses</a></li>
                    <li><a href="/profile">Profile Settings</a></li>
                    <li><a href="/">Log Out</a></li>
                </ul>
            </Card>

            <Card padding="1.5rem" hoverEffect={false}>
                <h3>Trading Stats</h3>
                <div class="stats-box">
                    <div class="stat-item">
                        <span class="stat-value">0</span>
                        <span class="stat-label">Certificates</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-value text-gradient-gold">12</span>
                        <span class="stat-label">Hours Watched</span>
                    </div>
                </div>
            </Card>
        </div>
    </div>
</div>

<style>
    .page-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: calc(var(--nav-height) + 4rem) 2rem 4rem;
        min-height: 100vh;
    }

    .welcome-section {
        margin-bottom: 3rem;
    }

    .welcome-section h1 {
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
    }

    .welcome-section p {
        color: var(--text-muted);
        font-size: 1.1rem;
    }

    .dashboard-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 3rem;
    }

    @media (min-width: 900px) {
        .dashboard-grid {
            grid-template-columns: 2fr 1fr;
        }
    }

    h2 {
        font-size: 1.8rem;
        margin-bottom: 1.5rem;
    }

    .courses-list {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .course-progress-card {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    @media (min-width: 600px) {
        .course-progress-card {
            flex-direction: row;
        }
    }

    .course-thumb {
        width: 100%;
        height: 150px;
        border-radius: 8px;
        background-size: cover;
        background-position: center;
    }

    @media (min-width: 600px) {
        .course-thumb {
            width: 200px;
            min-width: 200px;
            height: auto;
        }
    }

    .course-details {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .course-details h3 {
        font-size: 1.3rem;
        margin-bottom: 0.5rem;
    }

    .next-lesson {
        color: var(--text-muted);
        font-size: 0.95rem;
        margin-bottom: 1rem;
    }

    .progress-container {
        margin-bottom: 1.5rem;
    }

    .progress-info {
        display: flex;
        justify-content: space-between;
        font-size: 0.85rem;
        color: var(--text-muted);
        margin-bottom: 0.5rem;
    }

    .progress-bar {
        width: 100%;
        height: 6px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 3px;
        overflow: hidden;
    }

    .progress-fill {
        height: 100%;
        background: var(--accent-gold);
        border-radius: 3px;
        box-shadow: 0 0 10px var(--accent-gold-glow);
    }

    .action-btn {
        margin-top: auto;
    }

    .sidebar {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .sidebar h3 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid var(--border-light);
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

    .stats-box {
        display: flex;
        justify-content: space-around;
        text-align: center;
        padding: 1rem 0;
    }

    .stat-item {
        display: flex;
        flex-direction: column;
    }

    .stat-value {
        font-size: 2rem;
        font-weight: 700;
    }

    .stat-label {
        font-size: 0.85rem;
        color: var(--text-muted);
    }
</style>
