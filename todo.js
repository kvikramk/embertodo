/**************************
* Application
**************************/

App=Em.Application.create();

/**************************
* Models
**************************/
App.Todo=Em.Object.extend({
    title:null,
    isDone:false
});
/**************************
* Views
**************************/

App.SearchTextField=Em.TextField.extend({
    insertNewline:function(){
        App.todoController.addItems();
    }
});
App.StatsView = Em.View.extend({
  remainingBinding: 'App.todoController.remainingItems',

  remainingString: function() {
    var remaining = this.get('remaining');
    return remaining + (remaining === 1 ? " item" : " items");
  }.property('remaining')
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
            var newOb=App.Todo.create({title:item});
            this.pushObject(newOb);
        }
    },
    removeItems:function(view){
        this.removeObject(view.context);
    },
    remainingItems:function(){
        return this.filterProperty('isDone', false).get('length');
    }.property('@each.isDone'),
    clearItemsdone:function(){
        this.filterProperty('isDone', true).forEach(this.removeObject, this);
    }
});