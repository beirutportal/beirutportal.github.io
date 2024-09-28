$(document).ready(function() {
    function updateGreeting() {
        var today = new Date();
        var hour = today.getHours();
        var greeting;
        
        if (hour >= 6 && hour < 12) {
            greeting = "☀️ Good morning";
            $('body').removeClass('night-time');
            $(".background-main").attr("src", "/assets/bg.webp")
        } else if (hour >= 12 && hour < 18) {
            greeting = "🌤️ Good afternoon";
            $('body').removeClass('night-time');
            $(".background-main").attr("src", "/assets/bg.webp")
        } else {
            greeting = "🌙 Good evening";
            $('body').addClass('night-time');
            $(".background-main").attr("src", "https://images.unsplash.com/photo-1562335461-74e9dade959f?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
        }

        $('.greeting-text').text(greeting);
    }


    updateGreeting();
});