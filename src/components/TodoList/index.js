import useSSRData from "hooks/useSSRData";

function TodoList() {

  const { todos } = useSSRData();

  const todoItems = todos.map((todo, index) => <li key={index}>{todo.title}</li>);

  return (
    <ul>
      {todoItems}
    </ul>
  );
}

export default TodoList;
