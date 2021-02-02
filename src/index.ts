import { User } from './models/User';

const user = new User({ name: 'new name', age: 0 });

user.on('change', () => {
  console.log('user was changed');
});

// console.log(user.get('name'));

user.trigger('change');
