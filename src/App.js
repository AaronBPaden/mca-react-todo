import TodoItems from './components/TodoItems'
function App() {
  return (
    <>
      <main className="main">
        <section className="main-header">
          <h1>Todo</h1>
          <TodoItems />
        </section>
      </main>
    </>
  );
}

export default App;
