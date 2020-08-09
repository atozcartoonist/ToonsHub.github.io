function externalLinks() {   for(var c = document.getElementsByTagName("a"), a = 0;a < c.length;a++) {     var b = c[a];     b.getAttribute("href") && b.hostname !== location.hostname && (b.target = "_blank")   } } ; externalLinks();
jQuery(document.links)   .filter(function() {     return this.hostname != window.location.hostname;   })     .attr('target', '_blank');    
/*function check(e)
    {
    alert(e.keyCode);
    }*/
    document.onkeydown = function(e) {
            if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {//Alt+c, Alt+v will also be disabled sadly.
              
            }
            return false;
    };
        // window.addEventListener("DOMContentLoaded",function(){
            function stopPrntScr() {
                var inpFld = document.createElement("input");
                inpFld.setAttribute("value", "Access Denied");
                inpFld.setAttribute("width", "0");
                inpFld.style.height = "0px";
                inpFld.style.width = "0px";
                inpFld.style.border = "0px";
                document.body.appendChild(inpFld);
                inpFld.select();
                document.execCommand("copy");
                inpFld.remove(inpFld);
            }

            (function ($) {
                'use strict';
                $(function () {
                    let all = $('*').not('script, meta, link, style, noscript, title'),
                        tooltip = $('#ays_tooltip'),
                        tooltipClass = "mouse";
                    if (tooltipClass == "mouse") {
    	                                        all.on('mousemove', function (e) {
                            let cordinate_x = e.pageX;
                            let cordinate_y = e.pageY;
                            let windowWidth = $(window).width();
                            if (cordinate_y < tooltip.outerHeight()) {
                                tooltip.css({'top': (cordinate_y + 10) + 'px'});
                            } else {
                                tooltip.css({'top': (cordinate_y - tooltip.outerHeight()) + 'px'});
                            }
                            if (cordinate_x > (windowWidth - tooltip.outerWidth())) {
                                tooltip.css({'left': (cordinate_x - tooltip.outerWidth()) + 'px'});
                            } else {
                                tooltip.css({'left': (cordinate_x + 5) + 'px'});
                            }

                        });
    	                                    } else {
                        tooltip.addClass(tooltipClass);
                    }
    				                    $(window).on('keyup', function (e) {
                        let keyCode = e.keyCode ? e.keyCode : e.which;
                        if (keyCode == 44) {
                            stopPrntScr();
                            show_tooltip(1 );
                            audio_play();
                        }
                    });
    				

    				                    $(document).on('contextmenu', function (e) {
                        let t = e || window.event;
                        let n = t.target || t.srcElement;
                        if (n.nodeName !== "A") {
                            show_tooltip(1 );
                            audio_play();
                        }
                        return false;
                    });
    	            
    	            
    				                    $(document).on('dragstart', function () {
                        show_tooltip(1 );
                        audio_play();
                        return false;
                    });
    				
    				
                    $(window).on('keydown', function (event) {
                        var isOpera = (BrowserDetect.browser === "Opera");

                        var isFirefox = (BrowserDetect.browser === 'Firefox');

                        var isSafari = (BrowserDetect.browser === 'Safari');

                        var isIE = (BrowserDetect.browser === 'Explorer');
                        var isChrome = (BrowserDetect.browser === 'Chrome');
                        var isMozilla = (BrowserDetect.browser === 'Mozilla');

                        if (BrowserDetect.OS === 'Windows') {
    						                            if (isChrome) {
                                if (((event.ctrlKey && event.shiftKey) && (
                                    event.keyCode === 73 ||
                                    event.keyCode === 74 ||
                                    event.keyCode === 68 ||
                                    event.keyCode === 67))) {
                                    show_tooltip(1);
                                    audio_play();
                                    return false;
                                }
                            }
                            if (isFirefox) {
                                if (((event.ctrlKey && event.shiftKey) && (
                                    event.keyCode === 73 ||
                                    event.keyCode === 74 ||
                                    event.keyCode === 67 ||
                                    event.keyCode === 75 ||
                                    event.keyCode === 69)) ||
                                    event.keyCode === 118 ||                                    
                                    (event.keyCode === 112 && event.shiftKey) ||
                                    (event.keyCode === 115 && event.shiftKey) ||
                                    (event.keyCode === 118 && event.shiftKey) ||
                                    (event.keyCode === 120 && event.shiftKey)) {
                                    show_tooltip(1);
                                    audio_play();
                                    return false;
                                }
                            }
                            if (isOpera) {
                                if (((event.ctrlKey && event.shiftKey) && (
                                    event.keyCode === 73 ||
                                    event.keyCode === 74 ||
                                    event.keyCode === 67 ||
                                    event.keyCode === 88 ||
                                    event.keyCode === 69))) {
                                    show_tooltip(1);
                                    audio_play();
                                    return false;
                                }
                            }
                            if (isIE) {
                                if ((event.keyCode === 123 && event.shiftKey)) {
                                    show_tooltip(1);
                                    audio_play();
                                    return false;
                                }
                            }                         
                            if (isMozilla) {
                                if ((event.ctrlKey && event.keyCode === 73) || 
                                    (event.altKey && event.keyCode === 68)) {
                                    show_tooltip(1);
                                    audio_play();
                                    return false;
                                }
                            }
    						
    						                            if ((event.keyCode === 83 && event.ctrlKey)) {
                                show_tooltip(1);
                                audio_play();
                                return false;
                            }
    						
    						                            if ((event.keyCode === 65 && event.ctrlKey)) {

                                                                    show_tooltip(1);
                                    audio_play();
                                    return false;
                                                            }
    						
    						                            if (event.keyCode === 67 && event.ctrlKey && !event.shiftKey) {
                                                                    show_tooltip(1);
                                    audio_play();
                                    return false;
                                                            }
    						
    						                            if ((event.keyCode === 86 && event.ctrlKey)) {
                                                                    show_tooltip(1);
                                    audio_play();
                                    return false;
                                                            }
    						
    						                            if ((event.keyCode === 88 && event.ctrlKey)) {
                                                                    show_tooltip(1 );
                                    audio_play();
                                    return false;
                                                            }
    						
    						                            if ((event.keyCode === 85 && event.ctrlKey)) {
                                show_tooltip(1 );
                                audio_play();
                                return false;
                            }
    						
    						                            if ((event.keyCode === 70 && event.ctrlKey) || (event.keyCode === 71 && event.ctrlKey)) {
                                show_tooltip(1 );
                                audio_play();
                                return false;
                            }
    						
    						
                            
                            
                            
                            
                            
                            
    						                            if (event.keyCode === 123 || (event.keyCode === 123 && event.shiftKey)) {
                                show_tooltip(1);
                                audio_play();
                                return false;
                            }
    						                        } else if (BrowserDetect.OS === 'Linux') {
    						                            if (isChrome) {
                                if (
                                    (
                                        (event.ctrlKey && event.shiftKey) &&
                                        (event.keyCode === 73 ||
                                            event.keyCode === 74 ||
                                            event.keyCode === 67
                                        )
                                    ) ||
                                    (event.ctrlKey && event.keyCode === 85)
                                ) {
                                    show_tooltip(1);
                                    audio_play();
                                    return false;
                                }
                            }
                            if (isFirefox) {
                                if (((event.ctrlKey && event.shiftKey) && (event.keyCode === 73 || event.keyCode === 74 || event.keyCode === 67 || event.keyCode === 75 || event.keyCode === 69)) || event.keyCode === 118 || event.keyCode === 116 || (event.keyCode === 112 && event.shiftKey) || (event.keyCode === 115 && event.shiftKey) || (event.keyCode === 118 && event.shiftKey) || (event.keyCode === 120 && event.shiftKey) || (event.keyCode === 85 && event.ctrlKey)) {
                                    show_tooltip(1);
                                    audio_play();
                                    return false;
                                }
                            }
                            if (isOpera) {
                                if (((event.ctrlKey && event.shiftKey) && (event.keyCode === 73 || event.keyCode === 74 || event.keyCode === 67 || event.keyCode === 88 || event.keyCode === 69)) || (event.ctrlKey && event.keyCode === 85)) {
                                    show_tooltip(1);
                                    audio_play();
                                    return false;
                                }
                            }
    						
    						                            if ((event.keyCode === 83 && event.ctrlKey)) {
                                show_tooltip(1);
                                audio_play();
                                return false;
                            }
    						
    						                            if (event.keyCode === 65 && event.ctrlKey) {
                                                                    show_tooltip(1);
                                    audio_play();
                                    return false;
                                                            }
    						
    						                            if (event.keyCode === 67 && event.ctrlKey && !event.shiftKey) {
                                                                    show_tooltip(1);
                                    audio_play();
                                    return false;
                                                            }
    						
    						                            if ((event.keyCode === 86 && event.ctrlKey)) {
                                                                    show_tooltip(1);
                                    audio_play();
                                    return false;
                                                            }
    						
    						                            if ((event.keyCode === 88 && event.ctrlKey)) {
                                                                    show_tooltip(1);
                                    audio_play();
                                    return false;
                                                            }
    						
    						                            if ((event.keyCode === 85 && event.ctrlKey)) {
                                show_tooltip(1 );
                                audio_play();
                                return false;
                            }
    						
    						                            if ((event.keyCode === 70 && event.ctrlKey) || (event.keyCode === 71 && event.ctrlKey)) {
                                show_tooltip(1 );
                                audio_play();
                                return false;
                            }
    						
    						
                            
                            
                            
                            
                            
                            
    						                            if (event.keyCode === 123 || (event.keyCode === 123 && event.shiftKey)) {
                                show_tooltip(1);
                                audio_play();
                                return false;
                            }
    						                        } else if (BrowserDetect.OS === 'Mac') {
    						                            if (isChrome || isSafari || isOpera || isFirefox) {
                                if (event.metaKey && (
                                    event.keyCode === 73 ||
                                    event.keyCode === 74 ||
                                    event.keyCode === 69 ||
                                    event.keyCode === 75)) {
                                    show_tooltip(1);
                                    audio_play();
                                    return false;
                                }
                            }
    						
    						                            if ((event.keyCode === 83 && event.metaKey)) {
                                show_tooltip(1);
                                audio_play();
                                return false;
                            }
    						
    						                            if ((event.keyCode === 65 && event.metaKey)) {
                                                                    show_tooltip(1);
                                    audio_play();
                                    return false;
                                                            }
    						
    						                            if ((event.keyCode === 67 && event.metaKey)) {
                                                                    show_tooltip(1);
                                    audio_play();
                                    return false;
                                                            }
    						
    						                            if ((event.keyCode === 86 && event.metaKey)) {
                                                                    show_tooltip(1);
                                    audio_play();
                                    return false;
                                                            }
    						
    						                            if ((event.keyCode === 88 && event.metaKey)) {
                                                                    show_tooltip(1);
                                    audio_play();
                                    return false;
                                                            }
    						
    						                            if ((event.keyCode === 85 && event.metaKey)) {
                                show_tooltip(1 );
                                audio_play();
                                return false;
                            }
    						
    						                            if ((event.keyCode === 70 && event.metaKey) || (event.keyCode === 71 && event.metaKey)) {
                                show_tooltip(1 );
                                audio_play();
                                return false;
                            }
    						
    						
                            
                            
                            
                            
                            
                            
    						                            if (event.keyCode === 123) {
                                show_tooltip(1);
                                audio_play();
                                return false;
                            }
    						                        }
                    });

                    function disableSelection(e) {
                        if (typeof e.onselectstart !== "undefined")
                            e.onselectstart = function () {
                                show_tooltip( );
                                audio_play();
                                return false
                            };
                        else if (typeof e.style.MozUserSelect !== "undefined")
                            e.style.MozUserSelect = "none";
                        else e.onmousedown = function () {
                                show_tooltip();
                                audio_play();
                                return false
                            };
                        e.style.cursor = "default"
                    }

                    function show_tooltip(mess) {
                        if (mess) {
                            tooltip.css({'display': 'table'});
                            setTimeout(function () {
                                $('#ays_tooltip').fadeOut(500);
                            }, 1000);
                        }
                    }

                    function audio_play(audio) {
                        if (audio) {
                            var audio = document.getElementById("sccp_public_audio");
                            if (audio) {
                                audio.currentTime = 0;
                                audio.play();
                            }

                        }
                    }


                });
            })(jQuery);

            var BrowserDetect = {
                init: function () {
                    this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
                    this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
                    this.OS = this.searchString(this.dataOS) || "an unknown OS";
                },
                searchString: function (data) {
                    for (var i = 0; i < data.length; i++) {
                        var dataString = data[i].string;
                        var dataProp = data[i].prop;
                        this.versionSearchString = data[i].versionSearch || data[i].identity;
                        if (dataString) {
                            if (dataString.indexOf(data[i].subString) !== -1) return data[i].identity;
                        } else if (dataProp) return data[i].identity;
                    }
                },
                searchVersion: function (dataString) {
                    var index = dataString.indexOf(this.versionSearchString);
                    if (index === -1) return;
                    return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
                },
                dataBrowser: [{
                    string: navigator.userAgent,
                    subString: "Chrome",
                    identity: "Chrome"
                }, {
                    string: navigator.userAgent,
                    subString: "OmniWeb",
                    versionSearch: "OmniWeb/",
                    identity: "OmniWeb"
                }, {
                    string: navigator.vendor,
                    subString: "Apple",
                    identity: "Safari",
                    versionSearch: "Version"
                }, {
                    prop: window.opera,
                    identity: "Opera",
                    versionSearch: "Version"
                }, {
                    string: navigator.vendor,
                    subString: "iCab",
                    identity: "iCab"
                }, {
                    string: navigator.vendor,
                    subString: "KDE",
                    identity: "Konqueror"
                }, {
                    string: navigator.userAgent,
                    subString: "Firefox",
                    identity: "Firefox"
                }, {
                    string: navigator.vendor,
                    subString: "Camino",
                    identity: "Camino"
                }, { // for newer Netscapes (6+)
                    string: navigator.userAgent,
                    subString: "Netscape",
                    identity: "Netscape"
                }, {
                    string: navigator.userAgent,
                    subString: "MSIE",
                    identity: "Explorer",
                    versionSearch: "MSIE"
                }, {
                    string: navigator.userAgent,
                    subString: "Gecko",
                    identity: "Mozilla",
                    versionSearch: "rv"
                }, { // for older Netscapes (4-)
                    string: navigator.userAgent,
                    subString: "Mozilla",
                    identity: "Netscape",
                    versionSearch: "Mozilla"
                }],
                dataOS: [{
                    string: navigator.platform,
                    subString: "Win",
                    identity: "Windows"
                }, {
                    string: navigator.platform,
                    subString: "Mac",
                    identity: "Mac"
                }, {
                    string: navigator.userAgent,
                    subString: "iPhone",
                    identity: "iPhone/iPod"
                }, {
                    string: navigator.platform,
                    subString: "Linux",
                    identity: "Linux"
                }]
            };
            BrowserDetect.init();
        // }, false);
