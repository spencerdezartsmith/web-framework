import { User } from './models/user';

const user = new User({ name: 'Alexis', age: 2 });

console.log(user.get('name'));

user.on('change', () => {
  console.log('User has changed');
});

user.set({ name: 'Dan' });

console.log(user.get('name'));
