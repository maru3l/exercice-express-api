let data = require('./data');
let id = 4;

//TODO: Validate if the item already exist and add one in quantity if it does
const create = (req, res) => {
  if (!req.body.name) {
    res.status(400).json({});
    return;
  }

  data.push({
    id,
    name: req.body.name,
    desc: req.body.desc || '',
    price: req.body.price || null,
    quantity: req.body.quantity || 1,
    checked: false
  });

  id += 1;

  res.status(200).json(data);
}

const getAll = (req, res) => res.status(200).json(data);

const findById = (req, res) => {
  const { params: { id: reqId } } = req;
  res.status(200).json(data.find(({ id }) => reqId == id));
};

const update = (req, res) => {
  const { params: { id } } = req;
  const el = data.find(({ id: dataId }) => dataId == id);

  if(!el) {
    res.status(404).json({});
    return;
  }

  Object.keys(req.body).forEach(key => {
    el[key] = req.body[key];
  })

  res.status(200).json(data);
}

const remove = (req, res) => {
  const { params: { id } } = req;
  const index = data.findIndex(({ id: dataId }) => dataId == id);
  console.log(index);

  data.splice(index, 1);

  res.status(200).json(data);
}

module.exports = {
  create,
  getAll,
  findById,
  update,
  remove
}
