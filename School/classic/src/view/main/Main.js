Ext.define('School.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'School.view.main.MainController',
        'School.view.main.List'
    ],

    controller: 'main',

    items: [{
        items: [{
            xtype: 'mainlist'
        }]

    }]
});
