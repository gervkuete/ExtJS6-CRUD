 Ext.define('School.store.Employees', {
    extend: 'Ext.data.Store',
    alias: 'store.employees',
    model: 'School.model.Employee',
    autoLoad: true,
    autoSync: true,
    remoteSort: true,
    proxy: {
        type: 'ajax',
        api: {
            create: 'http://localhost:8080/Spring-MyBatis-ExtJS6-CRUD/addEmployee',
            read:   'http://localhost:8080/Spring-MyBatis-ExtJS6-CRUD/loadEmployees',
            update: 'http://localhost:8080/Spring-MyBatis-ExtJS6-CRUD/updateEmployee',
            destroy:'http://localhost:8080/Spring-MyBatis-ExtJS6-CRUD/deleteEmployee'
        },
        reader: {
            type: 'json',
            idProperty: 'employee_id',
            rootProperty: 'employees'
        },
        writer: {
            type: 'json',
            encode: true,
            writeAllFields: true
        }
    }
    
});
 