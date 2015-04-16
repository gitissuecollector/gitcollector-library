function GitCollector(params) {
    this.loaded = false;
    this.templates = window.gcTemplates;
    this.username = params.username;
    this.repository = params.repository;
    this.color = _.isUndefined(params.color) ? '000000' : params.color;
    this.textColor = _.isUndefined(params.textColor) ? '000000' : params.textColor;

    this.src = "gitcollector.com/" + [this.username, this.repository, this.color/*, this.textColor*/].join('/');

    this.init();
}

GitCollector.prototype.toggle = function () {
    var $overlay = gcHelper.getElementsByClassName('gc-overlay')[0];
    var $container = gcHelper.getElementsByClassName('gc-container')[0];

    if ($overlay.classList.contains("gc-hidden") && $container.classList.contains("gc-hidden")) {
        $overlay.classList.remove("gc-hidden");
        $container.classList.remove("gc-hidden");
    } else {
        $overlay.classList.add("gc-hidden");
        $container.classList.add("gc-hidden");
    }
};

GitCollector.prototype.init = function () {
    var self = this;

    try {
        var html = this.templates['feedback.html'](this);
        document.body.innerHTML += html;

        document.getElementById('gc-feedback').addEventListener('click', function () {
            self.toggle();
        });

        gcHelper.getElementsByClassName('gc-overlay')[0].addEventListener('click', function () {
            self.toggle();
        });

        gcHelper.getElementsByClassName('close-button')[0].addEventListener('click', function () {
            self.toggle();
            return false;
        });

        this.loaded = true;
    } catch (error) {
        this.loaded = false;
        console.error(error);
    }
};

if (!_.isUndefined(window.gcAsyncInit())) {
    window.gcAsyncInit();
}
