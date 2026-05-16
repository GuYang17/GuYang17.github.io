(function () {
  const themes = ["light", "dark", "gruvbox", "gruvbox-light"];
  const languages = ["en", "zh"];
  const root = document.documentElement;
  const themeStorageKey = "site-theme";
  const languageStorageKey = "site-language";
  const scrollBtn = document.getElementById("scrollTopBtn");
  const themeBtn = document.getElementById("themeToggleBtn");
  const langBtn = document.getElementById("langToggleBtn");

  const translations = {
    en: {
      bannerTagline: "High School Student & Programming Lover",
      bannerBio: "Pointer to the far, memory to the home!",
      aboutHeading: "About Me",
      aboutIntro:
        "I am a Grade 10 student from a high school in Ningbo, Zhejiang.",
      aboutParagraph1:
        "Although I have never taken any offline course in computer programming, I started learning it on my own when I was in the 7th grade. Minecraft was the main game I played, and over time, I became interested in making mods for it. Though I no longer actively play Minecraft, my passion for programming has only grown.",
      aboutParagraph2:
        "I learned Python first, followed by C and Go. I love C — I use it to sharpen my algorithmic thinking and deepen my understanding of operating systems. I own the famous K&R book and plan to finish reading it by 2027. Go is also a great language in my eyes. You may have noticed that my logo comes from an image of Go's Gopher.",
      aboutParagraph3:
        "After graduating from middle school and entering high school, I began to feel much more pressure than before. Even though I only have one day off each weekend, I still spare no effort to make progress. Fortunately, I've met some good friends who also love computers — either at my high school or online — and they have made my programming journey much more colorful.",
      aboutParagraph4:
        "I work on programming projects in my free time — building TUI programs is especially fun for me. I also occasionally upload videos to Bilibili and share small moments in my QQ Space.",
      aboutParagraph5:
        "I am still learning. Computer science is the best thing in my life.",
      basicHeading: "Basic Information & Hobbies",
      basicNickname: "Nickname: GuYang17",
      basicRealName: "Real Name: Peng Yuhan",
      basicSex: "Sex: Male",
      basicLocation: "Location: Ningbo, Zhejiang, China",
      basicBirthday: "Birthday: 2010-05-07",
      basicJob: "Job: High School Student",
      basicConstellation: "Constellation: Taurus",
      basicMBTI: "MBTI: INTJ",
      basicHobbies: "Hobbies: Programming, Listening Music, Watching Movies...",
      basicFavoriteSongs:
        "Favorite Songs: Bohemian Rhapsody (by Queen) and Stairway to Heaven (by Led Zeppelin)",
      basicFavoriteMovie: "Favorite Movie: Léon",
      basicFavoriteSport: "Favorite Sport: Badminton",
      contactHeading: "Contact Me",
      contactIntro:
        "My main contact links are already shown in the banner above. You can also reach me by email or the channels listed here.",
      contactEmail: "pengyuhan90717@outlook.com",
      contactGitHub: "github.com/GuYang17",
      contactBilibili: "space.bilibili.com/3546668142168368",
      contactQQ: "QQ: 3380323092",
      skillsHeading: "Skills",
      skill_python: "Python",
      skill_python_desc: "I use Python to write scripts.",
      skill_c: "C",
      skill_c_desc: "Make me understand operating system better!",
      skill_go: "Go",
      skill_go_desc: "My next language to learn.",
      skill_html_css: "HTML / CSS",
      skill_html_css_desc: "Emm...",
      skill_algo: "Algorithm & Data Structures",
      skill_algo_desc: "I am learning algorithms!",
      friendsHeading: "Friend Links",
      friendBcamyName: "Bcamy",
      friendBcamyDesc:
        "Personal blog and web experiments from Linmohan, with design and programming notes.",
      friendSusanName: "Susan",
      friendSusanDesc:
        "Not only programming friends, but also War Thunder friends :)",
      friendYatenName: "Yaten",
      friendYatenDesc: "Who helped me build my blog",
      footerLine1: "© 2026 GuYang17. Made with curiosity and code.",
      footerEmail: "pengyuhan90717@outlook.com",
      footerGitHub: "GitHub",
      scrollTopTitle: "Back to the Top",
      themeButtonTitle: "Change Themes",
      languageButtonTitle: "Switch Language",
    },
    zh: {
      bannerTagline: "高中生 & 编程爱好者",
      bannerBio: "指针所向即天涯，内存深处是故乡!",
      aboutHeading: "关于我",
      aboutIntro: "我是一名来自浙江宁波的高一学生。",
      aboutParagraph1:
        "我从未上过线下编程课。从七年级开始，我就自学编程。当时 Minecraft 是我最常玩的游戏，渐渐地我开始对制作模组产生了兴趣。虽然现在我不怎么玩 Minecraft 了，但对编程的热情只增不减。",
      aboutParagraph2:
        "我先学了 Python，然后是 C 和 Go。我很喜欢 C 语言——它提升了我的算法思维，也让我更深入地理解操作系统。我有一本经典的 K&R 书，计划在 2027 年之前读完。Go 也是我非常喜欢的一门语言。你可能已经注意到，我的 Logo 灵感就来自 Go 的吉祥物 Gopher。",
      aboutParagraph3:
        "从初中升入高中后，我开始感到比以前更大的压力。虽然每周只有一天休息，我还是尽力保持进步。幸运的是，我遇到了一些同样热爱计算机的好朋友——无论是在学校还是线上——他们让我的编程旅程更加丰富有趣。",
      aboutParagraph4:
        "业余时间我会做编程项目，尤其是写 TUI 程序，对我来说特别有趣。我偶尔也会在 Bilibili 上传视频，在 QQ 空间分享一些日常小点滴。",
      aboutParagraph5: "我仍在学习。计算机科学是我生命中最美好的事物。",
      basicHeading: "基本信息和喜好",
      basicNickname: "昵称: GuYang17",
      basicRealName: "真实姓名: Peng Yuhan",
      basicSex: "性别：男",
      basicLocation: "地点：浙江宁波，中国",
      basicBirthday: "生日: 2010-05-07",
      basicJob: "职业：高中学生",
      basicConstellation: "星座：金牛座",
      basicMBTI: "MBTI: INTJ",
      basicHobbies: "兴趣：编程、听音乐、看电影...",
      basicFavoriteSongs:
        "喜欢的歌曲: Bohemian Rhapsody(Queen)和 Stairway to Heaven(Led Zeppelin)",
      basicFavoriteMovie: "喜欢的电影：这个杀手不太冷",
      basicFavoriteSport: "喜欢的运动：羽毛球",
      contactHeading: "联系我",
      contactIntro: "通过以下方式联系我:",
      contactEmail: "pengyuhan90717@outlook.com",
      contactGitHub: "github.com/GuYang17",
      contactBilibili: "space.bilibili.com/3546668142168368",
      contactQQ: "QQ: 3380323092",
      skillsHeading: "技能",
      skill_python: "Python",
      skill_python_desc: "日常写脚本用",
      skill_c: "C",
      skill_c_desc: "让我深入理解底层和操作系统!",
      skill_go: "Go",
      skill_go_desc: "我接下来要学的语言。",
      skill_html_css: "HTML / CSS",
      skill_html_css_desc: "嗯...",
      skill_algo: "算法与数据结构",
      skill_algo_desc: "学习中......",
      friendsHeading: "友链",
      friendBcamyName: "Bcamy",
      friendBcamyDesc: "第一个在网上认识的......",
      friendSusanName: "Susan",
      friendSusanDesc: "陪我敲代码，陪我打战雷 :)",
      friendYatenName: "Yaten",
      friendYatenDesc: "帮助我搭建个人博客",
      footerLine1: "© 2026 GuYang17",
      footerEmail: "pengyuhan90717@outlook.com",
      footerGitHub: "GitHub",
      scrollTopTitle: "回到顶部",
      themeButtonTitle: "切换主题",
      languageButtonTitle: "切换语言",
    },
  };

  function setTheme(name) {
    if (!themes.includes(name)) {
      name = "light";
    }
    root.dataset.theme = name;
    localStorage.setItem(themeStorageKey, name);
    themeBtn.title = translations[getLanguage()].themeButtonTitle;
  }

  function getLanguage() {
    return (
      root.dataset.lang || localStorage.getItem(languageStorageKey) || "en"
    );
  }

  function applyLanguage(lang) {
    if (!languages.includes(lang)) {
      lang = "en";
    }
    root.dataset.lang = lang;
    root.lang = lang;
    localStorage.setItem(languageStorageKey, lang);
    document.querySelectorAll("[data-lang-key]").forEach((element) => {
      const key = element.dataset.langKey;
      const value = translations[lang][key];
      if (value) {
        element.textContent = value;
      }
    });
    scrollBtn.title = translations[lang].scrollTopTitle;
    themeBtn.title = translations[lang].themeButtonTitle;
    langBtn.title = translations[lang].languageButtonTitle;
  }

  function nextTheme() {
    const current = root.dataset.theme || "light";
    const next = themes[(themes.indexOf(current) + 1) % themes.length];
    setTheme(next);
  }

  function nextLanguage() {
    const current = getLanguage();
    const next = languages[(languages.indexOf(current) + 1) % languages.length];
    applyLanguage(next);
  }

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  themeBtn.addEventListener("click", nextTheme);
  langBtn.addEventListener("click", nextLanguage);

  applyLanguage(localStorage.getItem(languageStorageKey) || "en");
  setTheme(localStorage.getItem(themeStorageKey) || "light");
})();
