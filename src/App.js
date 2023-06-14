import styles from './App.module.css';

import Card from './components/Card';
import CreateUser from './components/CreateUser';
import UsersList from './components/UsersList';

function App() {
  return (
    <div className={styles.App}>
      <Card>
        <CreateUser />
      </Card>
      <Card>
        <UsersList />
      </Card>
    </div>
  );
}

export default App;
