import str from "i18n";
import Helmet from "react-helmet";
import axios from "axios";
import { Link } from "react-router-dom";
import TodoList from "components/TodoList";
import styles from './styles.module.scss';

function Todos() {
  return (
    <>
      <Helmet>
        <title>{str.todos}</title>
      </Helmet>

      <div className={styles.Todos}>
        <h1>{str.todos}</h1>
        <TodoList />
        <Link to="/">{str.home}</Link>
      </div>
    </>
  );
}

Todos.getInitialData = async function () {
  let response = await axios
    .get("https://jsonplaceholder.typicode.com/todos");
  return {
    todos: response.data.slice(0, 5),
  };
}

export default Todos;
