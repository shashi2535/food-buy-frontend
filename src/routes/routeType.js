import { Url } from "../constant";
import { Signup, TodoList } from "../pages";

const publicRoute = [{ path: Url.Signup, Component: Signup }];

const privateRoute = [{ path: Url.GetTodo, Component: TodoList }];

export { publicRoute, privateRoute };
