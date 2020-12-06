import { UserForm } from './views/UserForm';
import { User } from './models/User';

const root = document.getElementById('root');

if (root) {
  const userForm = new UserForm(
    root,
    User.buildUser({ name: 'Alexis', age: 10 })
  );

  userForm.render();
} else {
  throw new Error('No root element found');
}
