var gcHelper = {};

gcHelper.ajaxCall = function (method, url, callBack, params) {
    if (window.XDomainRequest) {
        var xdr = new XDomainRequest();

        if (xdr) {
            xdr.onload = function () {
                callBack(xdr.responseText, params);
            };

            xdr.open(method, url, true);
            xdr.send();
        }
    } else {
        var xmlhttp;

        if (!window.XMLHttpRequest) {
            // code for IE6, IE5
            try {
                xmlhttp = new ActiveXObject("MSXML2.XMLHTTP");
            } catch (ex) {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
            }
        } else {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
                callBack(xmlhttp.responseText, params);
            }
        };


        xmlhttp.open(method, url, true);
        xmlhttp.send();
    }
};

gcHelper.getElementsByClassName = function (cl) {
    var retnode = [];
    var elem = document.getElementsByTagName('*');
    for (var i = 0; i < elem.length; i++) {
        if ((' ' + elem[i].className + ' ').indexOf(' ' + cl + ' ') > -1) retnode.push(elem[i]);
    }
    return retnode;
};

gcHelper.generateQueryString = function (foo) {
    return _.reduce(_.map(foo, function (value, key) {
        return key + "=" + value;
    }), function (memo, value) {
        return memo + "&" + value;
    });
};

gcHelper.getElementData = function (element) {
    var data = {};

    _.each(element.attributes, function (att) {
        if (!_.isUndefined(att.nodeName) && _.contains(att.nodeName.split('-'), "data")) {
            var name = att.nodeName.replace('data-', '');
            data[name] = att.value;
        }
    });

    return data;
};
