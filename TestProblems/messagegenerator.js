//the topic of my choosing is going to be a random message generator for telling people about how good(or not good) they are at league of legends
//first step is going to be to create the 3 seperate portions of the messages

let start = [
  "You are so good at",
  "You are absolutely cracked with",
  "Honestly, you should probably shelf your",
  "I have never seen a worse",
  "I bet you could play in the lcs with your",
  "Honestly, the way you play",
  "I need to go see an eye doctor after watching your",
  "Holy smokes you wrecked them with your",
  "Hot damn you are popping off on",
  "I cant believe it how are you so good at",
];
let champ = [
  " Yone",
  " Yasuo",
  " Teemo",
  " Bel'veth",
  " Malphite",
  " Lux",
  " Zilean",
  " Ryze",
  " Vayne",
  " Vel'koz",
];
let ending = [
  " you make me want to cut my eyes out.",
  " you make me want to go to the bathroom and er...",
  " you need to make a youtube montage.",
  " I want to start playing them too.",
  " it makes me rock hard(like malphite).",
  " I literally cannot stop laughing at how bad you are",
  " I seriously wish I was half as good as you are.",
  " even Faker himself is in awe right now.",
  " the LCK is going to put you in a montage.",
  " it is unfathomable how good you are.",
];

const messageGenerator = () => {
  console.log(start[getRand()] + champ[getRand()] + ending[getRand()]);
};

const getRand = () => {
  return Math.floor(Math.random() * 10);
};

messageGenerator();
