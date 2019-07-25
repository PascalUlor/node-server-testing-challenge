const shireModel = require('../database/models/model');

const getUsers = async (req, res) => {
  try {
    const users = await shireModel.getAll();
    if (users) {
      return res.status(200).json({
        status: 200,
        data: users
      });
    }
    return res.status(400).json({
      status: 400,
      data: 'Not users availble'
    });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      error: err
    });
  }
};

const createUser = async (req, res) => {
  const { name, age } = req.body;
  try {
    const current = await shireModel.getByName(name);
    if (current.length === 0) {
      const newUser = await shireModel.addUser({ name, age });
      if (newUser) {
        return res.status(201).json({
          status: 201,
          data: newUser
        });
      }
    }
  } catch (err) {
    return res.status(500).json({
      status: 500,
      error: err
    });
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const removed = await shireModel.deleteUser(id);
    if (removed) {
      return res.status(200).json({
        status: 200,
        message: 'Deleted'
      });
    }
    return res.status(404).json({
      status: 404,
      data: 'user availble'
    });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      error: err
    });
  }
};

module.exports = {
  getUsers,
  createUser,
  deleteUser
};
