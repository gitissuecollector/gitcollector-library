# gitcollector-library
JS Library for Git Issue Collector Project


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/gitissuecollector/gitcollector-library/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

## How to install ?
* Using NPM install the dependencies `npm install --save-dev`
* Using GruntJS to generate and compile the project `grunt`

These steps will generate the www-built folder

## How to test it ?
Open with your browser the index.html file and see if it works

## How to implement the library ?
```HTML
<script type="text/javascript">
        window.gcAsyncInit = function () {
            window.gcWidget = new GitCollector({
                username  : 'juansanzone',
                repository: 'github-php-client',
                text      : 'textito'
            });
        };

        (function () {
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = 'GitCollector.min.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode).insertBefore(s, null);
        })();
 </script>
 ```