# NextCapital Todo List Challenge

As the first step in our interview process, we'd like you to build a small todo list webapp that integrates with the RESTful JSON API defined in this project.

The API is publicly accessible at http://recruiting-api.nextcapital.com. The API endpoints are documented below.

## Solution Requirements

At a minimum, your users should be able to:

[X] Sign up
[X] Log in
[X] See a list of all their todos
[X] Create new todos
[] Edit a todo
[] Mark todos as complete
[] Reorder their todos (this is just client-side)

In addition, please add another feature of your choice.

Please make your app look at least decent. Don't be afraid to write some unit tests as well.

## Technology and Tools

You can accomplish this with whatever technology and tools you want. If you'd like, you can use [this Javascript API client](https://github.com/clarkr/nextcapital-todo-api-client-jquery), but are not required to.

## Submitting

When you're all done, send us:

1. Your source code (preferably on GitHub)
1. A link to your working application

## Above and Beyond

If you're feeling ambitious, feel free to fork this repository and add API routes, add ordering to todos, fix bugs, or whatever else you want. Please don't modify any existing API endpoints or behavior, though.

## Reporting Issues

If you run into any unexpected behvaior, please let us know.

If you are reporting unexpected behavior, you should state the behavior you are seeing, what you are expecting to see, a list of the things you've already tried and any significant error logging.

## API Endpoints

### User

| Endpoint                               | Description        |
| -------------------------------------- | ------------------ |
| [POST /users](/public/user.md#post-users) | Create a new user. |

### Session

| Endpoint                                                            | Description         |
| ------------------------------------------------------------------- | ------------------- |
| [POST /users/sign_in](/public/session.md#post-userssign_in)            | Start a session.    |
| [DELETE /users/sign_out](/public/session.md#delete-userssign_out)      | End a session.      |

### Todo

| Endpoint                                                            | Description         |
| ------------------------------------------------------------------- | ------------------- |
| [GET /users/:user_id/todos](/public/todo.md#get-usersuser_idtodos)     | Get a user's todos. |
| [POST /users/:user_id/todos](/public/todo.md#post-usersuser_idtodos)   | Create a todo.      |
| [GET /users/:user_id/todos/:id](/public/todo.md#get-usersuser_idtodos) | Get a todo.         |
| [PUT /users/:user_id/todos/:id](/public/todo.md#put-usersuser_idtodos) | Update a todo.      |
s