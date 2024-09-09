import "./styles.css";
import { Todo } from "./modules/todo";
import { Project } from "./modules/project";

const projectMannager = (() => {

  let list = []
  
  const addProject = (name) => {
    const project = Project(name)
    list.push(project)
  }
  const deleteProject = (index) => list.splice(index, 1)
  const getProject = (index) => list[index]
  const getList = () => list

  return {
    addProject,
    deleteProject,
    getProject,
    getList
  }

})();


projectMannager.addProject('default')
