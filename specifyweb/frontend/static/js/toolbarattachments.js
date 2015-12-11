define(['navigation', 'attachments'], function(navigation, attachments) {
    "use strict";

    return {
        task: 'attachments',
        title: 'Attachments',
        icon: '/images/attach_pref.png',
        disabled: function() { return !attachments.systemAvailable(); },
        execute: function() {
            navigation.go('/specify/attachments/');
        }
    };
});
