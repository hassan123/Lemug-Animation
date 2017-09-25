<script>
    var wlsLoaderWrap = document.getElementById('pageloader'),
    wlsLoaderElem = document.getElementById('innerloader'),
    wlsLoaderCover = wlsLoaderElem.querySelector('.loader-title-cover'),
    wlsLoaderCompleted = false;

    function updateLoader (msg) {

    wlsLoaderProgress++;

    if (msg) {
    console.log(msg);
    }

    wlsLoaderElem.classList.add('progress-' +
    Math.min((Math.ceil(((wlsLoaderProgress / wlsLoaderTotal) * 100) / 5) * 5), 100));

    if (wlsLoaderProgress === wlsLoaderTotal && !wlsLoaderCompleted) {

    wlsLoaderCompleted = true;
    wlsLoaderCover.addEventListener('transitionend', function () {

    if (winLoaded) {
    setTimeout(function() {
    window.scrollTo(0,0);
    wlsLoaderWrap.classList.add('load-complete');
    document.body.classList.add('load-complete');
    document.dispatchEvent(new CustomEvent('loadcomplete'));
    }, 200);

    setTimeout(function () {
    if (!document.body.classList.contains('introduced')) {
    document.body.classList.add('introducing');
    }
    }, 400);
    } else {
    window.onload = function() {
    setTimeout(function() {
    window.scrollTo(0,0);
    wlsLoaderWrap.classList.add('load-complete');
    document.body.classList.add('load-complete');
    document.dispatchEvent(new CustomEvent('loadcomplete'));
    }, 200);

    setTimeout(function () {
    if (!document.body.classList.contains('introduced')) {
    document.body.classList.add('introducing');
    }
    }, 400);
    }
    }
    });
    }
    }

    function skipLoader () {
    wlsLoaderProgress = (wlsLoaderTotal - 1);
    updateLoader();
    }

    function loaderInit () {
    document.body.classList.add('loading');
    wlsLoaderWrap.className = 'init';

    wlsLoaderElem.addEventListener('animationend', function () {
    wlsLoaderWrap.className = 'init-complete';
    });
    }

    loaderInit();
    </script>