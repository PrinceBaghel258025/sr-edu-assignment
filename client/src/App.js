import {Input} from './components/Input';
import {Button} from './components/Button';
import {getTodos, postTodo, toggleTodo} from './lib/api/todos';
import {useQuery, useMutation} from '@tanstack/react-query';
import {queryClient} from '.';
import {useState} from 'react';

function App() {
  const [todoText, setTodoText] = useState('');

  const query = useQuery({queryKey: ['todos'], queryFn: getTodos});

  const mutation = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      // Invalidate and refetch
      console.log('invalidating todo');
      setTodoText("")
      queryClient.invalidateQueries({queryKey: ['todos']});
    },
  });

  const toogle = useMutation({
    mutationFn: toggleTodo,
    onSuccess: () => {
      console.log('invalidating todo');
      queryClient.invalidateQueries({queryKey: ['todos']});
    },
    onError: () => {
      console.log('patch error');
    },
  });

  return (
    <div className="h-screen bg-black/80 text-background/80 ">
      <h1 className='text-4xl text-center py-2'>Todos</h1>
      <div className="grid grid-cols-1 gap-4 px-8 py-4 ">
        <div className="flex gap-2">
          <Input
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            type="text"
            placeholder="Type todo here"
          />
          <Button disabled={todoText.trim() === ""} onClick={() => mutation.mutate({todo: todoText})}>
            Submit
          </Button>
        </div>
        <div className="space-y-2.5">
          {query.data?.map((todo) => (
            <p
              key={todo._id}
              className="flex items-center gap-4 px-2 border rounded-sm shadow-sm shadow-blue-900 border-blue-400"
            >
              <input
                draggable
                id="here"
                type="checkbox"
                checked={todo.completed}
                onChange={() =>
                  toogle.mutate({todoId: todo._id, isCompleted: !todo.completed})
                }
                className=" checked:bg-blue-500 h-4 w-4 rounded-md"
              />
              <label className="text-2xl" htmlFor="here" draggable>
                {todo.text}
              </label>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
