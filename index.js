const express = require("express"); // Express 가져오기
const app = express(); // Express 애플리케이션 객체 생성
const path = require("path");

// GET메소드로 경로 '/'요청 들어온 경우
// app.get("/", (req, res) => {
//   res.send("Hello world");
// });

// CRUD테스트
app.use(express.json()); // JSON 데이터를 처리
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "GET Response 성공!!" });
});

app.get("/user", (req, res) => {
  res
    .json({
      name: "후츠릿",
      mbti: "ENTJ",
    })
    .status(200);
});

// 특정 ID값의 데이터 조회
// "/user/1625615"
app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  console.log("🚀 ~ users:", users);
  const findItem = users.find((item) => item.id === Number(id)); // 객체 or undefined
  console.log("🚀 ~ findItem:", findItem);
  if (!findItem) {
    // 매칭된 사용자가 없는경우
    res.status(404).json({ message: "사용자를 찾을수 없습니다" });
  } else {
    // 매칭된 사용자가 있는경우
    res.status(200).json(findItem);
  }
});

app.post("/user", (req, res) => {
  // 요청코드
  const userInfo = req.body;
  console.log("name", userInfo.name, "mbti", userInfo.mbti);
  // 미션: 사용자 입력값 받아서 id를 포함한 객체를 users에 추가 한후에 users 데이터 반환

  const newUser = {
    id: Date.now(),
    name: userInfo.name + "🔥",
    mbti: `${userInfo.mbti}🔥`,
  };

  const addUsers = [...users, newUser];
  // 응답코드
  res.status(201).json({ data: addUsers });
});

// 서버를 8080번 포트에서 실행
app.listen(8080, () => {
  console.log("Server running at ..");
});
