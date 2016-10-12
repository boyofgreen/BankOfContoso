//if (e.detail.kind === Windows.ApplicationModel.Activation.ActivationKind.launch) {

    var proximityDevice = Windows.Networking.Proximity.ProximityDevice.getDefault();

    if (proximityDevice != null) {
        proximityDevice.addEventListener("devicearrived", function (obj) {

            console.log('I have arrived at the device')

        }, false);
        proximityDevice.addEventListener("devicedeparted", function () {

            console.log('i have departed from the device');

        }, false);
    }




























    //if (typeof Windows !== undefined) {
    //    var notifications = Windows.UI.Notifications;
    //    var template = notifications.ToastTemplateType.toastImageAndText01;
    //    var toastXml = notifications.ToastNotificationManager.getTemplateContent(template);
    //    var toastTextElements = toastXml.getElementsByTagName("text");
    //    toastTextElements[0].appendChild(toastXml.createTextNode("This is the message for my toast"));
    //    var toastImageElements = toastXml.getElementsByTagName("image");
    //    toastImageElements[0].setAttribute("src", "https://unsplash.it/150/150/?random");
    //    toastImageElements[0].setAttribute("alt", "random graphic");
    //    var toast = new notifications.ToastNotification(toastXml);
    //    var toastNotifier = notifications.ToastNotificationManager.createToastNotifier();
    //    toastNotifier.show(toast);
    //}














//
// Register a background task with the specified taskEntryPoint, name, trigger,
// and condition (optional).
//
// taskEntryPoint: Task entry point for the background task.
// taskName: A name for the background task.
// trigger: The trigger for the background task.
// condition: Optional parameter. A conditional event that must be true for the task to fire.
//
function RegisterBackgroundTask(taskEntryPoint, taskName, trigger, condition) {
    //
    // Check for existing registrations of this background task.
    //

    var taskRegistered = false;

    var background = Windows.ApplicationModel.Background;
    var iter = background.BackgroundTaskRegistration.allTasks.first();
    var hascur = iter.hasCurrent;

    while (hascur) {
        var cur = iter.current.value;

        if (cur.name === taskName) {
            taskRegistered = true;
            break;
        }

        hascur = iter.moveNext();
    }


    //
    // If the task is already registered, return the registration object.
    //

    if (taskRegistered == true) {

        return iter.current;
    }


    //
    // Register the background task.
    //
    var builder = new background.BackgroundTaskBuilder();

    builder.name = taskName;
    builder.taskEntryPoint = taskEntryPoint;
    builder.setTrigger(trigger);

    if (condition != null) {

       // builder.addCondition(condition);
    }

    var task = builder.register();

    return task;
}
    

RegisterBackgroundTask('js\\background.js', 'mytestBGTask', new Windows.ApplicationModel.Background.SystemTrigger(Windows.ApplicationModel.Background.SystemTriggerType.timeZoneChange, false), true)



    // Namespace: Windows.UI.Notifications
    //if (typeof Windows !== 'undefined' &&
    //        typeof Windows.UI !== 'undefined' &&
    //        typeof Windows.UI.Notifications !== 'undefined') {

    //    var notifications = Windows.UI.Notifications,
    //    tile = notifications.TileTemplateType.tileSquare150x150PeekImageAndText01,
    //    tileContent = notifications.TileUpdateManager.getTemplateContent(tile),
    //    tileText = tileContent.getElementsByTagName('text'), 
    //    tileImage = tileContent.getElementsByTagName('image'); 


    //   tileText[0].appendChild(tileContent.createTextNode( 'Demo Message'));
    //    tileImage[0].setAttribute('src',  'https://unsplash.it/150/150/?random'); //pull random image
    //    tileImage[0].setAttribute('alt', 'Random demo image');

    //    var tileNotification = new notifications.TileNotification(tileContent);
    //    notifications.TileUpdateManager.createTileUpdaterForApplication().update(tileNotification);
    //} 