const mongoose = require('mongoose');
const Task = require('../models/task');

exports.getAllTasks = async() => {
  const res = await Task.find();
  return res;
}

exports.createTasks = async(data) => {
  var tasks = new Task(data);
  await tasks.save()
}

exports.deleteTasks = async(id) => {
  await Task.findByIdAndRemove(id);
}

exports.updateTasks = async(id, data) => {
  await Task.findByIdAndUpdate(id, {
          $set: {
              title: data.title,
              status: data.status,
          }
      });
}