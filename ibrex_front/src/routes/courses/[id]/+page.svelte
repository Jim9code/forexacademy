<script>
    import { page } from '$app/stores';
    import Button from '$lib/components/Button.svelte';
    import Card from '$lib/components/Card.svelte';

    // Mock data for the specific course
    const courseId = $page.params.id;
    
    const course = {
        title: courseId === '1' ? 'Forex Fundamentals' : 'Advanced Price Action',
        instructor: 'Michael J.',
        level: 'Beginner',
        students: 12450,
        rating: 4.8,
        desc: 'Master the basics of the foreign exchange market. Learn how to read currency pairs, understand market participants, and execute your first trade with proper risk management.',
        whatYouWillLearn: [
            'Understanding Currency Pairs & Quotes',
            'How to calculate Pips & Lot Sizes',
            'Types of Orders (Market, Limit, Stop)',
            'Setting up your Trading Platform (MT4/TradingView)',
            'Basic Risk Management Principles'
        ],
        lessons: [
            { id: 1, title: 'Introduction to Forex', duration: '12:45', locked: false },
            { id: 2, title: 'Reading Currency Pairs', duration: '15:20', locked: true },
            { id: 3, title: 'Pips, Lots, and Leverage', duration: '18:10', locked: true },
            { id: 4, title: 'Types of Market Orders', duration: '14:30', locked: true },
            { id: 5, title: 'Setting up TradingView', duration: '22:15', locked: true },
        ]
    };
</script>

<div class="page-container">
    <div class="course-header">
        <div class="header-content">
            <span class="badge">{course.level}</span>
            <h1>{course.title}</h1>
            <p class="instructor">Instructor: <span class="text-gradient-gold">{course.instructor}</span></p>
            
            <div class="stats">
                <div class="stat">
                    <span class="icon">★</span> {course.rating} Rating
                </div>
                <div class="stat">
                    <span class="icon">👥</span> {course.students.toLocaleString()} Students
                </div>
            </div>
            
            <p class="description">{course.desc}</p>
            
            <div class="actions">
                <a href="/login">
                    <Button text="Enroll Now" variant="primary" />
                </a>
            </div>
        </div>
        <div class="header-image">
            <div class="video-preview">
                <div class="play-btn">▶</div>
            </div>
        </div>
    </div>

    <div class="content-grid">
        <div class="main-content">
            <Card padding="2rem" hoverEffect={false}>
                <h2>What You'll <span class="text-gradient-gold">Learn</span></h2>
                <ul class="learning-list">
                    {#each course.whatYouWillLearn as item}
                        <li>
                            <span class="check">✓</span>
                            {item}
                        </li>
                    {/each}
                </ul>
            </Card>

            <div class="curriculum">
                <h2>Course <span class="text-gradient-gold">Curriculum</span></h2>
                <div class="lessons-list">
                    {#each course.lessons as lesson}
                        <div class="lesson-item" class:locked={lesson.locked}>
                            <div class="lesson-info">
                                <span class="lesson-icon">{lesson.locked ? '🔒' : '▶'}</span>
                                <span class="lesson-title">{lesson.title}</span>
                            </div>
                            <span class="lesson-duration">{lesson.duration}</span>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
        
        <div class="sidebar">
            <Card padding="2rem" hoverEffect={false}>
                <h3>Course Features</h3>
                <ul class="features-list">
                    <li><span>⏱</span> 5 hours on-demand video</li>
                    <li><span>📱</span> Access on mobile and TV</li>
                    <li><span>📄</span> 10 downloadable resources</li>
                    <li><span>🏆</span> Certificate of completion</li>
                </ul>
                <div class="sidebar-action">
                    <a href="/login" class="full-width-link">
                        <Button text="Enroll Now" variant="primary" fullWidth={true} />
                    </a>
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

    .course-header {
        display: grid;
        grid-template-columns: 1fr;
        gap: 3rem;
        margin-bottom: 4rem;
        align-items: center;
    }

    @media (min-width: 900px) {
        .course-header {
            grid-template-columns: 1fr 1fr;
        }
    }

    .badge {
        display: inline-block;
        padding: 0.3rem 0.8rem;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 600;
        background: rgba(212, 175, 55, 0.2);
        color: var(--accent-gold);
        margin-bottom: 1rem;
    }

    .header-content h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
        line-height: 1.2;
    }

    .instructor {
        font-size: 1.1rem;
        color: var(--text-muted);
        margin-bottom: 1.5rem;
    }

    .stats {
        display: flex;
        gap: 2rem;
        margin-bottom: 1.5rem;
        color: var(--text-muted);
    }

    .stat .icon {
        color: var(--accent-gold);
    }

    .description {
        font-size: 1.1rem;
        line-height: 1.6;
        color: var(--text-muted);
        margin-bottom: 2rem;
    }

    .video-preview {
        width: 100%;
        aspect-ratio: 16/9;
        border-radius: 12px;
        background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800') center/cover;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--border-light);
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    }

    .play-btn {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: rgba(212, 175, 55, 0.9);
        color: var(--bg-deep-black);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        padding-left: 5px;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 0 20px var(--accent-gold-glow);
    }

    .play-btn:hover {
        transform: scale(1.1);
        background: var(--accent-gold);
    }

    .content-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 3rem;
    }

    @media (min-width: 900px) {
        .content-grid {
            grid-template-columns: 2fr 1fr;
        }
    }

    h2 {
        font-size: 2rem;
        margin-bottom: 1.5rem;
    }

    .learning-list {
        list-style: none;
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    @media (min-width: 600px) {
        .learning-list {
            grid-template-columns: 1fr 1fr;
        }
    }

    .learning-list li {
        display: flex;
        align-items: flex-start;
        gap: 0.8rem;
        color: var(--text-muted);
    }

    .check {
        color: var(--accent-green);
        font-weight: bold;
    }

    .curriculum {
        margin-top: 3rem;
    }

    .lessons-list {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .lesson-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.2rem;
        background: var(--bg-card);
        border: 1px solid var(--border-light);
        border-radius: 8px;
        transition: all 0.2s ease;
    }

    .lesson-item:not(.locked):hover {
        background: var(--bg-card-hover);
        border-color: var(--accent-gold);
        cursor: pointer;
    }

    .lesson-info {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .lesson-item.locked {
        opacity: 0.6;
    }

    .lesson-duration {
        color: var(--text-muted);
        font-size: 0.9rem;
    }

    .sidebar h3 {
        margin-bottom: 1.5rem;
        font-size: 1.3rem;
    }

    .features-list {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 2rem;
        color: var(--text-muted);
    }

    .features-list span {
        margin-right: 0.5rem;
    }

    .full-width-link {
        display: block;
        width: 100%;
    }
</style>
