/* Ext.define('School.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',

    requires: [
        'School.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [{ 
        text: 'First Name',
        dataIndex: 'firstName',
        width: 100,
        cell: {
            userCls: 'bold'
        }
    }, {
        text: 'Last Name',
        dataIndex: 'lastName',
    }, {
        text: 'Email',
        dataIndex: 'email',
        width: 230 
    }, { 
        text: 'Phone Number',
        dataIndex: 'phoneNumber',
        width: 150 
    }],

    listeners: {
        select: 'onItemSelected'
    }
});
 */