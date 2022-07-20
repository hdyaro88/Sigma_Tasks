const { db } = require("../firebase/firebase");
exports.saveTask = async (req, res, next) => {
  try {
    console.log(req.body);
    const docRef = db.collection("Tasks");
    const result = await docRef.add({
      ...req.body,
    });
    res.status(201).send({
      status: "success",
      data: {
        id: result.id,
        ...req.body,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({
      status: "Fail",
      message: err.toString(),
    });
  }
};

exports.getTask = async (req, res, next) => {
  try {
    const docRef = db.collection("Tasks");
    const docs = await docRef.get();
    if (docs) {
      const result = [];
      docs.forEach((doc) => {
        result.push({ id: doc.id, ...doc.data() });
      });
      res.status(200).send({
        status: "success",
        result,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400).send({
      status: "Fail",
      message: err.toString(),
    });
  }
};

exports.deleteTask = async (req, res, next) => {
  try {
    console.log(req.body.id);
    const docRef = db.collection("Tasks").doc(req.body.id);
    const result = await docRef.delete();
    res.status(200).send({
      status: "success",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      status: "fail",
      message: "Something went wrong",
    });
  }
};

exports.updateTask = async (req, res, next) => {
  try {
    const task = req.body.editedTask;
    console.log(task);
    const docRef = db.collection("Tasks").doc(task.id);
    const result = docRef.set(task);
    res.status(200).send({
      status: "success",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      status: "Fail",
    });
  }
};
