import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    console.log('test');
    return [
      {name: 'one'},
      {name: 'one'},
      {name: 'one'},
      {name: 'one'},
      {name: 'one'},
      {name: 'one'},
      {name: 'one'},
    ];
  }
});
