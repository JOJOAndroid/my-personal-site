document.addEventListener("DOMContentLoaded", function() {
    // 动态加载header和footer
    document.getElementById("header").innerHTML = `
        <header>
            <nav>
                <ul>
                    <li><a href="index.html">首页</a></li>
                    <li><a href="economy.html">经济</a></li>
                    <li><a href="real-estate.html">地产</a></li>
                    <li><a href="study.html">学习记录</a></li>
                    <li><a href="movies.html">电影分享</a></li>
                    <li><a href="books.html">书籍分享</a></li>
                    <li><a href="sports.html">运动分享</a></li>
                </ul>
            </nav>
        </header>
    `;
    
    document.getElementById("footer").innerHTML = `
        <footer>
            <p>&copy; 2025 我的个人网站</p>
        </footer>
    `;
});
