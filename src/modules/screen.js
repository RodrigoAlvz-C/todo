import { Todo } from "./todo";
import { Project } from "./project";
import { projectMannager } from "..";

const projects = document.getElementById('projects')

const clearElement = (element) => element.textContent = '' 

const updateProjectList = (list, current) => {
  clearElement(projects)
  list.forEach((project, index) => {
    const cell = document.createElement('div')
    cell.dataset.index = index
    cell.textContent = project.getName()
    if (project.getName() === current.getName() ) {
      cell.classList.add('current-cell')
    } else {
      cell.classList.add('cell')
    }
    cell.addEventListener('click', () => {
      projectMannager.setCurrentProject(index);
      updateProjectList(list, projectMannager.getCurrentProject());
    })
    projects.appendChild(cell)
  });
}

export { updateProjectList }