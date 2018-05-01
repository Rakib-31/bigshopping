//'use strict';
module.exports = function(app) {
    var todoList = require('../controller/controller');
  
    // todoList Routes
    app.route('/members')
      .get(todoList.list_all_tasks)
      .post(todoList.create_a_task);
  
  
    app.route('/members/name')
      .get(todoList.list_all_tasks)
      .put(todoList.update_a_task)
      .delete(todoList.delete_a_task);
  };
  