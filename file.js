// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 按钮点击效果
document.querySelector('.cta-button').addEventListener('click', function() {
    alert('感谢你的兴趣！');
});

// 页面加载完成提示
window.addEventListener('load', function() {
    console.log('网站加载完成！');
});
