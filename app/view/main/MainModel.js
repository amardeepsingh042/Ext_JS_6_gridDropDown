/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('gridDropDown.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',
    
    stores : {
        gridOneStore : {
            fields: ['name', 'email', 'phone'],
            autoLoad : true,
            proxy: {
                type: 'ajax',
                url: 'resources/gridOneResponse.json',
                    reader: {
                        type: 'json',
                         rootProperty: 'dataAndMetaData.records',
                         keepRawData : true
                }
            }
        },
         gridTwoStore : {
            fields: ['name', 'email', 'phone'],
            autoLoad : true,
            proxy: {
                type: 'ajax',
                url: 'resources/gridTwoResponse.json',
                    reader: {
                        type: 'json',
                         rootProperty: 'dataAndMetaData.records',
                         keepRawData : true
                }
            }
        }
    }

    //TODO - add data, formulas and/or methods to support your view
});
