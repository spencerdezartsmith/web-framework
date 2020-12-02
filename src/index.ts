import { User } from './models/User';

const user = new User({ name: 'Kelly', age: 20 });

user.on('change', () => {
  console.log('change');
});
user.on('change', () => {
  console.log('change');
});

user.trigger('change');
