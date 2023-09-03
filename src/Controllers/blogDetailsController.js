exports.create = async (req, res) => {
  try {
    res.send("Blog Details created successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

// Read an item
exports.read = async (req, res) => {
  try {
    res.send("Blog Details read successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

// Update an item
exports.update = async (req, res) => {
  try {
    res.send(" Blog Details updated successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

// Delete an item
exports.delete = async (req, res) => {
  try {
    res.send(" Blog Details deleted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
