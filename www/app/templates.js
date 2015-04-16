this["gcTemplates"] = this["gcTemplates"] || {};

this["gcTemplates"]["feedback.html"] = function(data) {var __t, __p = '', __e = _.escape;__p += '<style type="text/css">\n    div.gc-overlay {\n        display: block;\n        z-index: 99999998;\n        position: fixed;\n        width: 100%;\n        height: 100%;\n        background-color: rgba(0, 0, 0, 0.5);\n        top: 0;\n        left: 0;\n        transition: 0.3s ease-in all;\n    }\n    \n    div.gc-overlay.gc-hidden {\n        display: none;\n    }\n\n    button.gc-feedback {\n        position: fixed;\n        z-index: 99999999;\n        transform: rotate(90deg);\n        top: 50%;\n        right: 0;\n        background-color: #' +((__t = ( data.color )) == null ? '' : __t) +';\n        height: 54px;\n        line-height: 56px;\n        border: 0;\n        border-radius: 2px;\n        outline: 0;\n        padding: 0 2rem;\n        text-transform: uppercase;\n        text-decoration: none;\n        color: #FFF;\n        text-align: center;\n        letter-spacing: .5px;\n        -webkit-transition: .2s ease-out;\n        -moz-transition: .2s ease-out;\n        -o-transition: .2s ease-out;\n        -ms-transition: .2s ease-out;\n        transition: .2s ease-out;\n        cursor: pointer;\n        -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n        -moz-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n    }\n\n    div.gc-container {\n        position: fixed;\n        z-index: 99999999;\n        bottom: 30%;\n        width: 40%;\n        left: 30%;\n        height: 380px;\n        overflow: hidden;\n        border: 0;\n        border-radius: 2px;\n        background-color: white;\n        transition: 0.3s ease-in all;\n    }\n\n    div.gc-container a.close-button {\n        display: inline-block;\n        position: absolute;\n        top: 7px;\n        right: 7px;\n        font-size: 25px;\n        color: black;\n        font-family: "Verdana";\n        background-color: white;\n        padding-left: 5px;\n        padding-right: 5px;\n        border-radius: 5px;\n        line-height: 29px;\n    }\n\n    div.gc-container.gc-hidden {\n        bottom: -380px;\n    }\n\n    div.gc-container iframe {\n        display: block;\n        width: 100%;\n        height: 100%;\n    }\n</style>\n<div class="gc-overlay gc-hidden"></div>\n<div class="gc-container gc-hidden">\n    <a href="#" class="close-button">X</a>\n    <iframe src="http://' +((__t = ( data.src )) == null ? '' : __t) +'" frameborder="0"></iframe>\n</div>\n\n<button id="gc-feedback" class="gc-feedback">Feedback</button>';return __p};