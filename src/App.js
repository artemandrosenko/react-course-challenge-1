import styles from './App.module.css';

import Card from './components/Card';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <div className={styles.App}>
      <Card>
        <CreateUser />
      </Card>
    </div>
  );
}

export default App;
