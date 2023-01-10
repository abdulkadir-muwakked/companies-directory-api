const adminTransformer = (admin) => {
  if (admin?.dataValues?.password) {
    delete admin.dataValues.password;
  }
  return admin;
};
const adminsTransformer = (admins) => {
  return admins.map((admin) => adminTransformer(admin));
};
module.exports = {
  adminTransformer,
  adminsTransformer,
};