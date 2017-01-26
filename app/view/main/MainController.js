/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('gridDropDown.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onClickLoadData : function(){
        //debugger;
        var gridOneStore=this.getStore('gridOneStore');
        var gridOnecolumnsArray= gridOneStore.getProxy().getReader().rawData.dataAndMetaData.columns;
        this.getView().query('grid[title="Dynamic Grid 1"]')[0].reconfigure(gridOneStore,gridOnecolumnsArray);
        
        var gridTwoStore=this.getStore('gridTwoStore');
        var gridTwocolumnsArray= gridTwoStore.getProxy().getReader().rawData.dataAndMetaData.columns;
        this.getView().query('grid[title="Dynamic Grid 2"]')[0].reconfigure(gridTwoStore,gridTwocolumnsArray);
    }
});
