
//login
//toast
//tile bar
//walet
//bill pay with calendar

if(window.Windows){
	
	console.log('this printed from the file@')




function createToast(title, message, imgUrl, imgAlt, tag, lang) {
	    
    // Namespace: Windows.UI.Notifications
    if (typeof Windows !== 'undefined' &&
            typeof Windows.UI !== 'undefined' &&
            typeof Windows.UI.Notifications !== 'undefined') {
        // Setup variables for shorthand
        var notifications = Windows.UI.Notifications,
            templateType = notifications.ToastTemplateType.toastImageAndText02,
            templateContent = notifications.ToastNotificationManager.getTemplateContent(templateType),
            toastMessage = templateContent.getElementsByTagName('text'),
            toastImage = templateContent.getElementsByTagName('image'),
            toastElement = templateContent.selectSingleNode('/toast');

        var launchParams = {
            type: 'toast',
            id: tag || 'demoToast',
            heading: title || 'Demo title',
            body: message || 'Demo message'
        };

        var launchString = JSON.stringify(launchParams);
      
        // Set message & image in toast template
        toastMessage[0].appendChild(templateContent.createTextNode(message || 'Demo message'));
        toastImage[0].setAttribute('src', imgUrl || 'https://unsplash.it/150/?random');
        toastImage[0].setAttribute('alt', imgAlt || 'Random sample image');
        toastElement.setAttribute('duration', 'long');
        toastElement.setAttribute('launch', launchString); // Optional Launch Parameter

        // Add actions
        var actions = templateContent.createElement('actions');
        templateContent.firstChild.appendChild(actions);

        // Create an input box
        var input = templateContent.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('title', 'Reply with');
        input.setAttribute('id', 'textReply');
        actions.appendChild(input);

        // Create a yes button
        var btnYes = templateContent.createElement('action');
        btnYes.setAttribute('content', 'Yes');
        btnYes.setAttribute('arguments', 'yes');
        btnYes.setAttribute('launchType', 'foreground');
        actions.appendChild(btnYes);

        //Create a no button
        var btnNo = templateContent.createElement('action');
        btnNo.setAttribute('content', 'No');
        btnNo.setAttribute('arguments', 'no');
        btnNo.setAttribute('launchType', 'foreground');
        actions.appendChild(btnNo);

        // Show the toast
        var toast = new notifications.ToastNotification(templateContent);
        var toastNotifier = new notifications.ToastNotificationManager.createToastNotifier();
        toast.tag = 'demoToast';
        console.log(toast);        
        toastNotifier.show(toast);

    
      
    } else {
    	// Fallback if no native notifications are supported
    	// In this case revert to alert
        // TODO: Build modal UI for better experience
        var alertText = title || 'Demo Title';

        alert(alertText);
    }
}

function notify () {
    // Pull the user input from the page and create the notification
    var title, message, imgUrl, imgAlt, tag, lang;

    title = 'Security Alert'
    message = "Would you like to update your contact number?"
    imgUrl = 'http://images.itechpost.com/data/images/full/2094/windows-phone-8.jpg';
    imgAlt = 'this is image alt'

    createToast(title, message, imgUrl, imgAlt, tag, lang);
}

setTimeout(notify, 5000);
	
}

console.log('this is out of the if')