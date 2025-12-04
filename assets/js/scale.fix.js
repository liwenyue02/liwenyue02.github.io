(function(document) {
    var metas = document.getElementsByTagName('meta'),
        changeViewportContent = function(content) {
            for (var i = 0; i < metas.length; i++) {
                if (metas[i].name == "viewport") {
                    metas[i].content = content;
                }
            }
        },
        initialize = function() {
            changeViewportContent("width=device-width, minimum-scale=1.0, maximum-scale=1.0");
        },
        gestureStart = function() {
            changeViewportContent("width=device-width, minimum-scale=0.25, maximum-scale=1.6");
        },
        gestureEnd = function() {
            initialize();
        };


    if (navigator.userAgent.match(/iPhone/i)) {
        initialize();

        document.addEventListener("touchstart", gestureStart, false);
        document.addEventListener("touchend", gestureEnd, false);
    }
})(document);

// Name auto-switching functionality
(function() {
    function toggleNames() {
        var chineseName = document.getElementById('chinese-name');
        var englishName = document.getElementById('english-name');
        
        if (chineseName && englishName) {
            var chineseOpacity = chineseName.style.opacity;
            
            if (chineseOpacity === '' || chineseOpacity === '1') {
                // Switch to English
                chineseName.style.opacity = '0';
                englishName.style.opacity = '1';
            } else {
                // Switch to Chinese
                chineseName.style.opacity = '1';
                englishName.style.opacity = '0';
            }
        }
    }
    
    // Initial check to ensure elements exist before setting interval
    window.addEventListener('load', function() {
        var chineseName = document.getElementById('chinese-name');
        var englishName = document.getElementById('english-name');
        
        if (chineseName && englishName) {
            // Set interval to toggle names every 3 seconds
            setInterval(toggleNames, 3000);
        }
    });
})();

// Show more functionality
function toggle_vis(id) {
    var e = document.getElementById(id);
    if (e) {
        if (e.style.display === 'none' || e.style.display === '') {
            e.style.display = 'block';
        } else {
            e.style.display = 'none';
        }
    }
}
