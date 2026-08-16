// =============================================================
// data.js — 釜山旅遊特助：靜態資料
// 包含：hotelData（飯店）、itineraryData（6 天行程）
// =============================================================

// Hotel Accommodation Data per day (sourced from 釜山Naver Map地址.docx)
    const hotelData = {
      day1: {
        name: "西面：Arban Hotel 阿班飯店 🏨",
        address: "부산 부산진구 중앙대로691번길 32",
        note: "【住宿提醒】9/11 入住 1 晚。位於西面站 6/7 號出口步行 3-5 分鐘，生活機能極佳！"
      },
      day2: {
        name: "廣安里：H Avenue Gwangalli Beach 廣安里海灘飯店 🏨",
        address: "부산 수영구 광안해변로278번길 42 B동 9층",
        note: "【換飯店提醒】今日從西面 Arban 退房，移防至廣安里海灘飯店（連住 4 晚至 9/16）！"
      },
      day3: {
        name: "廣安里：H Avenue Gwangalli Beach 廣安里海灘飯店 🏨",
        address: "부산 수영구 광안해변로278번길 42 B동 9층",
        note: "【住宿】連住第 2 晚。飯店位於廣安海灘旁，出門即達水邊公園與沙灘。"
      },
      day4: {
        name: "廣安里：H Avenue Gwangalli Beach 廣安里海灘飯店 🏨",
        address: "부산 수영구 광안해변로278번길 42 B동 9층",
        note: "【住宿】連住第 3 晚。今日遊覽海東龍宮寺與海雲台，晚間返回廣安里。"
      },
      day5: {
        name: "廣安里：H Avenue Gwangalli Beach 廣安里海灘飯店 🏨",
        address: "부산 수영구 광안해변로278번길 42 B동 9층",
        note: "【住宿】連住第 4 晚（最後一晚）。今日體驗海雲台膠囊列車與 Club D Oasis 汗蒸幕。"
      },
      day6: {
        name: "廣安里 ➔ 韓國金海國際機場 ✈️",
        address: "부산광역시 강서구 공항진입로 108",
        note: "【歸賦】辦理退房歸賦前往金海機場，搭機返台結束美好行程！"
      }
    };

    // Full 6-Day Itinerary Data Object (9/11 ~ 9/16)
    const itineraryData = {
  "day1": [
    {
      "id": "d1-spot-0",
      "timeStart": "09:00",
      "timeEnd": "14:15",
      "title": "啟程：台南出發 ➔ 高雄小港機場 🛫",
      "desc": "預計早上 09:00-09:30 從台南出發前往小港機場，14:15 飛機起飛。",
      "address": "高雄國際機場 (小港機場)",
      "note": "【備忘】出發前確定 E-sim 安裝、 Visit Busan Pass App 綁定、隨身準備 ₩50,000~₩100,000 韓元現金儲值交通卡。",
      "mapLinkGoogle": "https://www.google.com/maps/dir/?api=1&destination=高雄國際機場",
      "estimatedCost": 0,
      "costLabel": "啟程出發"
    },
    {
      "id": "d1-spot-1",
      "timeStart": "14:15",
      "timeEnd": "17:55",
      "title": "飛行與入境：高雄小港 ➔ 釜山金海國際機場 ✈️",
      "desc": "17:55 抵達金海機場。辦理入境手續後搭輕軌至沙上站轉地鐵至西面。",
      "address": "부산광역시 강서구 공항진입로 108 (김해국제공항)",
      "note": "【交通與入境】搭輕軌至沙上站(30分鐘) ➔ 轉地鐵 2 號線至【西面站】(約45分鐘)。入境可預先填寫電子入境卡 (e-Arrival Card)。",
      "mapLinkKakao": "https://map.kakao.com/link/search/김해국제공항",
      "mapLinkNaver": "https://map.naver.com/v5/search/김해국제공항",
      "estimatedCost": 2500,
      "costLabel": "輕軌地鐵交通費"
    },
    {
      "id": "d1-spot-2-1",
      "timeStart": "19:30",
      "timeEnd": "19:50",
      "title": "換錢：西面「那英換錢所」換韓元 💵",
      "desc": "前往西面站 7 號出口旁老奶奶那英換錢所換足韓元現金。",
      "address": "부산광역시 부산진구 서면로 56 (부전동 256-6)",
      "note": "【換錢】西面站 7 號出口步行 2-3 分鐘，位於服飾/雜貨店內，匯率極佳！",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 부산진구 서면로 56",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 부산진구 서면로 56",
      "estimatedCost": 0,
      "costLabel": "換匯現鈔"
    },
    {
      "id": "d1-spot-2-2",
      "timeStart": "19:50",
      "timeEnd": "20:10",
      "title": "入住：Arban Hotel Check-in 🏨",
      "desc": "抵達西面熱鬧商圈中心的 Arban Hotel 辦理入住放行李。",
      "address": "부산광역시 부산진구 중앙대로691번길 32 (아르반호텔)",
      "note": "【飯店】西面站步行約 5 分鐘，生活機能極佳，周邊餐廳藥妝林立。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 부산진구 중앙대로691번길 32",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 부산진구 중앙대로691번길 32",
      "estimatedCost": 0,
      "costLabel": "辦理入住"
    },
    {
      "id": "d1-spot-3",
      "timeStart": "20:10",
      "timeEnd": "21:30",
      "title": "晚餐：山莊 1988 (Sanjang 1988 馬鈴薯排骨湯) 🍲",
      "desc": "西面復古熱點！享用香辣濃郁、肉質軟嫩離骨的馬鈴薯排骨湯。",
      "address": "부산 부산진구 동천로 97-6",
      "note": "【美食】西面年輕人熱門名店，復古氛圍滿分，吸飽湯汁的大骨與馬鈴薯極度美味！",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 부산진구 동천로 97-6",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 부산진구 동천로 97-6",
      "estimatedCost": 35000,
      "costLabel": "馬鈴薯排骨湯晚餐費"
    },
    {
      "id": "d1-spot-4",
      "timeStart": "21:30",
      "timeEnd": "23:00",
      "title": "購物：Olive Young 西面總店 & 西面짱藥局 🛍️",
      "desc": "大逛西面站 7 號出口 Olive Young 旗艦店與西面짱藥局採買護膚與藥品。",
      "address": "부산광역시 부산진구 중앙대로 704-1 (Olive Young / 서면짱약국)",
      "note": "【退稅提醒】Olive Young 滿 3 萬韓元現場持護照退稅！【西面짱藥局】藥局超大退稅齊全，有繁體中文說明。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 부산진구 중앙대로 704-1",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 부산진구 중앙대로 704-1",
      "estimatedCost": 50000,
      "costLabel": "首晚藥妝與保健採買"
    }
  ],
  "day2": [
    {
      "id": "d2-spot-1",
      "timeStart": "09:30",
      "timeEnd": "10:00",
      "title": "早餐：Egg Drop 西面樂天後門店 🥪",
      "desc": "退房前外帶現烤蒜香歐姆蛋吐司，當作去影島車上的點心。",
      "address": "부산 부산진구 부전로66번길 12",
      "note": "【美食】爆漿滑嫩歐姆蛋搭配奶油吐司，熱騰騰美味滿分。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 부산진구 부전로66번길 12",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 부산진구 부전로66번길 12",
      "estimatedCost": 12000,
      "costLabel": "Egg Drop 早餐費"
    },
    {
      "id": "d2-spot-2-1",
      "timeStart": "10:00",
      "timeEnd": "10:20",
      "title": "Zimcarry 行李寄送 🧳",
      "desc": "預約 Zimcarry 將行李交給西面 Arban 飯店櫃檯寄送，當日直達廣安里飯店！",
      "address": "부산 부산진구 중앙대로691번길 32 (Arban Hotel)",
      "note": "【Zimcarry】行李直達廣安里飯店。辦理退房並在 Arban 櫃檯交付行李即可，無需自己提行李。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 부산진구 중앙대로691번길 32",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 부산진구 중앙대로691번길 32",
      "estimatedCost": 10000,
      "costLabel": "Zimcarry 行李寄送費"
    },
    {
      "id": "d2-spot-2-2",
      "timeStart": "10:20",
      "timeEnd": "11:00",
      "title": "出發前往影島海女村 🚕",
      "desc": "叫計程車輕裝直奔影島，沿途欣賞大橋與海景！",
      "address": "부산광역시 영도구 중리남로 2-36 (영도해녀촌)",
      "note": "【交通】計程車車程約 25 分鐘，直達影島海女村午餐地。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 영도구 중리남로 2-36",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 영도구 중리남로 2-36",
      "estimatedCost": 5000,
      "costLabel": "前往影島計程車資"
    },
    {
      "id": "d2-spot-3",
      "timeStart": "11:30",
      "timeEnd": "13:00",
      "title": "午餐：影島海女村 (영도해녀촌) 🌊",
      "desc": "坐在海邊岩石草蓆上，享用海女現撈新鮮海膽 + 紫菜飯捲 + 海膽拉麵。",
      "address": "부산광역시 영도구 중리남로 2-36",
      "note": "【美食】將新鮮海膽放在紫菜飯捲上一口吃下，絕美海景與極致美味！",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 영도구 중리남로 2-36",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 영도구 중리남로 2-36",
      "estimatedCost": 35000,
      "costLabel": "海鮮海膽拉麵餐費"
    },
    {
      "id": "d2-spot-4-1",
      "timeStart": "13:30",
      "timeEnd": "14:30",
      "title": "景點：國立海洋博物館 🐳",
      "desc": "參觀免費圓柱海底隧道水族館，欣賞精彩海洋生態展示。",
      "address": "부산광역시 영도구 해양로301번길 45 (국립해양박물관)",
      "note": "【參觀】韓國第一座國立海洋博物館，大廳的圓柱水族箱與特展非常值得一看！門票免費。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 영도구 해양로301번길 45",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 영도구 해양로301번길 45",
      "estimatedCost": 0,
      "costLabel": "免費參觀"
    },
    {
      "id": "d2-spot-4-2",
      "timeStart": "14:30",
      "timeEnd": "15:30",
      "title": "下午茶：P.ARK 海景咖啡廳 ☕",
      "desc": "大逛影島巨型海景咖啡廳，喝咖啡、享用甜點看海景。",
      "address": "부산광역시 영도구 해양로195번길 180 (피아크)",
      "note": "【下午茶】巨型複合文化空間，4 樓看出去的釜山港與海景視野絕佳，麵包與咖啡深受好評！",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 영도구 해양로195번길 180",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 영도구 해양로195번길 180",
      "estimatedCost": 20000,
      "costLabel": "P.ARK 下午茶點心"
    },
    {
      "id": "d2-spot-4-3",
      "timeStart": "15:30",
      "timeEnd": "16:30",
      "title": "景點：白淺灘文化村 🎨",
      "desc": "沿白淺灘文化村步道漫步，拍攝絕壁海岸隧道與彩繪彩虹階梯。",
      "address": "부산광역시 영도구 절영로 194 (흰여울문화마을)",
      "note": "【拍照】沿著海岸峭壁散步，極像希臘聖托里尼的藍白彩繪村落，海岸隧道入口是絕佳合照點！",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 영도구 절영로 194",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 영도구 절영로 194",
      "estimatedCost": 0,
      "costLabel": "白淺灘參觀"
    },
    {
      "id": "d2-spot-5",
      "timeStart": "16:30",
      "timeEnd": "17:15",
      "title": "廣安里 Check-in：H Avenue Gwangalli Beach 🏨",
      "desc": "搭計程車返回廣安里 H 大道飯店入住 (連住 4 晚至 9/16)。",
      "address": "부산 수영구 광안해변로278번길 42 B동 9층",
      "note": "【住宿】房間面海第一排！放好行李休整漫步廣安里沙灘。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 수영구 광안해변로278번길 42",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 수영구 광안해변로278번길 42",
      "estimatedCost": 15000,
      "costLabel": "回廣安里計程車資"
    },
    {
      "id": "d2-spot-6-1",
      "timeStart": "18:00",
      "timeEnd": "18:30",
      "title": "水邊最高豬肉湯飯抽號碼牌 📱",
      "desc": "先前往廣安里水邊最高豬肉湯飯現場或 Catch Table 抽號碼牌。",
      "address": "부산 수영구 광안해변로370번길 9-32 (수변최고돼지국밥 민락본점)",
      "note": "【湯飯排隊】熱門用餐時間需排隊，先抽號碼牌再前往 Millac 逛街，善用等待時間！",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 수영구 광안해변로370번길 9-32",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 수영구 광안해변로370번길 9-32",
      "estimatedCost": 0,
      "costLabel": "抽湯飯號碼牌"
    },
    {
      "id": "d2-spot-6-2",
      "timeStart": "18:30",
      "timeEnd": "20:00",
      "title": "逛街：Millac the Market 複合商場 🛍️",
      "desc": "散步至 Millac the Market，體驗特色複合式商場，採買精緻小物與特色小食。",
      "address": "부산 수영구 민락수변로 17번길 56 (밀락더마켓)",
      "note": "【逛街】近年最夯的潮流倉庫式空間，大階梯面海設計極具現代感，裡面有很多文青設計店鋪及美味點心。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 수영구 민락수변로 17번길 56",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 수영구 민락수변로 17번길 56",
      "estimatedCost": 10000,
      "costLabel": "Millac Market 點心與購物"
    },
    {
      "id": "d2-spot-7",
      "timeStart": "20:00",
      "timeEnd": "20:15",
      "title": "廣安里 M 無人機燈光秀 (Gwangalli Drone Light Show) 🎆",
      "desc": "在廣安里房間或沙灘觀賞週六夜間無人機燈光秀！",
      "address": "부산 수영구 광안해변로 219",
      "note": "【燈光秀時間】夏季每週六 20:00 及 22:00 (長度約 10-12 分鐘)。廣安大橋夜景美不勝收！",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 수영구 광안해변로 219",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 수영구 광안해변로 219",
      "estimatedCost": 0,
      "costLabel": "免費觀賞"
    },
    {
      "id": "d2-spot-8",
      "timeStart": "20:30",
      "timeEnd": "22:00",
      "title": "晚餐：水邊最高豬肉湯飯 (수변최고돼지국밥) 🍲",
      "desc": "享用釜山豬肉湯飯排名第一名名店！鮮美濃郁無腥味。",
      "address": "부산 수영구 광안해변로370번길 9-32",
      "note": "【美食】加入韭菜、蝦醬調味，搭配金黃酥脆的抗生素豬五花，湯頭濃郁令人回味無窮。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 수영구 광안해변로370번길 9-32",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 수영구 광안해변로370번길 9-32",
      "estimatedCost": 24000,
      "costLabel": "豬肉湯飯晚餐費"
    }
  ],
  "day3": [
    {
      "id": "spot-1",
      "timeStart": "08:00",
      "timeEnd": "09:00",
      "title": "早餐：ALL SUNDAY 貝果 廣安店 🥯",
      "desc": "廣安里必吃超人氣貝果，口感扎實Q彈，起司抹醬大推！",
      "address": "부산 수영구 광안로61번길 28 1층",
      "note": "【推薦】熱門口味容易完售，建議踩點或提早抵達挑選好口味。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 수영구 광안로61번길 28",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 수영구 광안로61번길 28 1층",
      "estimatedCost": 10000,
      "costLabel": "貝果早餐費"
    },
    {
      "id": "spot-2",
      "timeStart": "09:00",
      "timeEnd": "09:35",
      "title": "轉場：廣安里 ➔ 甘川洞 🚕",
      "desc": "搭乘計程車，從廣安里直奔甘川洞文化村。",
      "address": "부산광역시 사하구 감내2로 203 (감천문화마을)",
      "note": "【交通】建議直達計程車以節省體力 (車程約 35 分鐘，預估車資 ₩18,000)。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 사하구 감내2로 203",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 사하구 감내2로 203",
      "estimatedCost": 18000,
      "costLabel": "預估計程車資"
    },
    {
      "id": "spot-3",
      "timeStart": "09:35",
      "timeEnd": "11:30",
      "title": "景點：甘川洞文化村 🎨 ＋ 手翻書 Flipbook Studio 📖",
      "desc": "探索彩色壁畫村，尋找小王子與狐狸合照，到景觀咖啡廳俯瞰村落。",
      "address": "부산광역시 사하구 감내2로 203",
      "note": "【VBP 藍色景點】甘川洞手翻書 Flipbook Studio 免費！8秒鐘連貫動態錄影(建議揮手 ➔ 比愛心 ➔ 親一下)！",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 사하구 감내2로 203",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 사하구 감내2로 203",
      "estimatedCost": 0,
      "costLabel": "手翻書 (Busan Pass 免費)"
    },
    {
      "id": "spot-4",
      "timeStart": "11:30",
      "timeEnd": "11:45",
      "title": "轉場：甘川洞 ➔ 松島 🚕",
      "desc": "前往松島午餐餐廳「海底貝殼王國」。",
      "address": "부산 서구 송도해변로 147-1 (바닷속조개왕국)",
      "note": "【交通】計程車車程極短，約 12-15 分鐘。預估車資約 ₩6,000。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 서구 송도해변로 147-1",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 서구 송도해변로 147-1",
      "estimatedCost": 6000,
      "costLabel": "預估計程車資"
    },
    {
      "id": "spot-5",
      "timeStart": "11:45",
      "timeEnd": "13:30",
      "title": "午餐：海底貝殼王國（烤扇貝） 🦪",
      "desc": "松島經典海邊美味！享用炭火現烤、放滿起司的新鮮扇貝。",
      "address": "부산 서구 송도해변로 147-1",
      "note": "【推薦】烤扇貝加上起司與洋蔥調味，最後配上海苔炒飯堪稱一絕！",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 서구 송도해변로 147-1",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 서구 송도해변로 147-1",
      "estimatedCost": 60000,
      "costLabel": "雙人烤扇貝餐費"
    },
    {
      "id": "spot-6",
      "timeStart": "13:30",
      "timeEnd": "13:40",
      "title": "轉場：步行前往纜車站 🚶",
      "desc": "從餐廳出發移動至「松島灣纜車站」。",
      "address": "부산 서구 송도해변로 171",
      "note": "【交通】可散步慢慢沿海岸走（約 10 分鐘）或搭計程車（3分鐘，基本車資）。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 서구 송도해변로 171",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 서구 송도해변로 171",
      "estimatedCost": 0,
      "costLabel": "步行前往"
    },
    {
      "id": "spot-7",
      "timeStart": "13:40",
      "timeEnd": "14:20",
      "title": "景點：松島海上纜車 (水晶車廂) 纜車跨海 🚠",
      "desc": "使用 Busan Pass 兌換松島海上纜車門票，排隊搭乘水晶車廂跨海。",
      "address": "부산 서구 송도해변로 171 (송도해상케이블카)",
      "note": "【VBP 藍色景點】免費兌換來回票。預留週日下午排隊搭乘水晶車廂（透明地板）的時間。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 서구 송도해변로 171",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 서구 송도해변로 171",
      "estimatedCost": 0,
      "costLabel": "海上纜車 (Busan Pass 免費)"
    },
    {
      "id": "spot-8",
      "timeStart": "14:20",
      "timeEnd": "14:50",
      "title": "景點：朝聖松島龍宮雲橋 🌉",
      "desc": "行走在網狀鏤空的雲橋上，感受海浪在腳下奔騰的震撼，眺望陡峭懸崖。",
      "address": "부산광역시 서구 암남동 620-53",
      "note": "【注意】需現場自費 ₩1,000 (不含在Pass)。纜車 SkyPark 站出口順右側下坡走 5 分鐘即達。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 서구 암남동 620-53",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 서구 암남동 620-53",
      "estimatedCost": 1000,
      "costLabel": "雲橋門票 (需自費)"
    },
    {
      "id": "spot-9",
      "timeStart": "14:50",
      "timeEnd": "15:10",
      "title": "拍照：岩南公園海岸木棧道 📸",
      "desc": "沿著雲橋旁的海岸懸崖木棧道漫步，拍攝極具張力的絕美海景合影。",
      "address": "부산광역시 서구 암남동 620-53",
      "note": "【推薦】走大約 10 分鐘拍完精華照片後原路折返。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 서구 암남동 620-53",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 서구 암남동 620-53",
      "estimatedCost": 0,
      "costLabel": "免費參觀"
    },
    {
      "id": "spot-10",
      "timeStart": "15:10",
      "timeEnd": "15:40",
      "title": "景點：纜車站 3 樓頂樓與恐龍廣場 🦖",
      "desc": "回到纜車 SkyPark 站 3 樓觀景台拍小王子，1 樓廣場看發聲動態恐龍。",
      "address": "부산 서구 송도해변로 171",
      "note": "【指南】頂樓觀景台與小王子、飛機合照，1 樓欣賞高聳巨大暴龍。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 서구 송도해변로 171",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 서구 송도해변로 171",
      "estimatedCost": 0,
      "costLabel": "免費參觀"
    },
    {
      "id": "spot-11",
      "timeStart": "15:40",
      "timeEnd": "16:00",
      "title": "回程：搭乘回程纜車 (夕陽海景) 🚠",
      "desc": "搭纜車返回松島灣站。在海中央迎接斜陽，欣賞波光粼粼的夕陽海景。",
      "address": "부산 서구 송도해변로 171",
      "note": "【提醒】從高空俯瞰夕陽海景非常美麗，相機不要收！",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 서구 송도해변로 171",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 서구 송도해변로 171",
      "estimatedCost": 0,
      "costLabel": "回程纜車"
    },
    {
      "id": "spot-12",
      "timeStart": "16:00",
      "timeEnd": "16:15",
      "title": "轉場：松島 ➔ 南浦洞光復路商圈 🚕",
      "desc": "從松島纜車站搭計程車移防南浦洞繁華商圈 (約 10-15 分鐘)。",
      "address": "부산광역시 중구 비프광장로 36",
      "note": "【交通】計程車車程約 10-15 分鐘，預估車資 ₩7,000。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 중구 비프광장로 36",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 중구 비프광장로 36",
      "estimatedCost": 7000,
      "costLabel": "預估計程車資"
    },
    {
      "id": "spot-13",
      "timeStart": "16:20",
      "timeEnd": "16:50",
      "title": "點心：BIFF 廣場吃黑糖餅 🥞",
      "desc": "排隊朝聖剛出爐熱騰騰酥脆的「元祖黑糖餅」。",
      "address": "부산광역시 중구 비프광장로 36",
      "note": "【美食】金黃酥脆黑糖餅塞滿堅果，建議一拿到熱熱吃，極度美味！",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 중구 비프광장로 36",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 중구 비프광장로 36",
      "estimatedCost": 4000,
      "costLabel": "黑糖餅點心費 (2人份)"
    },
    {
      "id": "spot-14-1",
      "timeStart": "16:50",
      "timeEnd": "18:15",
      "title": "購物：南浦洞光復路 ＆ 國際市場 🛍️",
      "desc": "大逛光復路服飾街、國際市場與 BIFF 廣場，體驗釜山最在地的熱鬧商圈。",
      "address": "부산광역시 중구 중구로 32 (국제시장)",
      "note": "【逛街】國際市場有許多雜貨及美食店，光復路則充滿美妝與時裝品牌店，非常適合採購！",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 중구 중구로 32",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 중구 중구로 32",
      "estimatedCost": 0,
      "costLabel": "商圈購物"
    },
    {
      "id": "spot-14-2",
      "timeStart": "18:15",
      "timeEnd": "19:00",
      "title": "景點：樂天百貨光復店 11F 頂樓花園 🌉",
      "desc": "登上樂天百貨頂樓觀景花園，遠眺影島大橋與釜山港的開闊夜景。",
      "address": "부산광역시 중구 중앙대로 2 (롯데백화점 광복점)",
      "note": "【夜景】11 樓的空中花園是釜山最知名的免費夜景點之一，可以 360 度俯瞰影島大橋與港區風光！",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 중구 중앙대로 2",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 중구 중앙대로 2",
      "estimatedCost": 0,
      "costLabel": "免費夜景"
    },
    {
      "id": "spot-14-3",
      "timeStart": "19:00",
      "timeEnd": "20:00",
      "title": "晚餐：南浦蔘雞湯 🍲",
      "desc": "享用數十年歷史傳統老店蔘雞湯，滋補養身、香氣濃郁。",
      "address": "부산광역시 중구 남포길 16-1 (남포삼계탕)",
      "note": "【美食】經典滋補蔘雞湯，雞肉燉得極為軟嫩易離骨，湯頭鮮美回甘，用餐會附上一小瓶人蔘酒（可直接喝或加進湯裡）。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 중구 남포길 16-1",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 중구 남포길 16-1",
      "estimatedCost": 45000,
      "costLabel": "人蔘雞晚餐"
    },
    {
      "id": "spot-15",
      "timeStart": "20:00",
      "timeEnd": "20:30",
      "title": "回程：南浦洞 ➔ 廣安里 🚕",
      "desc": "搭乘計程車直達廣安里 (約 25 分鐘，行經廣安大橋欣賞夜景)。",
      "address": "부산 수영구 광안해변로278번길 42 (H Avenue Hotel)",
      "note": "【交通】計程車直達廣安里 (預估車資 ₩15,000)。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 수영구 광안해변로278번길 42",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 수영구 광안해변로278번길 42",
      "estimatedCost": 15000,
      "costLabel": "回程計程車資"
    }
  ],
  "day4": [
    {
      "id": "d4-spot-1",
      "timeStart": "09:00",
      "timeEnd": "10:00",
      "title": "早餐：大海鮑魚粥 (바다마루전복죽) 🥣",
      "desc": "地鐵海雲台站 3 號出口步行 8 分鐘，享用名店濃厚綠色鮑魚肝臟粥！",
      "address": "부산광역시 해운대구 달맞이길62번길 7",
      "note": "【美食】使用整顆新鮮鮑魚與濃醇鮑魚肝熬煮，鮮美滋補！",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 해운대구 달맞이길62번길 7",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 해운대구 달맞이길62번길 7",
      "estimatedCost": 30000,
      "costLabel": "雙人鮑魚粥早餐費"
    },
    {
      "id": "d4-spot-2",
      "timeStart": "10:00",
      "timeEnd": "11:30",
      "title": "散步逛街：海里團路 (해리단길) ☕",
      "desc": "海雲台站 4 號出口後方「海里團路」，逛文青選物店、拍人生四格照或喝咖啡。",
      "address": "부산광역시 해운대구 우동 537-11",
      "note": "【風格選物】舊車站後方文青特色小店雲集！",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 해운대구 우동 537-11",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 해운대구 우동 537-11",
      "estimatedCost": 10000,
      "costLabel": "海里團路選物與咖啡"
    },
    {
      "id": "d4-spot-3",
      "timeStart": "11:30",
      "timeEnd": "13:00",
      "title": "午餐：龍宮海鮮托盤炸醬 (용궁해물야채쟁반짜장) 🍜",
      "desc": "搭計程車前往機張享用滿滿魷魚蝦仁現炒的超狂托盤海鮮炸醬麵。",
      "address": "부산광역시 기장군 기장읍 시랑리 393-6",
      "note": "【美食】大份量炸醬麵微辣香濃，搭配海鮮糖醋肉簡直絕配！",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 기장군 기장읍 시랑리 393-6",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 기장군 기장읍 시랑리 393-6",
      "estimatedCost": 22000,
      "costLabel": "海鮮托盤炸醬麵餐費"
    },
    {
      "id": "d4-spot-4",
      "timeStart": "13:15",
      "timeEnd": "14:45",
      "title": "景點：海東龍宮寺 (해동 용궁사) 🐉",
      "desc": "參觀韓國唯一建在海邊海蝕崖峭壁上的古剎，聽濤觀海絕美景致！",
      "address": "부산광역시 기장군 기장읍 용궁길 86",
      "note": "【參觀】入口有十二生肖雕像，寺內洗手間設備完善。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 기장군 기장읍 용궁길 86",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 기장군 기장읍 용궁길 86",
      "estimatedCost": 0,
      "costLabel": "免費參觀"
    },
    {
      "id": "d4-spot-5",
      "timeStart": "15:00",
      "timeEnd": "16:30",
      "title": "體驗：Skyline Luge 斜坡滑車 (2次滑車) 🏎️",
      "desc": "搭纜車攻頂，駕駛無動力賽車從蜿蜒斜坡賽道一路俯衝疾馳！",
      "address": "부산 기장군 기장읍 기장해안로 205",
      "note": "【VBP 紫色景點】換好的門票務必收好（每次玩掃 QR Code），自備拋棄式浴帽戴頭盔。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 기장군 기장읍 기장해안로 205",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 기장군 기장읍 기장해안로 205",
      "estimatedCost": 35000,
      "costLabel": "Luge 滑車門票 (VBP 免費)"
    },
    {
      "id": "d4-spot-6",
      "timeStart": "16:30",
      "timeEnd": "17:00",
      "title": "轉場：樂天世界 ➔ 海雲台市場 🚕",
      "desc": "搭乘計程車從樂天世界/機張返回海雲台市場 (約 20 分鐘)。",
      "address": "부산광역시 해운대구 구남로41번길 22-1",
      "note": "【交通】計程車返回海雲台周邊。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 해운대구 구남로41번길 22-1",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 해운대구 구남로41번길 22-1",
      "estimatedCost": 15000,
      "costLabel": "回海雲台計程車資"
    },
    {
      "id": "d4-spot-7",
      "timeStart": "17:00",
      "timeEnd": "20:00",
      "title": "晚餐：海雲台市場盲鰻 或 名品海雲台傳聞中蔘雞湯 🍲",
      "desc": "享用在地炭火香辣盲鰻或濃醇滋補傳聞中蔘雞湯，用餐後逛市場與 Olive Young。",
      "addresses": [
        {
          "label": "海雲台傳統市場 盲鰻產區 (시장 장어)",
          "address": "부산광역시 해운대구 구남로41번길 22-1"
        },
        {
          "label": "名品海雲台蔘雞湯 (해운대소문난삼계탕)",
          "address": "부산광역시 해운대구 중동2로 6"
        }
      ],
      "note": "【美食】蔘雞湯附贈人蔘酒小瓶可直接飲用或加入湯中；盲鰻炭火香辣滋味！",
      "estimatedCost": 36000,
      "costLabel": "海雲台晚餐費"
    },
    {
      "id": "d4-spot-8",
      "timeStart": "20:10",
      "timeEnd": "20:30",
      "title": "夜景：The Bay 101 (더베이101) 🌃",
      "desc": "搭車 5 分鐘或散步 15-20 分鐘至 The Bay 101 拍攝摩天大樓海面倒影夢幻夜景！",
      "address": "부산광역시 해운대구 동백로 52",
      "note": "【體驗】白色濱海複合建築，空地倒水拍攝海雲台高樓群倒影。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 해운대구 동백로 52",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 해운대구 동백로 52",
      "estimatedCost": 10000,
      "costLabel": "夜景飲料點心"
    },
    {
      "id": "d4-spot-9",
      "timeStart": "20:30",
      "timeEnd": "21:00",
      "title": "回程：海雲台 ➔ 廣安里住宿 🚕",
      "desc": "返回廣安里 H Avenue Hotel 休息。",
      "address": "부산 수영구 광안해변로278번길 42",
      "note": "【住宿】返回飯店休息。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 수영구 광안해변로278번길 42",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 수영구 광안해변로278번길 42",
      "estimatedCost": 12000,
      "costLabel": "回廣安里計程車資"
    }
  ],
  "day5": [
    {
      "id": "d5-spot-1",
      "timeStart": "09:00",
      "timeEnd": "09:30",
      "title": "轉場：廣安里 ➔ 尾浦車站 🚕",
      "desc": "搭計程車前往海雲台藍線公園尾浦車站 (約 20-25 分鐘)。",
      "address": "부산광역시 해운대구 달맞이길62번길 13 (尾浦站)",
      "note": "【交通】計程車前往尾浦站。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 해운대구 달맞이길62번길 13",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 해운대구 달맞이길62번길 13",
      "estimatedCost": 12000,
      "costLabel": "計程車資"
    },
    {
      "id": "d5-spot-2",
      "timeStart": "10:00",
      "timeEnd": "10:30",
      "title": "點心：自然島鹽麵包 釜山店 (자연도소금빵) 🥐",
      "desc": "尾浦站對面排隊購買剛出爐外酥內軟爆香奶油鹽麵包！",
      "address": "부산 해운대구 달맞이길62번길 12-2 1층",
      "note": "【美食】一次買一袋 4 個裝，剛出爐熱熱吃香氣撲鼻！",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 해운대구 달맞이길62번길 12-2",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 해운대구 달맞이길62번길 12-2 1층",
      "estimatedCost": 12000,
      "costLabel": "鹽麵包點心費"
    },
    {
      "id": "d5-spot-3",
      "timeStart": "10:30",
      "timeEnd": "11:00",
      "title": "體驗：天空膠囊列車 (尾浦站 ➔ 青沙浦站) 🚃",
      "desc": "搭乘兩人專屬彩繪天空膠囊列車，在懸空軌道上俯瞰蔚藍海岸線。",
      "address": "부산광역시 해운대구 달맞이길62번길 13",
      "note": "【自費預約】8/18 06:00 預訂。請於預約時間前 10-15 分鐘報到排隊搭乘。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 해운대구 달맞이길62번길 13",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 해운대구 달맞이길62번길 13",
      "estimatedCost": 35000,
      "costLabel": "膠囊列車車票"
    },
    {
      "id": "d5-spot-4-1",
      "timeStart": "11:05",
      "timeEnd": "11:30",
      "title": "拍照：灌籃高手海景平交道 📸",
      "desc": "青沙浦站一出站即可看到極像鎌倉高校前的灌籃高手海景平交道！",
      "address": "부산 해운대구 청사포로 120-1",
      "note": "【拍照】定位在平交道旁的「Clam Sand Busan」咖啡廳即可找到最佳合影點，拍照時請務必注意往來車輛與輕軌！",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 해운대구 청사포로 120-1",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 해운대구 청사포로 120-1",
      "estimatedCost": 0,
      "costLabel": "免費參觀拍照"
    },
    {
      "id": "d5-spot-4-2",
      "timeStart": "11:30",
      "timeEnd": "12:00",
      "title": "景點：青沙浦踏石展望台 (天空步道) 🌉",
      "desc": "沿著海岸走至踏石展望台，行走在懸空玻璃地板上，感受海浪從腳下流過的震撼。",
      "address": "부산광역시 해운대구 청사포로 167 (청사포 다릿돌전망대)",
      "note": "【參觀】展望台伸入海中，中段有透明玻璃與鐵網設計，可以體驗懸空刺激感。需在入口套上專用鞋套，若遇強風或大雨可能會暫停開放。門票免費！",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 해운대구 청사포로 167",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 해운대구 청사포로 167",
      "estimatedCost": 0,
      "costLabel": "免費參觀"
    },
    {
      "id": "d5-spot-5",
      "timeStart": "12:00",
      "timeEnd": "13:15",
      "title": "午餐：向海開飯 (醬蟹定食) 或 青沙浦船長家 (烤貝烤盲鰻) 🦪",
      "desc": "享用向海開飯鮑魚黃花魚/醬蟹定食，或船長家綜合炭火烤貝海鮮！",
      "addresses": [
        {
          "label": "向海開飯 (올바릇식당) — 醬蟹定食／鮑魚黃花魚",
          "address": "부산광역시 해운대구 청사포로58번길 83 1층"
        },
        {
          "label": "青沙浦船長家 (선장집) — 烤貝／烤盲鰻",
          "address": "부산광역시 해운대구 청사포로 128번길 66"
        }
      ],
      "note": "【美食】享受青沙浦極致海鮮大餐！",
      "estimatedCost": 65000,
      "costLabel": "海鮮大餐午餐費"
    },
    {
      "id": "d5-spot-6",
      "timeStart": "13:15",
      "timeEnd": "14:15",
      "title": "體驗：海岸列車 (青沙浦 ➔ 尾浦) 🚆",
      "desc": "走到青沙浦車站，用 VBP BIG 5 兌換實體車票搭乘海岸列車回到尾浦。",
      "address": "부산 해운대구 청사포로 116 (청사포정거장)",
      "note": "【VBP 藍色景點】走到釜山海雲台藍線公園青沙浦車站，使用 VBP 兌換海岸列車實體車票搭回尾浦。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 해운대구 청사포로 116",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 해운대구 청사포로 116",
      "estimatedCost": 0,
      "costLabel": "海岸列車 (VBP 免費)"
    },
    {
      "id": "d5-spot-7",
      "timeStart": "14:30",
      "timeEnd": "18:30",
      "title": "體驗：Club D Oasis 舒壓體驗 (汗蒸幕/水療 SPA/戶外清水堂) ♨️",
      "desc": "從尾浦站步行 5 分鐘進入 LCT 大樓 5F~6F，享受高空五星級汗蒸幕與露天溫泉！",
      "address": "부산광역시 해운대구 달맞이길 30 (엘시티 5층)",
      "note": "【VBP 紫色景點】出示 VBP SPA 票免費入場 4 小時！可使用戶外 SPA 清水堂 (需自備泳衣) ＋ 汗蒸幕。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 해운대구 달맞이길 30",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 해운대구 달맞이길 30",
      "estimatedCost": 30000,
      "costLabel": "Club D Oasis (VBP 免費)"
    },
    {
      "id": "d5-spot-8",
      "timeStart": "18:30",
      "timeEnd": "19:00",
      "title": "轉場：Club D ➔ 廣安里 🚕",
      "desc": "搭乘計程車直達廣安里 (約 15-20 分鐘)。",
      "address": "부산 수영구 남천바다로 33번길 47",
      "note": "【交通】計程車直達廣安里。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 수영구 남천바다로 33번길 47",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 수영구 남천바다로 33번길 47",
      "estimatedCost": 15000,
      "costLabel": "計程車資"
    },
    {
      "id": "d5-spot-9",
      "timeStart": "19:00",
      "timeEnd": "21:00",
      "title": "晚餐：釜山宅 廣安里店 (或彥陽家燒肉) 🥩",
      "desc": "享用專人代烤厚切豬五花與極品醬燒烤牛肉！",
      "address": "부산 수영구 남천바다로 33번길 47 (釜山宅)",
      "note": "【美食】專人代烤肉質香甜多汁，搭配韓式大蒜沾醬與生菜包肉絕配！",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 수영구 남천바다로 33번길 47",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 수영구 남천바다로 33번길 47",
      "estimatedCost": 70000,
      "costLabel": "廣安里極品烤肉晚餐"
    }
  ],
  "day6": [
    {
      "id": "d6-spot-1",
      "timeStart": "08:30",
      "timeEnd": "10:00",
      "title": "早餐：廣安里人氣海景早午餐 Working Holiday 🥞",
      "desc": "享用廣安里海灘第一排無敵海景早午餐與熱咖啡。(12:00 前辦理退房)",
      "address": "부산 수영구 광안해변로 235 3층 (워킹홀리데이)",
      "note": "【退房與早午餐】位於廣安里海灘第一排，可由 Olive Young 廣安店旁搭乘電梯至 3 樓。愜意享用早午餐，12:00 前退房。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 수영구 광안해변로 235",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 수영구 광안해변로 235",
      "estimatedCost": 25000,
      "costLabel": "海景早午餐費"
    },
    {
      "id": "d6-spot-2",
      "timeStart": "10:00",
      "timeEnd": "11:00",
      "title": "廣安里最後巡禮 & 伴手禮採買 🛍️",
      "desc": "大逛廣安海灘大道 Olive Young 門市採買零食伴手禮與護膚品。",
      "address": "부산 수영구 광안해변로 219 (Olive Young 廣安海灘店)",
      "note": "【購物】現場出示護照退稅採買零食與美妝。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 수영구 광안해변로 219",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 수영구 광안해변로 219",
      "estimatedCost": 30000,
      "costLabel": "伴手禮與零食採買"
    },
    {
      "id": "d6-spot-3",
      "timeStart": "11:00",
      "timeEnd": "12:15",
      "title": "午餐：Handasot 釜飯 (한다솥 廣安里總店) 或 冬面食小麥冷麵 🍚",
      "desc": "享用主打新鮮鮑魚雪蟹的極品現炊釜飯，或 Q 彈小麥冷麵與手工薄皮餃子！",
      "addresses": [
        {
          "label": "Handasot 釜飯 (한다솥 廣安里總店) — 海鮮釜飯",
          "address": "부산광역시 수영구 남천바다로33번길 101"
        },
        {
          "label": "冬面食小麥冷麵 (동면식밀면) — Q彈小麥冷麵／手工餃子",
          "address": "부산 수영구 광안해변로 251 1층"
        }
      ],
      "note": "【美食】Handasot 釜飯淋特製醬汁拌勻，倒大麥茶做成茶湯泡飯！冬面食小麥冷麵消暑清爽。",
      "estimatedCost": 36000,
      "costLabel": "午餐費"
    },
    {
      "id": "d6-spot-4",
      "timeStart": "12:15",
      "timeEnd": "13:00",
      "title": "轉場：廣安里 ➔ 釜山金海國際機場 🚕",
      "desc": "搭乘計程車直達金海機場 (約 35 分鐘，車資約 ₩32,000) 或地鐵 2 號線轉輕軌。",
      "address": "부산광역시 강서구 공항진입로 108 (金海機場)",
      "note": "【交通】建議直接搭計程車直達機場最省力；若搭地鐵需由廣安站 ➔ 沙上站轉輕軌至機場。",
      "mapLinkKakao": "https://map.kakao.com/link/search/김해국제공항",
      "mapLinkNaver": "https://map.naver.com/v5/search/김해국제공항",
      "estimatedCost": 32000,
      "costLabel": "機場直達計程車資"
    },
    {
      "id": "d6-spot-5",
      "timeStart": "13:00",
      "timeEnd": "15:00",
      "title": "機場報到、辦理退稅 & 買【古來思魚糕】🛍️",
      "desc": "辦理登機與托運、機台掃描退稅，在機場入關前補貨購買古來思魚糕！",
      "address": "부산광역시 강서구 공항진입로 108",
      "note": "【退稅與伴手禮】退稅單機台掃描退稅。入關前購買韓國名店古來思魚糕。",
      "mapLinkKakao": "https://map.kakao.com/link/search/김해국제공항",
      "mapLinkNaver": "https://map.naver.com/v5/search/김해국제공항",
      "estimatedCost": 10000,
      "costLabel": "古來思魚糕"
    },
    {
      "id": "d6-spot-6",
      "timeStart": "15:00",
      "timeEnd": "17:30",
      "title": "離境：德威航空起飛返台 ✈️",
      "desc": "15:00 德威航空起飛，平安返抵台灣，結束充實滿載的 6 天 5 夜釜山之旅！",
      "address": "台灣高雄國際機場 / 台南",
      "note": "【歸賦】平安抵達台灣！",
      "mapLinkKakao": "https://map.kakao.com/",
      mapLinkNaver: "https://map.naver.com/",
      "estimatedCost": 0,
      "costLabel": "平安歸賦"
    }
  ]
}
;