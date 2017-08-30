(function () {
    window.addEventListener('load', function () {
        var stewieContainer = document.getElementsByClassName('mod-stewie')[0];
        var stewieSwitchDrunk = document.getElementsByClassName('onoffswitch-inner')[0];
        var triggerDrunk = document.getElementById('js-state-change-drunk');
        var triggerHeadphones = document.getElementById('js-state-change-headphones');
        var triggerGlasses = document.getElementById('js-state-change-glasses');
        var triggerMustache = document.getElementById('js-state-change-mustache');
        var triggerHat = document.getElementById('js-state-change-hat');
        var stateDrunk = ' state-mod-stewie--drunk';
        var stateEyeMovement = ' state-mod-stewie--eye-movement';
        var stateHeadphones = ' state-mod-stewie--with-headphones';
        var stateGlasses = ' state-mod-stewie--with-glasses';
        var stateMustache = ' state-mod-stewie--with-mustache';
        var stateHat = ' state-mod-stewie--with-hat';


        var checkIfSwitchIsOn = function () {
            if (stewieSwitchDrunk.className.indexOf('off') > -1) {
                return false;
            } else {
                return true;
            }
        };


        var checkIfStewieIsDrunk = function () {
            if (stewieContainer.className.indexOf(stateDrunk) === -1) {
                return false;
            } else {
                return true;
            }
        };

        var checkIfStewieHasHeadphones = function () {
            if (stewieContainer.className.indexOf(stateHeadphones) === -1) {
                return false;
            } else {
                return true;
            }
        };

        var checkIfStewieHasGlasses = function () {
            if (stewieContainer.className.indexOf(stateGlasses) === -1) {
                return false;
            } else {
                return true;
            }
        };

        var checkIfStewieHasMustache = function () {
            if (stewieContainer.className.indexOf(stateMustache) === -1) {
                return false;
            } else {
                return true;
            }
        };

        var checkIfStewieHasHat = function () {
            if (stewieContainer.className.indexOf(stateHat) === -1) {
                return false;
            } else {
                return true;
            }
        };


        var removeStateDrunk = function () {
            stewieContainer.className = stewieContainer.className.replace(stateDrunk, '');
        };

        var removeStateEyeMovement = function () {
            stewieContainer.className = stewieContainer.className.replace(stateEyeMovement, '');
        };

        var removeStateHeadphones = function () {
            stewieContainer.className = stewieContainer.className.replace(stateHeadphones, '');
        };

        var removeStateGlasses = function () {
            stewieContainer.className = stewieContainer.className.replace(stateGlasses, '');
        };

        var removeStateMustache = function () {
            stewieContainer.className = stewieContainer.className.replace(stateMustache, '');
        };

        var removeStateHat = function () {
            stewieContainer.className = stewieContainer.className.replace(stateHat, '');
        };


        var addStateDrunk = function () {
            stewieContainer.className += stateDrunk;
        };

        var addStateEyeMovement = function () {
            stewieContainer.className += stateEyeMovement;
        };

        var addStateHeadphones = function () {
            stewieContainer.className += stateHeadphones;
        };

        var addStateGlasses = function () {
            stewieContainer.className += stateGlasses;
        };

        var addStateMustache = function () {
            stewieContainer.className += stateMustache;
        };

        var addStateHat = function () {
            stewieContainer.className += stateHat;
        };


        addStateEyeMovement();


        triggerDrunk.addEventListener('click', function () {

            var resultOfTheFunction = checkIfStewieIsDrunk();


            if (!checkIfStewieIsDrunk()) {
                removeStateEyeMovement();
                addStateDrunk();
                console.log(stewieContainer.className, 'if');
            } else {
                removeStateDrunk();
                addStateEyeMovement();
                console.log(stewieContainer.className, 'else');
            }


        });

        triggerHeadphones.addEventListener('click', function () {

            if (!checkIfStewieHasHeadphones()) {
                addStateHeadphones();
            } else {
                removeStateHeadphones();
            }


        });

        triggerGlasses.addEventListener('click', function () {

            if (!checkIfStewieHasGlasses()) {
                addStateGlasses();
            } else {
                removeStateGlasses();
            }


        });

        triggerMustache.addEventListener('click', function () {

            if (!checkIfStewieHasMustache()) {
                addStateMustache();
            } else {
                removeStateMustache();
            }


        });

        triggerHat.addEventListener('click', function () {

            if (!checkIfStewieHasHat()) {
                addStateHat();
            } else {
                removeStateHat();
            }


        });



    });


})();

