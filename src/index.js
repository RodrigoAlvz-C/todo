import "./styles.css";
import { Todo } from "./modules/todo";
import { Project } from "./modules/project";
import { updateProjectList } from "./modules/screen";

const addProject = document.getElementById('add-project-btn')
const addTodo = document.getElementById('add-todo-btn')

const projectMannager = (() => {
  let list = [];
  let currentProject = null;

  const deleteProject = (index) => {
    list.splice(index, 1);
    if (list.length > 0) {
      setCurrentProject(0);
    } else {
      currentProject = null;
    }
  };

  const getList = () => list;
  const getProject = (index) => list[index];
  const getCurrentProject = () => currentProject;
  const setCurrentProject = (index) => currentProject = list[index];

  const addProject = (name) => {
    const project = Project(name); 
    list.push(project);
    setCurrentProject(list.length - 1); 
    updateProjectList(list, getCurrentProject());
  };

  return {
    addProject,
    deleteProject,
    getList,
    getProject,
    getCurrentProject,
    setCurrentProject
  };
})();

projectMannager.addProject('aaaa');
projectMannager.addProject('bbbb');
projectMannager.addProject('ccccc');
projectMannager.addProject('cccccd');

export { projectMannager }