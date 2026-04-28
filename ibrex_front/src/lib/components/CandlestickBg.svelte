<script>
    import { onMount } from 'svelte';
    
    let canvas;
    
    let mouseX = $state(-100);
    let mouseY = $state(-100);
    
    const handleMouseMove = (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
        mouseX = -100;
        mouseY = -100;
    };
    
    onMount(() => {
        const ctx = canvas.getContext('2d');
        let width, height;
        
        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };
        
        window.addEventListener('resize', resize);
        resize();
        
        // Candles data
        const candles = Array.from({ length: 80 }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            height: Math.random() * 80 + 20,
            width: Math.random() * 6 + 4,
            isGreen: Math.random() > 0.5,
            speed: Math.random() * 0.4 + 0.1,
            opacity: Math.random() * 0.15 + 0.02
        }));

        let time = 0;
        let animationFrame;
        
        const draw = () => {
            ctx.clearRect(0, 0, width, height);
            
            // 1. Draw Grid
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
            ctx.lineWidth = 1;
            for (let i = 0; i < width; i += 60) {
                ctx.beginPath();
                ctx.moveTo(i, 0);
                ctx.lineTo(i, height);
                ctx.stroke();
            }
            for (let i = 0; i < height; i += 60) {
                ctx.beginPath();
                ctx.moveTo(0, i);
                ctx.lineTo(width, i);
                ctx.stroke();
            }

            // 2. Draw Moving Average Line
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(212, 175, 55, 0.2)'; // Gold
            ctx.lineWidth = 3;
            for (let x = 0; x < width; x += 10) {
                // Sine wave combined with noise to look organic
                const y = height * 0.5 + Math.sin((x + time * 50) * 0.005) * 150 + Math.sin((x - time * 20) * 0.02) * 50;
                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();

            // Additional EMA Line (Greenish)
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(0, 200, 83, 0.15)'; 
            ctx.lineWidth = 2;
            for (let x = 0; x < width; x += 10) {
                const y = height * 0.5 + Math.sin((x + time * 30) * 0.004) * 120 + Math.sin((x - time * 10) * 0.015) * 40;
                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();

            // 3. Draw Candles
            candles.forEach(c => {
                c.y -= c.speed;
                if (c.y + c.height < 0) {
                    c.y = height + 10;
                    c.x = Math.random() * width;
                }
                
                ctx.fillStyle = c.isGreen ? `rgba(0, 200, 83, ${c.opacity})` : `rgba(213, 0, 0, ${c.opacity})`;
                
                // Wick
                ctx.fillRect(c.x + c.width/2 - 0.5, c.y - 15, 1, c.height + 30);
                // Body
                ctx.fillRect(c.x, c.y, c.width, c.height);
            });

            // 4. Draw Volume Bars at bottom
            const volBarWidth = 10;
            const volSpacing = 15;
            for(let x = 0; x < width; x += volSpacing) {
                // Pseudo-random volume height moving over time
                const volHeight = 20 + Math.abs(Math.sin((x + time * 100) * 0.05)) * 80 + Math.random() * 20;
                const isVolGreen = Math.sin((x + time * 50) * 0.1) > 0;
                
                ctx.fillStyle = isVolGreen ? 'rgba(0, 200, 83, 0.05)' : 'rgba(213, 0, 0, 0.05)';
                ctx.fillRect(x, height - volHeight, volBarWidth, volHeight);
            }

            // 5. Draw Price Axis on Right
            ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
            ctx.font = '12px Inter, sans-serif';
            ctx.textAlign = 'right';
            const basePrice = 1.09000;
            for (let y = 60; y < height; y += 60) {
                // Dynamic prices that slowly shift
                const price = (basePrice + (height/2 - y + Math.sin(time) * 10) * 0.0001).toFixed(5);
                ctx.fillText(price, width - 20, y);
                
                // Axis tick
                ctx.fillRect(width - 15, y - 4, 15, 1);
            }

            // 6. Draw Crosshair if mouse is active
            if (mouseX > 0 && mouseY > 0) {
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
                ctx.setLineDash([5, 5]);
                ctx.lineWidth = 1;
                
                // Vertical line
                ctx.beginPath();
                ctx.moveTo(mouseX, 0);
                ctx.lineTo(mouseX, height);
                ctx.stroke();
                
                // Horizontal line
                ctx.beginPath();
                ctx.moveTo(0, mouseY);
                ctx.lineTo(width, mouseY);
                ctx.stroke();
                
                ctx.setLineDash([]);
            }
            
            time += 0.05;
            animationFrame = requestAnimationFrame(draw);
        };
        
        draw();
        
        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrame);
        };
    });
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div 
    class="canvas-container" 
    onmousemove={handleMouseMove} 
    onmouseleave={handleMouseLeave}
>
    <canvas bind:this={canvas} class="candlestick-bg"></canvas>
    <div class="overlay"></div>
</div>

<style>
    .canvas-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        overflow: hidden;
    }

    .candlestick-bg {
        width: 100%;
        height: 100%;
        display: block;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        /* Dark gradient from right-to-left and bottom-to-top to ensure text readability */
        background: radial-gradient(circle at center, transparent 0%, var(--bg-deep-black) 100%),
                    linear-gradient(to right, rgba(11, 11, 11, 0.9) 0%, rgba(11, 11, 11, 0.4) 50%, rgba(11, 11, 11, 0.2) 100%);
        pointer-events: none;
    }
</style>
