import { User } from './models/user';

const user = new User({ name: 'Alexis', age: 2 });

user.save();
