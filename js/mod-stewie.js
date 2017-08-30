(function() {
    window.addEventListener('load', function() {
        var stewieContainer = document.getElementsByClassName('mod-stewie')[0];
        var triggerDrunk    = document.getElementById('js-state-change-drunk');

        triggerDrunk.addEventListener('click', function() {

            if (stewieContainer.className.indexOf('state-mod-stewie--drunk') === -1) {
                stewieContainer.className += ' state-mod-stewie--drunk';
            } else {
                var temp = stewieContainer.className;
                var temp2 = temp.replace('state-mod-stewie--drunk', '');
                stewieContainer.className = temp2;
            }
        })
    });
})();

