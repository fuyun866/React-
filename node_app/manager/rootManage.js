const roleDB = require("../mongoose/roleDB");

exports.roleAdditionManage = async (req, res) => {
  console.log(req.body);
  let {
    roleName,
    permissionDesc,
    permissionLevel,
    treeNodeArr,
    treeKeyArr,
    _id,
  } = req.body;
  let bol = await roleDB.findOne({ roleName });
  if (bol) res.send({ code: 0, value: "角色名称已存在", data: {} });
  else {
    let result = await roleDB.create({
      roleName,
      permissionDesc,
      permissionLevel,
      treeNodeArr,
      treeKeyArr,
      userId: _id,
    });
    res.send({ code: 3, value: "角色添加成功", data: {} });
  }
};
