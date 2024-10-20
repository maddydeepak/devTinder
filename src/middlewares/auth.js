const authAdmin = (req, res, next) => {
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.status(401).send("Unautorized admin");
  } else {
    next();
  }
};

const authUser = (req, res, next) => {
  const token = "xyz";
  const isUserAuthorized = token === "xyz";
  if (!isUserAuthorized) {
    res.status(401).send("Unautorized user");
  } else {
    next();
  }
};

module.exports = { authAdmin, authUser };
