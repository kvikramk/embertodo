/**************************
* Application
**************************/

App=Em.Application.create();

/**************************
* Models
**************************/

/**************************
* Views
**************************/

App.SearchTextField=Em.TextField.extend({
    insertNewline:function(){
        App.todoController.addItems();
    }
});

/**************************
* Controllers
**************************/

App.todoController=Em.ArrayController.create({
    content:[],
    item:'',
    addItems:function(){
        var me=this,
        item=me.get('item');
        if(item){
            this.pushObject(item);
        }
    },
    removeItems:function(view){
        this.removeObject(view.context);
    }
});