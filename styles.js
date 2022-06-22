function getOS() {
    var userOS;
    var userOSver;

    var ua = navigator.userAgent;
    var uaindex;

    // The iOS check
    if (ua.match(/iPad/i) || ua.match(/iPhone/i) || ua.match(/iPod/i)) {
        // get position of "OS" (which will give us the OS version)
        uaindex = ua.indexOf('OS ');
        // not sure what i did here but it only reports the major version now
        // (which is what we want)
        userOSver = ua.substr(uaindex + 2, 3).replace('_', '');
    } else {
        return 0;
    }

    return parseInt(userOSver);
}

function setUX(version) {
    if (window.screen.width >= 768 && version < 7) {
        document.getElementById("styles").href = "./res/iOS5-ipad.css";
    } else {
        if (version == 6) {
            document.getElementById("styles").href = "./res/iOS6.css";
        } else if (version > 6) {
            document.getElementById("styles").href = "./res/iOS7.css";
        } else {
            document.getElementById("styles").href = "./res/iOS5.css";
        }
    }
}
