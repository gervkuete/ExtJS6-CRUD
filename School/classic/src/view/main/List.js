Ext.define('School.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    title: 'Employee',
    model: 'School.model.Employee',
    reference: 'employeegrid',
    store: {
        type: 'employees'
    },
    columns: [
        { text: 'Employee_id',  dataIndex:  'employee_id', flex: 1 },
        { text: 'First Name',  dataIndex: 'firstName', flex: 1 },
        { text: 'Last Name',  dataIndex: 'lastName', flex: 1 },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone Number', dataIndex: 'phoneNumber', flex: 1 }
    ],

    tbar: [{
        text: 'Add Employee',
        handler: 'onAddClick'
    }, {
        text: 'Delete Employee',
        reference: 'deleteEmployee',
        handler: 'onDeleteClick',
        disabled: true
    }, {
        text: 'Update Employee',
        reference: 'updateEmployee',
        handler: 'onUpdateClick',
        disabled: true
    }],

    listeners: {
        select: 'onRowSelected'
    }
});
