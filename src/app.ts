import Component from './components/Component';
import TodoList from './components/TodoList';

class TodoApp extends Component {
  constructor() {
    super('div');

    this.addClass('todo-app');

    const header = new Component('div');
    this.addClass('header');

    const logo = new Component('div');
    this.addClass('header-logo');
    this.setTextContent('TODO App');

    const nav = new Component('div');
    this.addClass('nav');

    const navLinks = [
      { text: 'All Todos', url: '#' },
      { text: 'Planned Todos', url: '#' },
      { text: 'Done Todos', url: '#' },
      { text: 'In Progress Todos', url: '#' },
      { text: 'GitHub', url: 'https://github.com/borat-afk/todo-client' },
      { text: 'NestJS Docs', url: 'https://docs.nestjs.com/security/authorization' },
    ];

    navLinks.forEach(({ text, url }) => {
      const link = new Component('a');
      this.element.setAttribute('href', url);
      this.element.textContent = text;
      this.element.appendChild(link.render());
    });

    this.element.appendChild(logo.render());
    this.element.appendChild(nav.render());

    const todoList = new TodoList();

    this.appendChild(header.render());
    this.appendChild(todoList.render());
  }
}

const app = new TodoApp();
const appContainer = document.getElementById('app');

if (appContainer) {
  appContainer.appendChild(app.render());
}
