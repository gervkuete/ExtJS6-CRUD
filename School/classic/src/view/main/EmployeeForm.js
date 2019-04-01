Ext.define('School.view.main.EmployeeForm', {
    extend  : 'Ext.window.Window',
    alias   : 'widget.employeeform',
    title   : 'Add Employee',
    width   : 350,
    layout  : 'fit',
    resizable: false,
    autoShow: true,
    modal   : true,

    items   : [{
      xtype : 'form',
      layout: 'anchor',
      bodyStyle: {
        background: 'none',
        padding: '10px',
        border: '0'
      },

      defaults: {
        xtype : 'textfield',
        anchor: '100%'
      },
      items : [{
        name  : 'employee_id',
        fieldLabel: 'Employee_id',
        hidden: true,
        allowBlank: false
      }, {
        name  : 'firstName',
        fieldLabel: 'First Name',
        allowBlank: false
      }, {
        name  : 'lastName',
        fieldLabel: 'Last Name',
        allowBlank: false
      },{
        name: 'email',
        fieldLabel: 'Email',
        vtype: 'email',
        allowBlank: false
      },{
        name: 'phoneNumber',
        fieldLabel: 'Phone Number',
        allowBlank: false
      }]
    }],
    buttons: [{
      text: 'Submit',
      formBind: true,
      listeners: {
        click: 'onSubmitClick'
    }
    }, {
      text    : 'Reset',
      handler : 'onResetButtonClick'
    }, {
      text   : 'Cancel',
      handler: 'onCancelButtonClick'
    }]
  });
