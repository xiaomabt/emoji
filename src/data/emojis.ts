export interface Emoji {
  id: string;
  name: string;
  emoji: string;
  unicode: string;
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  emojis: Emoji[];
}

export const categories: Category[] = [
  {
    id: "smileys",
    name: "表情符号",
    icon: "\u{1F60A}",
    emojis: [
      { id: "1", name: "微笑", emoji: "\u{1F60A}", unicode: "U+1F60A", tags: ["happy", "smile", "face"] },
      { id: "2", name: "大笑", emoji: "\u{1F604}", unicode: "U+1F604", tags: ["laugh", "happy", "joy"] },
      { id: "3", name: "花痴", emoji: "\u{1F60D}", unicode: "U+1F60D", tags: ["love", "heart", "happy"] },
      { id: "4", name: "飞吻", emoji: "\u{1F618}", unicode: "U+1F618", tags: ["kiss", "love", "affection"] },
      { id: "5", name: "眨眼", emoji: "\u{1F61C}", unicode: "U+1F61C", tags: ["playful", "wink", "funny"] },
      { id: "6", name: "害羞", emoji: "\u{1F633}", unicode: "U+1F633", tags: ["shy", "blush", "embarrassed"] },
      { id: "7", name: "思考", emoji: "\u{1F914}", unicode: "U+1F914", tags: ["thinking", "ponder", "question"] },
      { id: "8", name: "惊讶", emoji: "\u{1F632}", unicode: "U+1F632", tags: ["surprised", "shocked", "amazed"] },
      { id: "9", name: "伤心", emoji: "\u{1F622}", unicode: "U+1F622", tags: ["sad", "crying", "unhappy"] },
      { id: "10", name: "生气", emoji: "\u{1F620}", unicode: "U+1F620", tags: ["angry", "mad", "annoyed"] },
      { id: "11", name: "睡觉", emoji: "\u{1F634}", unicode: "U+1F634", tags: ["sleep", "tired", "dream"] },
      { id: "12", name: "吐舌", emoji: "\u{1F61D}", unicode: "U+1F61D", tags: ["silly", "tongue", "funny"] },
      { id: "13", name: "咧嘴笑", emoji: "\u{1F601}", unicode: "U+1F601", tags: ["grin", "happy", "smile"] },
      { id: "14", name: "眯眼笑", emoji: "\u{1F606}", unicode: "U+1F606", tags: ["laugh", "happy", "eyes"] },
      { id: "15", name: "亲亲", emoji: "\u{1F61A}", unicode: "U+1F61A", tags: ["kiss", "love", "face"] },
      { id: "16", name: "难过", emoji: "\u{1F614}", unicode: "U+1F614", tags: ["sad", "disappointed", "face"] },
      { id: "17", name: "困惑", emoji: "\u{1F615}", unicode: "U+1F615", tags: ["confused", "question", "face"] },
      { id: "18", name: "委屈", emoji: "\u{1F62B}", unicode: "U+1F62B", tags: ["sad", "disappointed", "face"] },
      { id: "19", name: "冷汗", emoji: "\u{1F630}", unicode: "U+1F630", tags: ["nervous", "anxious", "face"] },
      { id: "20", name: "惊恐", emoji: "\u{1F628}", unicode: "U+1F628", tags: ["fear", "scared", "face"] },
      { id: "21", name: "疲惫", emoji: "\u{1F62B}", unicode: "U+1F62B", tags: ["tired", "exhausted", "face"] },
      { id: "22", name: "愤怒", emoji: "\u{1F621}", unicode: "U+1F621", tags: ["angry", "rage", "face"] },
      { id: "23", name: "骷髅", emoji: "\u{1F480}", unicode: "U+1F480", tags: ["skull", "death", "spooky"] },
      { id: "24", name: "僵尸", emoji: "\u{1F9DF}", unicode: "U+1F9DF", tags: ["zombie", "monster", "scary"] }
    ]
  },
  {
    id: "hand-gestures",
    name: "手势",
    icon: "\u{1F44D}",
    emojis: [
      { id: "25", name: "点赞", emoji: "\u{1F44D}", unicode: "U+1F44D", tags: ["thumbs up", "like", "good"] },
      { id: "26", name: "比心", emoji: "\u{1F90D}", unicode: "U+1F90D", tags: ["heart hands", "love", "care"] },
      { id: "27", name: "爱心", emoji: "\u{1FAF0}", unicode: "U+1FAF0", tags: ["love", "heart", "finger"] },
      { id: "28", name: "OK", emoji: "\u{1F44C}", unicode: "U+1F44C", tags: ["ok", "fine", "good"] },
      { id: "29", name: "胜利", emoji: "\u{270C}", unicode: "U+270C", tags: ["victory", "peace", "win"] },
      { id: "30", name: "挥手", emoji: "\u{1F44B}", unicode: "U+1F44B", tags: ["wave", "hello", "goodbye"] },
      { id: "31", name: "鼓掌", emoji: "\u{1F44F}", unicode: "U+1F44F", tags: ["clap", "applause", "congrats"] },
      { id: "32", name: "双手合十", emoji: "\u{1F64F}", unicode: "U+1F64F", tags: ["pray", "thank", "respect"] },
      { id: "33", name: "拳头", emoji: "\u{270A}", unicode: "U+270A", tags: ["fist", "power", "fight"] },
      { id: "34", name: "摇滚", emoji: "\u{1F918}", unicode: "U+1F918", tags: ["rock", "metal", "music"] },
      { id: "35", name: "飞吻", emoji: "\u{1F497}", unicode: "U+1F497", tags: ["love", "heart", "affection"] },
      { id: "36", name: "交叉手指", emoji: "\u{1F91E}", unicode: "U+1F91E", tags: ["crossed", "wish", "luck"] },
      { id: "37", name: "竖中指", emoji: "\u{1F595}", unicode: "U+1F595", tags: ["middle finger", "rude", "offensive"] },
      { id: "38", name: "食指", emoji: "\u{261E}", unicode: "U+261E", tags: ["index finger", "point", "direct"] },
      { id: "39", name: "举手", emoji: "\u{1F64B}", unicode: "U+1F64B", tags: ["hand raised", "hello", "hi"] },
      { id: "40", name: "请", emoji: "\u{1F64F}", unicode: "U+1F64F", tags: ["please", "thank", "beg"] },
      { id: "41", name: "拒绝", emoji: "\u{274E}", unicode: "U+274E", tags: ["no good", "reject", "wrong"] },
      { id: "42", name: "禁止", emoji: "\u{274C}", unicode: "U+274C", tags: ["no", "stop", "block"] },
      { id: "43", name: "握手", emoji: "\u{1F91D}", unicode: "U+1F91D", tags: ["handshake", "agreement", "deal"] },
      { id: "44", name: "击掌", emoji: "\u{1F91C}", unicode: "U+1F91C", tags: ["high five", "celebration", "friend"] },
      { id: "45", name: "手掌向下", emoji: "\u{1F50A}", unicode: "U+1F50A", tags: ["palm down", "stop", "halt"] },
      { id: "46", name: "手掌向上", emoji: "\u{1F50B}", unicode: "U+1F50B", tags: ["palm up", "receive", "ask"] },
      { id: "47", name: "五指张开", emoji: "\u{1F50C}", unicode: "U+1F50C", tags: ["open hand", "five", "stop"] },
      { id: "48", name: "拇指向下", emoji: "\u{1F44E}", unicode: "U+1F44E", tags: ["thumbs down", "dislike", "bad"] }
    ]
  },
  {
    id: "animals",
    name: "动物",
    icon: "\u{1F436}",
    emojis: [
      { id: "49", name: "狗", emoji: "\u{1F436}", unicode: "U+1F436", tags: ["dog", "pet", "animal"] },
      { id: "50", name: "猫", emoji: "\u{1F431}", unicode: "U+1F431", tags: ["cat", "pet", "animal"] },
      { id: "51", name: "兔子", emoji: "\u{1F430}", unicode: "U+1F430", tags: ["rabbit", "bunny", "cute"] },
      { id: "52", name: "熊", emoji: "\u{1F43B}", unicode: "U+1F43B", tags: ["bear", "animal", "wild"] },
      { id: "53", name: "熊猫", emoji: "\u{1F43C}", unicode: "U+1F43C", tags: ["panda", "china", "cute"] },
      { id: "54", name: "老虎", emoji: "\u{1F42F}", unicode: "U+1F42F", tags: ["tiger", "wild", "animal"] },
      { id: "55", name: "狮子", emoji: "\u{1F981}", unicode: "U+1F981", tags: ["lion", "king", "wild"] },
      { id: "56", name: "大象", emoji: "\u{1F418}", unicode: "U+1F418", tags: ["elephant", "big", "animal"] },
      { id: "57", name: "猴子", emoji: "\u{1F435}", unicode: "U+1F435", tags: ["monkey", "ape", "animal"] },
      { id: "58", name: "狐狸", emoji: "\u{1F98A}", unicode: "U+1F98A", tags: ["fox", "animal", "cute"] },
      { id: "59", name: "松鼠", emoji: "\u{1F43F}", unicode: "U+1F43F", tags: ["squirrel", "cute", "animal"] },
      { id: "60", name: "企鹅", emoji: "\u{1F427}", unicode: "U+1F427", tags: ["penguin", "bird", "cute"] },
      { id: "61", name: "仓鼠", emoji: "\u{1F43D}", unicode: "U+1F43D", tags: ["hamster", "pet", "cute"] },
      { id: "62", name: "猪", emoji: "\u{1F437}", unicode: "U+1F437", tags: ["pig", "animal", "cute"] },
      { id: "63", name: "牛", emoji: "\u{1F42E}", unicode: "U+1F42E", tags: ["cow", "animal", "farm"] },
      { id: "64", name: "马", emoji: "\u{1F434}", unicode: "U+1F434", tags: ["horse", "animal", "ride"] },
      { id: "65", name: "羊", emoji: "\u{1F411}", unicode: "U+1F411", tags: ["sheep", "animal", "farm"] },
      { id: "66", name: "鸡", emoji: "\u{1F414}", unicode: "U+1F414", tags: ["chicken", "bird", "farm"] },
      { id: "67", name: "鸭", emoji: "\u{1F42D}", unicode: "U+1F42D", tags: ["duck", "bird", "water"] },
      { id: "68", name: "天鹅", emoji: "\u{1F9A2}", unicode: "U+1F9A2", tags: ["swan", "bird", "elegant"] },
      { id: "69", name: "老鹰", emoji: "\u{1F985}", unicode: "U+1F985", tags: ["eagle", "bird", "predator"] },
      { id: "70", name: "猫头鹰", emoji: "\u{1F989}", unicode: "U+1F989", tags: ["owl", "bird", "night"] },
      { id: "71", name: "孔雀", emoji: "\u{1F985}", unicode: "U+1F985", tags: ["peacock", "bird", "beautiful"] },
      { id: "72", name: "龙", emoji: "\u{1F409}", unicode: "U+1F409", tags: ["dragon", "mythical", "fantasy"] }
    ]
  },
  {
    id: "food",
    name: "食物",
    icon: "\u{1F34E}",
    emojis: [
      { id: "73", name: "苹果", emoji: "\u{1F34E}", unicode: "U+1F34E", tags: ["apple", "fruit", "food"] },
      { id: "74", name: "香蕉", emoji: "\u{1F34C}", unicode: "U+1F34C", tags: ["banana", "fruit", "food"] },
      { id: "75", name: "葡萄", emoji: "\u{1F347}", unicode: "U+1F347", tags: ["grapes", "fruit", "food"] },
      { id: "76", name: "西瓜", emoji: "\u{1F349}", unicode: "U+1F349", tags: ["watermelon", "fruit", "food"] },
      { id: "77", name: "披萨", emoji: "\u{1F355}", unicode: "U+1F355", tags: ["pizza", "food", "italian"] },
      { id: "78", name: "汉堡", emoji: "\u{1F354}", unicode: "U+1F354", tags: ["burger", "food", "fast"] },
      { id: "79", name: "薯条", emoji: "\u{1F35F}", unicode: "U+1F35F", tags: ["fries", "food", "fast"] },
      { id: "80", name: "蛋糕", emoji: "\u{1F370}", unicode: "U+1F370", tags: ["cake", "dessert", "food"] },
      { id: "81", name: "冰淇淋", emoji: "\u{1F366}", unicode: "U+1F366", tags: ["ice cream", "dessert", "food"] },
      { id: "82", name: "咖啡", emoji: "\u{2615}", unicode: "U+2615", tags: ["coffee", "drink", "hot"] },
      { id: "83", name: "茶", emoji: "\u{1F375}", unicode: "U+1F375", tags: ["tea", "drink", "hot"] },
      { id: "84", name: "可乐", emoji: "\u{1F964}", unicode: "U+1F964", tags: ["cola", "drink", "cold"] },
      { id: "85", name: "橙子", emoji: "\u{1F34A}", unicode: "U+1F34A", tags: ["orange", "fruit", "citrus"] },
      { id: "86", name: "柠檬", emoji: "\u{1F34B}", unicode: "U+1F34B", tags: ["lemon", "fruit", "citrus"] },
      { id: "87", name: "草莓", emoji: "\u{1F353}", unicode: "U+1F353", tags: ["strawberry", "fruit", "berry"] },
      { id: "88", name: "樱桃", emoji: "\u{1F352}", unicode: "U+1F352", tags: ["cherry", "fruit", "berry"] },
      { id: "89", name: "桃子", emoji: "\u{1F34D}", unicode: "U+1F34D", tags: ["peach", "fruit", "stone"] },
      { id: "90", name: "梨", emoji: "\u{1F350}", unicode: "U+1F350", tags: ["pear", "fruit", "food"] },
      { id: "91", name: "猕猴桃", emoji: "\u{1F34F}", unicode: "U+1F34F", tags: ["kiwi", "fruit", "food"] },
      { id: "92", name: "芒果", emoji: "\u{1F96D}", unicode: "U+1F96D", tags: ["mango", "fruit", "tropical"] },
      { id: "93", name: "菠萝", emoji: "\u{1F34D}", unicode: "U+1F34D", tags: ["pineapple", "fruit", "tropical"] },
      { id: "94", name: "椰子", emoji: "\u{1F33C}", unicode: "U+1F33C", tags: ["coconut", "fruit", "tropical"] },
      { id: "95", name: "寿司", emoji: "\u{1F363}", unicode: "U+1F363", tags: ["sushi", "food", "japanese"] },
      { id: "96", name: "面条", emoji: "\u{1F35C}", unicode: "U+1F35C", tags: ["noodles", "food", "asian"] }
    ]
  },
  {
    id: "nature",
    name: "自然",
    icon: "\u{1F338}",
    emojis: [
      { id: "97", name: "花", emoji: "\u{1F338}", unicode: "U+1F338", tags: ["flower", "nature", "spring"] },
      { id: "98", name: "玫瑰", emoji: "\u{1F339}", unicode: "U+1F339", tags: ["rose", "flower", "love"] },
      { id: "99", name: "叶子", emoji: "\u{1F343}", unicode: "U+1F343", tags: ["leaf", "nature", "green"] },
      { id: "100", name: "树", emoji: "\u{1F333}", unicode: "U+1F333", tags: ["tree", "nature", "plant"] },
      { id: "101", name: "太阳", emoji: "\u{2600}", unicode: "U+2600", tags: ["sun", "weather", "hot"] },
      { id: "102", name: "月亮", emoji: "\u{1F319}", unicode: "U+1F319", tags: ["moon", "night", "weather"] },
      { id: "103", name: "星星", emoji: "\u{2B50}", unicode: "U+2B50", tags: ["star", "night", "sky"] },
      { id: "104", name: "云", emoji: "\u{2601}", unicode: "U+2601", tags: ["cloud", "weather", "sky"] },
      { id: "105", name: "彩虹", emoji: "\u{1F308}", unicode: "U+1F308", tags: ["rainbow", "weather", "colorful"] },
      { id: "106", name: "闪电", emoji: "\u{26A1}", unicode: "U+26A1", tags: ["lightning", "weather", "power"] },
      { id: "107", name: "雪花", emoji: "\u{2744}", unicode: "U+2744", tags: ["snow", "winter", "weather"] },
      { id: "108", name: "火焰", emoji: "\u{1F525}", unicode: "U+1F525", tags: ["fire", "hot", "burn"] },
      { id: "109", name: "雨", emoji: "\u{2614}", unicode: "U+2614", tags: ["rain", "weather", "water"] },
      { id: "110", name: "多云", emoji: "\u{26C5}", unicode: "U+26C5", tags: ["cloudy", "weather", "sky"] },
      { id: "111", name: "大风", emoji: "\u{1F32A}", unicode: "U+1F32A", tags: ["wind", "weather", "air"] },
      { id: "112", name: "龙卷风", emoji: "\u{1F32A}", unicode: "U+1F32A", tags: ["tornado", "weather", "storm"] },
      { id: "113", name: "海啸", emoji: "\u{1F30A}", unicode: "U+1F30A", tags: ["tsunami", "weather", "water"] },
      { id: "114", name: "山", emoji: "\u{26F0}", unicode: "U+26F0", tags: ["mountain", "nature", "landscape"] },
      { id: "115", name: "火山", emoji: "\u{1F30B}", unicode: "U+1F30B", tags: ["volcano", "nature", "erupt"] },
      { id: "116", name: "沙漠", emoji: "\u{1F3DC}", unicode: "U+1F3DC", tags: ["desert", "nature", "hot"] },
      { id: "117", name: "海滩", emoji: "\u{1F3DD}", unicode: "U+1F3DD", tags: ["beach", "nature", "ocean"] },
      { id: "118", name: "贝壳", emoji: "\u{1F41A}", unicode: "U+1F41A", tags: ["shell", "nature", "ocean"] },
      { id: "119", name: "蝴蝶", emoji: "\u{1F98B}", unicode: "U+1F98B", tags: ["butterfly", "insect", "nature"] },
      { id: "120", name: "蜜蜂", emoji: "\u{1F41D}", unicode: "U+1F41D", tags: ["bee", "insect", "nature"] }
    ]
  },
  {
    id: "travel",
    name: "旅行",
    icon: "\u{2708}",
    emojis: [
      { id: "121", name: "飞机", emoji: "\u{2708}", unicode: "U+2708", tags: ["plane", "travel", "flight"] },
      { id: "122", name: "汽车", emoji: "\u{1F697}", unicode: "U+1F697", tags: ["car", "travel", "vehicle"] },
      { id: "123", name: "火车", emoji: "\u{1F682}", unicode: "U+1F682", tags: ["train", "travel", "vehicle"] },
      { id: "124", name: "轮船", emoji: "\u{1F6A2}", unicode: "U+1F6A2", tags: ["ship", "travel", "sea"] },
      { id: "125", name: "公交车", emoji: "\u{1F68C}", unicode: "U+1F68C", tags: ["bus", "travel", "public"] },
      { id: "126", name: "自行车", emoji: "\u{1F6B2}", unicode: "U+1F6B2", tags: ["bike", "travel", "sport"] },
      { id: "127", name: "出租车", emoji: "\u{1F695}", unicode: "U+1F695", tags: ["taxi", "travel", "ride"] },
      { id: "128", name: "酒店", emoji: "\u{1F3E8}", unicode: "U+1F3E8", tags: ["hotel", "travel", "stay"] },
      { id: "129", name: "城堡", emoji: "\u{1F3F0}", unicode: "U+1F3F0", tags: ["castle", "travel", "historic"] },
      { id: "130", name: "地图", emoji: "\u{1F5FA}", unicode: "U+1F5FA", tags: ["map", "travel", "direction"] },
      { id: "131", name: "指南针", emoji: "\u{1F9ED}", unicode: "U+1F9ED", tags: ["compass", "travel", "navigate"] },
      { id: "132", name: "行李箱", emoji: "\u{1F9F3}", unicode: "U+1F9F3", tags: ["suitcase", "travel", "bag"] },
      { id: "133", name: "直升机", emoji: "\u{1F681}", unicode: "U+1F681", tags: ["helicopter", "travel", "flight"] },
      { id: "134", name: "卡车", emoji: "\u{1F69A}", unicode: "U+1F69A", tags: ["truck", "vehicle", "transport"] },
      { id: "135", name: "摩托车", emoji: "\u{1F3CD}", unicode: "U+1F3CD", tags: ["motorcycle", "vehicle", "ride"] },
      { id: "136", name: "船", emoji: "\u{1F6A4}", unicode: "U+1F6A4", tags: ["boat", "vehicle", "water"] },
      { id: "137", name: "潜艇", emoji: "\u{1F6F4}", unicode: "U+1F6F4", tags: ["submarine", "vehicle", "underwater"] },
      { id: "138", name: "火箭", emoji: "\u{1F680}", unicode: "U+1F680", tags: ["rocket", "space", "travel"] },
      { id: "139", name: "飞碟", emoji: "\u{1F6F8}", unicode: "U+1F6F8", tags: ["ufo", "space", "alien"] },
      { id: "140", name: "地标", emoji: "\u{1F3DB}", unicode: "U+1F3DB", tags: ["landmark", "travel", "building"] },
      { id: "141", name: "帐篷", emoji: "\u{26FA}", unicode: "U+26FA", tags: ["tent", "camping", "travel"] },
      { id: "142", name: "背包", emoji: "\u{1F392}", unicode: "U+1F392", tags: ["backpack", "travel", "hiking"] },
      { id: "143", name: "护照", emoji: "\u{1F9FE}", unicode: "U+1F9FE", tags: ["passport", "travel", "document"] },
      { id: "144", name: "机票", emoji: "\u{1F4DD}", unicode: "U+1F4DD", tags: ["ticket", "travel", "plane"] }
    ]
  },
  {
    id: "celebration",
    name: "庆祝",
    icon: "\u{1F389}",
    emojis: [
      { id: "145", name: "派对", emoji: "\u{1F389}", unicode: "U+1F389", tags: ["party", "celebration", "fun"] },
      { id: "146", name: "气球", emoji: "\u{1F388}", unicode: "U+1F388", tags: ["balloon", "celebration", "party"] },
      { id: "147", name: "礼物", emoji: "\u{1F381}", unicode: "U+1F381", tags: ["gift", "present", "birthday"] },
      { id: "148", name: "生日蛋糕", emoji: "\u{1F382}", unicode: "U+1F382", tags: ["cake", "birthday", "celebration"] },
      { id: "149", name: "烟花", emoji: "\u{1F386}", unicode: "U+1F386", tags: ["fireworks", "celebration", "night"] },
      { id: "150", name: "彩纸", emoji: "\u{1F38A}", unicode: "U+1F38A", tags: ["confetti", "celebration", "party"] },
      { id: "151", name: "奖杯", emoji: "\u{1F3C6}", unicode: "U+1F3C6", tags: ["trophy", "award", "win"] },
      { id: "152", name: "奖牌", emoji: "\u{1F947}", unicode: "U+1F947", tags: ["medal", "award", "gold"] },
      { id: "153", name: "星星", emoji: "\u{1F31F}", unicode: "U+1F31F", tags: ["star", "celebration", "shine"] },
      { id: "154", name: "皇冠", emoji: "\u{1F451}", unicode: "U+1F451", tags: ["crown", "royal", "king"] },
      { id: "155", name: "爱心", emoji: "\u{2764}", unicode: "U+2764", tags: ["heart", "love", "romance"] },
      { id: "156", name: "派对吹龙", emoji: "\u{1F94A}", unicode: "U+1F94A", tags: ["party", "celebration", "noise"] },
      { id: "157", name: "彩带", emoji: "\u{1F38F}", unicode: "U+1F38F", tags: ["streamer", "celebration", "party"] },
      { id: "158", name: "礼帽", emoji: "\u{1F3A9}", unicode: "U+1F3A9", tags: ["top hat", "fancy", "celebration"] },
      { id: "159", name: "派对帽", emoji: "\u{1F3A9}", unicode: "U+1F3A9", tags: ["party hat", "celebration", "birthday"] },
      { id: "160", name: "香槟", emoji: "\u{1F37E}", unicode: "U+1F37E", tags: ["champagne", "celebration", "drink"] },
      { id: "161", name: "干杯", emoji: "\u{1F37B}", unicode: "U+1F37B", tags: ["cheers", "celebration", "drink"] },
      { id: "162", name: "红包", emoji: "\u{1F381}", unicode: "U+1F381", tags: ["red envelope", "celebration", "money"] },
      { id: "163", name: "圣诞树", emoji: "\u{1F384}", unicode: "U+1F384", tags: ["christmas tree", "holiday", "celebration"] },
      { id: "164", name: "铃铛", emoji: "\u{1F383}", unicode: "U+1F383", tags: ["bell", "christmas", "celebration"] },
      { id: "165", name: "蝴蝶结", emoji: "\u{1F380}", unicode: "U+1F380", tags: ["bow", "gift", "celebration"] },
      { id: "166", name: "花环", emoji: "\u{1F39C}", unicode: "U+1F39C", tags: ["wreath", "celebration", "holiday"] },
      { id: "167", name: "奖牌", emoji: "\u{1F948}", unicode: "U+1F948", tags: ["silver medal", "award", "second"] },
      { id: "168", name: "铜牌", emoji: "\u{1F949}", unicode: "U+1F949", tags: ["bronze medal", "award", "third"] }
    ]
  },
  {
    id: "objects",
    name: "物品",
    icon: "\u{1F4A1}",
    emojis: [
      { id: "169", name: "灯泡", emoji: "\u{1F4A1}", unicode: "U+1F4A1", tags: ["lightbulb", "idea", "bright"] },
      { id: "170", name: "笔记本电脑", emoji: "\u{1F4BB}", unicode: "U+1F4BB", tags: ["laptop", "computer", "work"] },
      { id: "171", name: "手机", emoji: "\u{1F4F1}", unicode: "U+1F4F1", tags: ["phone", "mobile", "communication"] },
      { id: "172", name: "相机", emoji: "\u{1F4F7}", unicode: "U+1F4F7", tags: ["camera", "photo", "picture"] },
      { id: "173", name: "书", emoji: "\u{1F4DA}", unicode: "U+1F4DA", tags: ["books", "reading", "knowledge"] },
      { id: "174", name: "钢笔", emoji: "\u{2712}", unicode: "U+2712", tags: ["pen", "writing", "draw"] },
      { id: "175", name: "铅笔", emoji: "\u{270F}", unicode: "U+270F", tags: ["pencil", "writing", "draw"] },
      { id: "176", name: "钱包", emoji: "\u{1F45B}", unicode: "U+1F45B", tags: ["purse", "money", "wallet"] },
      { id: "177", name: "钥匙", emoji: "\u{1F511}", unicode: "U+1F511", tags: ["key", "lock", "security"] },
      { id: "178", name: "时钟", emoji: "\u{1F550}", unicode: "U+1F550", tags: ["clock", "time", "watch"] },
      { id: "179", name: "闹钟", emoji: "\u{23F0}", unicode: "U+23F0", tags: ["alarm", "clock", "wake"] },
      { id: "180", name: "眼镜", emoji: "\u{1F453}", unicode: "U+1F453", tags: ["glasses", "vision", "fashion"] },
      { id: "181", name: "放大镜", emoji: "\u{1F50D}", unicode: "U+1F50D", tags: ["magnifying glass", "search", "look"] },
      { id: "182", name: "手电筒", emoji: "\u{1F526}", unicode: "U+1F526", tags: ["flashlight", "light", "dark"] },
      { id: "183", name: "锤子", emoji: "\u{1F528}", unicode: "U+1F528", tags: ["hammer", "tool", "repair"] },
      { id: "184", name: "螺丝刀", emoji: "\u{1F527}", unicode: "U+1F527", tags: ["wrench", "tool", "repair"] },
      { id: "185", name: "剪刀", emoji: "\u{2702}", unicode: "U+2702", tags: ["scissors", "cut", "craft"] },
      { id: "186", name: "尺子", emoji: "\u{1F4CF}", unicode: "U+1F4CF", tags: ["ruler", "measure", "tool"] },
      { id: "187", name: "计算器", emoji: "\u{1F4B0}", unicode: "U+1F4B0", tags: ["calculator", "math", "tool"] },
      { id: "188", name: "打印机", emoji: "\u{1F5A8}", unicode: "U+1F5A8", tags: ["printer", "office", "device"] },
      { id: "189", name: "硬盘", emoji: "\u{1F4BE}", unicode: "U+1F4BE", tags: ["hard drive", "storage", "computer"] },
      { id: "190", name: "U盘", emoji: "\u{1F4BF}", unicode: "U+1F4BF", tags: ["usb", "flash drive", "storage"] },
      { id: "191", name: "耳机", emoji: "\u{1F3A7}", unicode: "U+1F3A7", tags: ["headphones", "music", "audio"] },
      { id: "192", name: "麦克风", emoji: "\u{1F3A4}", unicode: "U+1F3A4", tags: ["microphone", "audio", "music"] }
    ]
  },
  {
    id: "sports",
    name: "运动",
    icon: "\u{1F3C0}",
    emojis: [
      { id: "193", name: "足球", emoji: "\u{26BD}", unicode: "U+26BD", tags: ["soccer", "football", "sport"] },
      { id: "194", name: "篮球", emoji: "\u{1F3C0}", unicode: "U+1F3C0", tags: ["basketball", "sport", "game"] },
      { id: "195", name: "排球", emoji: "\u{1F3D0}", unicode: "U+1F3D0", tags: ["volleyball", "sport", "game"] },
      { id: "196", name: "网球", emoji: "\u{1F3BE}", unicode: "U+1F3BE", tags: ["tennis", "sport", "racket"] },
      { id: "197", name: "高尔夫", emoji: "\u{26F3}", unicode: "U+26F3", tags: ["golf", "sport", "club"] },
      { id: "198", name: "棒球", emoji: "\u{26BE}", unicode: "U+26BE", tags: ["baseball", "sport", "bat"] },
      { id: "199", name: "橄榄球", emoji: "\u{1F3C8}", unicode: "U+1F3C8", tags: ["rugby", "sport", "ball"] },
      { id: "200", name: "保龄球", emoji: "\u{1F3B1}", unicode: "U+1F3B1", tags: ["bowling", "sport", "pin"] },
      { id: "201", name: "乒乓球", emoji: "\u{1F3D3}", unicode: "U+1F3D3", tags: ["ping pong", "sport", "table tennis"] },
      { id: "202", name: "羽毛球", emoji: "\u{1F3BD}", unicode: "U+1F3BD", tags: ["badminton", "sport", "racket"] },
      { id: "203", name: "跑步", emoji: "\u{1F3C3}", unicode: "U+1F3C3", tags: ["running", "sport", "athlete"] },
      { id: "204", name: "游泳", emoji: "\u{1F3CA}", unicode: "U+1F3CA", tags: ["swimming", "sport", "water"] },
      { id: "205", name: "自行车", emoji: "\u{1F6B4}", unicode: "U+1F6B4", tags: ["cycling", "sport", "bike"] },
      { id: "206", name: "举重", emoji: "\u{1F3CB}", unicode: "U+1F3CB", tags: ["weightlifting", "sport", "strength"] },
      { id: "207", name: "拳击", emoji: "\u{1F9B3}", unicode: "U+1F9B3", tags: ["boxing", "sport", "fight"] },
      { id: "208", name: "柔道", emoji: "\u{1F9B9}", unicode: "U+1F9B9", tags: ["judo", "sport", "martial arts"] },
      { id: "209", name: "击剑", emoji: "\u{1F93A}", unicode: "U+1F93A", tags: ["fencing", "sport", "sword"] },
      { id: "210", name: "射箭", emoji: "\u{1F3F9}", unicode: "U+1F3F9", tags: ["archery", "sport", "bow"] },
      { id: "211", name: "射击", emoji: "\u{1F3AF}", unicode: "U+1F3AF", tags: ["shooting", "sport", "target"] },
      { id: "212", name: "马术", emoji: "\u{1F3C7}", unicode: "U+1F3C7", tags: ["equestrian", "sport", "horse"] },
      { id: "213", name: "滑雪", emoji: "\u{26C8}", unicode: "U+26C8", tags: ["skiing", "sport", "snow"] },
      { id: "214", name: "冲浪", emoji: "\u{1F3C4}", unicode: "U+1F3C4", tags: ["surfing", "sport", "wave"] },
      { id: "215", name: "滑板", emoji: "\u{1F6F8}", unicode: "U+1F6F8", tags: ["skateboarding", "sport", "board"] },
      { id: "216", name: "奖杯", emoji: "\u{1F3C6}", unicode: "U+1F3C6", tags: ["trophy", "sport", "win"] }
    ]
  },
  {
    id: "symbols",
    name: "符号",
    icon: "\u{2728}",
    emojis: [
      { id: "217", name: "星星", emoji: "\u{2B50}", unicode: "U+2B50", tags: ["star", "symbol", "rating"] },
      { id: "218", name: "爱心", emoji: "\u{2764}", unicode: "U+2764", tags: ["heart", "love", "symbol"] },
      { id: "219", name: "钻石", emoji: "\u{1F48E}", unicode: "U+1F48E", tags: ["diamond", "gem", "precious"] },
      { id: "220", name: "皇冠", emoji: "\u{1F451}", unicode: "U+1F451", tags: ["crown", "royal", "symbol"] },
      { id: "221", name: "和平", emoji: "\u{262E}", unicode: "U+262E", tags: ["peace", "symbol", "world"] },
      { id: "222", name: "骷髅", emoji: "\u{1F480}", unicode: "U+1F480", tags: ["skull", "danger", "symbol"] },
      { id: "223", name: "警告", emoji: "\u{26A0}", unicode: "U+26A0", tags: ["warning", "caution", "danger"] },
      { id: "224", name: "禁止", emoji: "\u{1F6AB}", unicode: "U+1F6AB", tags: ["no", "prohibited", "symbol"] },
      { id: "225", name: "循环", emoji: "\u{27F3}", unicode: "U+27F3", tags: ["recycle", "loop", "symbol"] },
      { id: "226", name: "刷新", emoji: "\u{1F504}", unicode: "U+1F504", tags: ["refresh", "reload", "symbol"] },
      { id: "227", name: "电池", emoji: "\u{1F50B}", unicode: "U+1F50B", tags: ["battery", "power", "symbol"] },
      { id: "228", name: "WiFi", emoji: "\u{1F4F6}", unicode: "U+1F4F6", tags: ["wifi", "internet", "symbol"] },
      { id: "229", name: "蓝牙", emoji: "\u{1F4A3}", unicode: "U+1F4A3", tags: ["bluetooth", "connection", "symbol"] },
      { id: "230", name: "定位", emoji: "\u{1F4CD}", unicode: "U+1F4CD", tags: ["location", "map", "symbol"] },
      { id: "231", name: "邮件", emoji: "\u{2709}", unicode: "U+2709", tags: ["email", "mail", "symbol"] },
      { id: "232", name: "电话", emoji: "\u{260E}", unicode: "U+260E", tags: ["phone", "call", "symbol"] },
      { id: "233", name: "信息", emoji: "\u{2139}", unicode: "U+2139", tags: ["info", "help", "symbol"] },
      { id: "234", name: "问号", emoji: "\u{2753}", unicode: "U+2753", tags: ["question", "help", "symbol"] },
      { id: "235", name: "感叹号", emoji: "\u{2757}", unicode: "U+2757", tags: ["exclamation", "attention", "symbol"] },
      { id: "236", name: "勾", emoji: "\u{2705}", unicode: "U+2705", tags: ["check", "correct", "symbol"] },
      { id: "237", name: "叉", emoji: "\u{274C}", unicode: "U+274C", tags: ["cross", "wrong", "symbol"] },
      { id: "238", name: "加号", emoji: "\u{2795}", unicode: "U+2795", tags: ["plus", "add", "symbol"] },
      { id: "239", name: "减号", emoji: "\u{2796}", unicode: "U+2796", tags: ["minus", "subtract", "symbol"] },
      { id: "240", name: "乘号", emoji: "\u{2715}", unicode: "U+2715", tags: ["multiply", "times", "symbol"] }
    ]
  },
]

export const getAllEmojis = (): Emoji[] => {
  return categories.flatMap(category => category.emojis)
}

export const searchEmojis = (query: string): Emoji[] => {
  const lowerQuery = query.toLowerCase().trim()
  if (!lowerQuery) return getAllEmojis()
  
  return getAllEmojis().filter(emoji => 
    emoji.name.toLowerCase().includes(lowerQuery) ||
    emoji.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  )
}

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(category => category.id === id)
}