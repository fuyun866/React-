const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const path = require("path");
const cors = require("cors")
require("./mongoose/connect.js");

app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("./public"));

app.use("/",require("./router/login.js"));
app.use("/person",require("./router/person.js"));
app.use("/root",require("./router/root.js"));


// 使用ejs模板
// app.use(views(__dirname + '/views', {map: {html: 'ejs'}}));

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');



app.listen("4000", () => {
  console.log("4000端口启动成功");
});



// const options = {
//   definition: {
//     // swagger 采用的 openapi 版本 不用改
//     openapi: "3.0.3",
//     // swagger 页面基本信息 自由发挥
//     info: {
//       title: "后台管理系统接口",
//       version: "创建时间：2020年3月27日",
//     },
//   },
//   apis: [path.join(__dirname, "./router/*.js")], //这里指明接口路由存放的文件夹。楼主放在根路径的router下
// };
// const swaggerSpec = swaggerJSDoc(options);

// // 开放 swagger 相关接口，
// app.get("/swagger.json", function (req, res) {
//   res.setHeader("Content-Type", "application/json");
//   res.send(swaggerSpec);
// });
// // 使用 swaggerSpec 生成 swagger 文档页面，并开放在指定路由
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

