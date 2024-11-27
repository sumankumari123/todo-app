import { createContext, ReactNode, useContext, useState } from 'react';

export type TodoProvidersProps = {
    children: ReactNode;
}

export type TodoObj = {
    id: string;
    task: string;
    completed: boolean;
    createdAt: Date;
}

export type TodoContextType = {
    todos: TodoObj[];
    handleAddTodo: (task: string) => void;
    toggleCompletedStatus: (id: string) => void;
    deleteIndividualButton: (id: string) => void;
}
// TodoContextType that means what a type of todo parent

export const TodoContext = createContext<TodoContextType | null>(null);

export const TodosProviders = ({ children }: TodoProvidersProps) => {

    const [todos, setTodos] = useState<TodoObj[]>(() =>{ 
        try {
        const localStorageTodo = localStorage.getItem("todos") || "[]";
        return JSON.parse(localStorageTodo) as TodoObj[]
    } catch (error) {
        return [];
    }
});

    const handleAddTodo = (task: string) => {
        const newTodo: TodoObj = {
            id: Math.random().toString(),
            task: task,
            completed: false,
            createdAt: new Date(),
        };

        const updatedTodos = [...todos, newTodo];
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));

    }

    const toggleCompletedStatus = (id: string) => {
        const updatedTodos = todos.map((todo) => {
            if (id === todo.id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
    };


    const deleteIndividualButton = (id: string) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));

    };

    return (
        <TodoContext.Provider value={{ todos, handleAddTodo, toggleCompletedStatus, deleteIndividualButton }}>
            {children}
        </TodoContext.Provider>
    );
}


//consumer
export const useTodo = () => {
    const todoConsumer = useContext(TodoContext);
    if (!todoConsumer) {
        throw new Error("usedTool used outside  of")
    }
    return todoConsumer;
}




