const { Item } = require('../../models');
const { HttpError } = require('../../utils');
const { ctrlWrapper } = require('../../decorators');

const getAll = ctrlWrapper(async (req, res) => {
  const owner = req.user._id;
  const { page = 1, limit = 500, ...query } = req.query;
  const projection = '-createdAt -updatedAt';
  const skip = (page - 1) * limit;
  const total = await Item.countDocuments({ owner, ...query });
  const items = await Item.find({ owner, ...query }, projection, { skip, limit });
  if (!items) throw HttpError(403);

  res.status(200).json({ message: `Found ${total} item(s)`, result: { items } });
});

module.exports = getAll;
