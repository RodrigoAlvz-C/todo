export const Todo = (InitialTitle, InitialDesc, InitialDueDate, InitialPrio, InitialNotes) => {

  let title = InitialTitle
  let desc = InitialDesc
  let dueDate = InitialDueDate
  let prio = InitialPrio
  let notes = InitialNotes
  let completed = false
  
  const getTitle = () => title;
  const getDesc = () => desc;
  const getDueDate = () => dueDate;
  const getPrio = () => prio;
  const getNotes = () => notes;

  const setTitle = (newTitle) => title = newTitle
  const setDesc = (newDesc) => desc = newDesc
  const setDueDate = (newDueDate) => dueDate = newDueDate
  const setPrio = (newPrio) => prio = newPrio
  const setNotes = (newNotes) => notes = newNotes

  const changeState = () => completed === false ? true : false
  const isCompleted = () => completed

  return {
    getTitle,
    getDesc,
    getDueDate,
    getPrio,
    getNotes,
    setTitle,
    setDesc,
    setDueDate,
    setPrio,
    setNotes,
    changeState,
    isCompleted
  };
};
