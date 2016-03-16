if (typeof Windows !== 'undefined') {
    var proximityDevice = Windows.Networking.Proximity.ProximityDevice.getDefault();

    if (proximityDevice != null) {
        proximityDevice.addEventListener("devicearrived", function (obj) {

            console.log('I have arrived at the device')

        }, false);
        proximityDevice.addEventListener("devicedeparted", function () {

            console.log('i have departed from the device');

        }, false);
    }


   }






