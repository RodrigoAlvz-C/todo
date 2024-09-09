export const Project = (name) => {
  let list = []

  const addTodo = (todo) => list.push(todo)
  const deleteTodo = (index) => list.splice(index, 1)
  const getTodo = (index) => list[index]
  const getList = () => list
  const getName = () => name

  return{
    addTodo,
    deleteTodo,
    getTodo,
    getList,
    getName,
  }
}