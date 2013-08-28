(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

// TODO: cookie domain should be false and a different UA code should be used when deployed to production. 
//  is there an easy way in django to expose to a view which environment the application is deployed to?
ga('create', 'UA-37331371-3', 'umich.edu');
//ga('create', 'UA-37331371-3');
//ga('create', 'UA-37331371-3', {
//    'cookieDomain': 'none' 
//});

var ecoach = {};

jQuery(document).ready(function($) {
    ecoach.navigation.initResponsiveNavs();
    ecoach.navigation.initNavBehaviors();
    ecoach.util.logEvent(true);
});

!function ($) {
    ecoach.navigation = {
        initResponsiveNavs: function() {
            $(window).on("resize load", function () {
                if ($(window).width() < 768) {
                    $(".side-list-items").addClass("collapse");
                    $("#side-col li.nav-header").show();
                    $("#side-col h3").hide();
                } 
                else {
                    $(".side-list-items").removeClass("collapse");
                    $("#side-col h3").show();
                }
                if ($(window).width() <= 979) {
                    $(".nav-dropdown ul").addClass("dropdown-menu");
                } 
                else {
                    $(".nav-dropdown ul").removeClass("dropdown-menu");
                }
            });
        },
        initNavBehaviors: function() {
            $(".nav-header").click(function() {
                $(".icon-chevron-up, .icon-chevron-down", this).toggle();
            });  

            $(".dropdown-menu a").click(function(event){
                event.stopPropagation();
            });
        }
    };
    ecoach.util = {
        // handles pushing log events both to our internal logging api and google analytics
        logEvent: function(pageview, elog, json) {
            elog = elog || {}
            // configure data
            var locationWithHash = (window.location.pathname + window.location.search + window.location.hash);
            var href = "{% url 'mylogger:what_log' %}";
            $.ajax({
                //TODO: change this to POST once you have a working endpoint
                type: "GET", 
                url: href,
                data: { 
                    url: locationWithHash,
                    category: elog.eventCategory || 'no-category',
                    action: elog.eventAction || 'no-action',
                    label: elog.eventLabel || 'no-label',
                    value: elog.eventValue || 0,
                    json: json || '{}'
                }
            });
            //NOTE: per GA terms of service username cannot be sent to GA 
            if (pageview){
                ga('send', 'pageview', {
                    'page': locationWithHash
                });
            }
            if (elog){
                ga('send', 'event', elog);
            }
        }
    };
}(window.jQuery);


