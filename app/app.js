"use strict";

// 모둘
const express = require("express");
const app = express();


const PORT = 3000;


// 라우팅 
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
// html을 어떤 엔진으로 해석할지 정해줄 수 있음
app.set("view engine", "ejs")

// use -> 미들웨러를 등록해주는 매서드
// Q. 미들웨어가 뭐지?
app.use("/",home); 


// Q. 이것의 역할이 도대체 뭐지
module.exports = app;


