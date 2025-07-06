const express = require("express"); // Express 가져오기
const app = express(); // Express 애플리케이션 객체 생성
const path = require("path");

// GET메소드로 경로 '/'요청 들어온 경우
// app.get("/", (req, res) => {
//   res.send("Hello world");
// });

// public폴더에 있는 정적 파일 서빙
// app.use(express.static(path.join(__dirname, "public")));

// CRUD테스트
app.use(express.json()); // JSON 데이터를 처리

app.get("/", (req, res) => {
  res.json({ message: "GET Response 성공!!" });
});

app.post("/info", (req, res) => {
  // 요청 본문에서 name과 age 값을 추출
  const { name, age } = req.body;

  res.json({ message: `Post Response 성공!! name: ${name} age: ${age}` });
});

// 서버를 8080번 포트에서 실행
app.listen(8080, () => {
  console.log("Server running at ..");
});
