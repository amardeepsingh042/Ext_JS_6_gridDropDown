/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('gridDropDown.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [

        'gridDropDown.view.main.MainController',
        'gridDropDown.view.main.MainModel',
       
    ],

    controller: 'main',
    viewModel: 'main',
    
    tbar : [{
        text : 'Load Data',
        handler : 'onClickLoadData'
    }],

    items: [{
        title : 'Dynamic Grid 1',
        xtype : 'grid',
        viewConfig : {
            plugins : {
                ptype: 'gridviewdragdrop',
                dragGroup : 'firstGridDDGroup' 
                    }
                }
    },{
        title : 'Dynamic Grid 2',
        xtype : 'grid',
            viewConfig : {
            plugins : {
                ptype: 'gridviewdragdrop',
                dropGroup : 'firstGridDDGroup' 
                    }
                }
    }]
    
    
});
