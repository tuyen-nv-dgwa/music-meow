import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Điều Ước Giáng Sinh",
      cover:
        "./cu1.png",
      artist: "O.lew",
      audio: "https://a128-zmp3.zmdcdn.me/dd6d28fdcfb9abeafcf2f0ff70ada9f0?authen=exp=1703651127~acl=/dd6d28fdcfb9abeafcf2f0ff70ada9f0/*~hmac=6a191d52634d9c7335ebaf2843680468",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Vì Sao",
      cover:
        "https://loremflickr.com/400/400/cats",
      artist: "Ninh Dương Lan Ngọc",
      audio: "https://a128-zmp3.zmdcdn.me/c52ae166969dfc91c6b3065b254bf754?authen=exp=1703650834~acl=/c52ae166969dfc91c6b3065b254bf754/*~hmac=0a238817903b4eced206b8c5b74c15ac",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Ở Đó Nhìn Em",
      cover:
        "https://loremflickr.com/400/400/cats",
      artist: "Trịnh Thăng Bình",
      audio: "https://a128-zmp3.zmdcdn.me/70c8d2275bc1710bad3e976b9a4284fc?authen=exp=1703650998~acl=/70c8d2275bc1710bad3e976b9a4284fc/*~hmac=e44d53ed4321ca9416c52acfc903d65f",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Chữ Tình Chữ Yêu",
      cover:
        "https://loremflickr.com/400/400/cats",
      artist: "Hương Ly",
      audio: "https://a128-zmp3.zmdcdn.me/fb867b7b182d768e751ec33e7c9e4500?authen=exp=1703651006~acl=/fb867b7b182d768e751ec33e7c9e4500/*~hmac=904235995d23b35d6afeb38d8528f233",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    //ADD MORE HERE
    
  ];
}

export default chillHop;
