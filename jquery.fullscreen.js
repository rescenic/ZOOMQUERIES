(function() {
    function c(g) {
        var i, f, h;
        if (!this.length) {
            return this
        }
        i = (this[0]);
        if (i.ownerDocument) {
            h = i.ownerDocument
        } else {
            h = i;
            i = h.documentElement
        }
        if (g == null) {
            if (!((h.cancelFullScreen) || (h.webkitCancelFullScreen) || (h.mozCancelFullScreen))) {
                return null
            }
            g = !!h.fullScreen || !!h.webkitIsFullScreen || !!h.mozFullScreen;
            if (!g) {
                return g
            }
            return (h.fullScreenElement) || (h.webkitCurrentFullScreenElement) || (h.mozFullScreenElement) || g
        }
        if (g) {
            f = (i.requestFullScreen) || (i.webkitRequestFullScreen) || (i.mozRequestFullScreen);
            if (f) {
                if (Element.ALLOW_KEYBOARD_INPUT) {
                    f.call(i, Element.ALLOW_KEYBOARD_INPUT)
                } else {
                    f.call(i)
                }
            }
            return this
        } else {
            f = (h.cancelFullScreen) || (h.webkitCancelFullScreen) || (h.mozCancelFullScreen);
            if (f) {
                f.call(h)
            }
            return this
        }
    }

    function e() {
        return (c.call(this, !c.call(this)))
    }

    function b(f) {
        jQuery(document).trigger(new jQuery.Event("fullscreenchange"))
    }

    function d(f) {
        jQuery(document).trigger(new jQuery.Event("fullscreenerror"))
    }

    function a() {
        var g, h, f;
        g = document;
        if (g.webkitCancelFullScreen) {
            h = "webkitfullscreenchange";
            f = "webkitfullscreenerror"
        } else {
            if (g.mozCancelFullScreen) {
                h = "mozfullscreenchange";
                f = "mozfullscreenerror"
            } else {
                h = "fullscreenchange";
                f = "fullscreenerror"
            }
        }
        jQuery(document).bind(h, b);
        jQuery(document).bind(f, d)
    }
    jQuery.fn.fullScreen = c;
    jQuery.fn.toggleFullScreen = e;
    a()
})();