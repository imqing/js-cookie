var Cookie = {
    set : function (name, value, domain, path, expires, unescape) {
        document.cookie = name + "=" + (unescape ? value : escape(value)) + ((expires) ? "; expires=" + expires.toGMTString() : "") + ((path) ? "; path=" + path : "; path=/") + ((domain) ? "; domain=" + domain : "");
    },
    get : function (name) {
        var a = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
        if (a != null) {
            return unescape(a[2])
        }
        return undefined;
    },
    remove : function (name, path, domain) {
        if (this.get(name) != undefined) {
            document.cookie = name + "=" + ((path) ? "; path=" + path : "; path=/") + ((domain) ? "; domain=" + domain : "") + ";expires=Fri, 02-Jan-1970 00:00:00 GMT"
        }
    }
};
