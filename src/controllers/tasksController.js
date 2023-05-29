const tasksRepositories = require('../repositories/tasksRepositories');

exports.getAll = async(_req, res) => {
    const tasks = await tasksRepositories.getAllTasks();
    return res.status(200).json(tasks);
};

exports.create = async(req,res) => {
    const createdTask = await tasksRepositories.createTasks(req.body);
    return res.status(201).json({message : 'Task criada com sucesso! '});
}

exports.delete = async(req, res) => {
    const { id } = req.params;

    await tasksRepositories.deleteTasks(id)
    return res.status(204).json();
}

exports.Update = async(req, res, next) => {
    const { id } = req.params;

  await tasksRepositories.updateTasks(id, req.body);
  return res.status(200).json({message : 'Task Atualizada com sucesso! '});
};