function GitCollector(username, repository, color, textcolor) {
    this.loaded = false;
    this.templates = window.gcTemplates;
    this.username = username;
    this.repository = repository;
    this.color = color;
    this.textColor = textcolor;

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
