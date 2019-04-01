Ext.define('School.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    requires: [
        'Ext.Viewport',
        'School.view.main.EmployeeForm',
        'School.view.main.List'
    ],

    model: 'School.model.employee',
    store: 'School.store.Employees',
    views   : ['List', 'EmployeeForm'],
    refs    : [{
      ref   : 'formWindow',
      xtype : 'employeeform',
      selector: 'employeeform',
      autoCreate: true
    }],

    onAddClick: function (button, e, eOpts) {
        var window = Ext.create('School.view.main.EmployeeForm');
        var record = Ext.create('School.model.Employee');
        window.down('form').loadRecord(record);
        console.log(record);
    },

    onDeleteClick: function(){
        Ext.Msg.confirm('Delete Employee', 'Do you really want to delete this employee?', 'onConfirm', this);
    },
    
    onUpdateClick: function(){
        var window = Ext.create('School.view.main.EmployeeForm');
        window.setTitle('Update Employee');
        var view = this.lookupReference('employeegrid');
        var record = view.getSelectionModel().getSelection();
        console.log(record);
        window.down('form').loadRecord(record[0]);
    },

    onSubmitClick: function(button, e, eOpts){
        var window = button.up('window');
        var form = window.down('form');
        windowTitle = window.getTitle();
        console.log(windowTitle);
        record = form.getRecord();
        console.log(record);
        if(windowTitle === 'Add Employee') {  
            record.save({
                success: function(employee) {
                    Ext.Msg.alert('Success', 'Employee added successfuly.');
                },
                failure: function(employee){
                    Ext.Msg.alert('Failure', 'Failed to add employee.')
                }
            });         
        } else {   
            form.updateRecord();
            record.save({
                success: function(employee) {
                    Ext.Msg.alert('Success', 'Employee updated successfuly.');
                },
                failure: function(employee){
                    Ext.Msg.alert('Failure', 'Failed to update employee.')
                    window.close();
                }
            });
        } 
    },

    onRowSelected: function(dataview, record, item, index, e, eOpts){
        var btnDelete = this.lookupReference('deleteEmployee');
        btnDelete.enable();
        var btnUpdate = this.lookupReference('updateEmployee');
        btnUpdate.enable(); 
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            var dataView = this.lookupReference('employeegrid'),
            record = dataView.getSelectionModel().getSelection();
            var store = dataView.getStore();
            store.remove(record);
            dataView.store.sync();
        }
    },

    onCancelButtonClick: function(button, e, eOpts){
        button.up('window').close();
    },

    onResetButtonClick: function(button, e, eOpts){
        button.up('window').down('form').reset(); 
        
    }
});
