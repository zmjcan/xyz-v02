export const navItems = [
  { label: "HOME", href: "/" },
  { label: "PROFILE", href: "/profile" },
  { label: "LOGBOOK", href: "/logbook" },
  { label: "GALLERY", href: "/gallery" },
  { label: "CONTACT", href: "/contact" }
];

export const character = {
  nameEn: "XIA YIZHOU",
  nameZh: "夏以昼",
  birthday: "6月13日",
  nickname: "哥哥",
  occupation: "执舰官",
  roleEn: "EXECUTIVE CAPTAIN",
  evol: "GRAVITY",
  evolEn: "GRAVITY EVOLER",
  location: "天行市",
  quote: "不需要哥哥？……",
  ship: "LIGHTSEEKER GRAVITY CLASS"
};

export const logEntries = [
  {
    date: "06 / 12",
    location: "天行市",
    weather: "晴",
    title: "“在天行的每一天，我都很惦记妹妹……”",
    body: "今天在天行市的上空巡航，风很大，云层很亮。每当这时候，就会想起你小时候总盯着窗外看云的样子。已经很久没回去了，等任务结束，我就回去接你。别担心，哥哥说到做到。"
  },
  {
    date: "06 / 07",
    location: "深空航道",
    weather: "阴",
    title: "“今天是执舰的第13天，……”",
    body: "第13天，顺利完成了引力航道的稳定校准。‘重力’很听话，也很倔强。舰员们说我合格起来很快，能感觉到我们在一点点航近真正的目标。不骄不躁，稳住，我们会到达想去的地方。"
  },
  {
    date: "05 / 30",
    location: "训练场",
    weather: "晴",
    title: "“关于那场模拟战的复盘。”",
    body: "今天的模拟战数据已经全部归档。有些失误可以更快，有些细节还可以更稳。执舰官不只是有力量，更要有让这份力量精准准点的能力。继续精进，才不辜负大家的信任。"
  },
  {
    date: "05 / 18",
    location: "天行市",
    weather: "雨",
    title: "“雨天的味道，很像小时候。”",
    body: "下雨了，训练结束后路过旧城区。记得你那时候最讨厌打伞，总想冲进雨里。结果每次都会被我抓回来换衣服。现在长大了，应该学会照顾自己了吧？"
  }
];

export const galleryItems = [
  ["Official", "Formal white uniform", "Lightseeker ceremonial bridge"],
  ["Daily", "Black coat", "Skyhaven transit corridor"],
  ["Mission", "Command room", "Gravity route calibration"],
  ["Private", "Rain scene", "Old city after training"],
  ["Official", "Hat look", "Fleet inspection platform"],
  ["Daily", "Side profile", "Quiet observation deck"],
  ["Mission", "Night city", "Tianxing skyline patrol"],
  ["Training", "Training deck", "Simulation review archive"],
  ["Mission", "Ship bridge", "Lightseeker gravity class"]
].map(([category, title, caption], index) => ({ category, title, caption, index }));

export const profileFacts = [
  ["姓名", "Name", character.nameZh],
  ["生日", "Birthday", character.birthday],
  ["昵称", "Nickname", character.nickname],
  ["职业", "Occupation", character.occupation],
  ["Evol", "Gravity", character.evol],
  ["所在地", "Location", character.location]
];
