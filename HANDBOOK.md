# 个人主页更新手册

面向日常更新的说明书。**记住一句话：绝大多数内容改动，只需要改一个文件 —— `src/consts.ts`。**

---

## 目录

1. [3 分钟快速上手](#1-3-分钟快速上手)
2. [项目结构地图](#2-项目结构地图)
3. [常见更新任务（照着做即可）](#3-常见更新任务)
4. [图片怎么加](#4-图片怎么加)
5. [深浅色主题 / 配色](#5-深浅色主题--配色)
6. [本地预览与上线部署](#6-本地预览与上线部署)
7. [常见问题排查](#7-常见问题排查)

---

## 1. 3 分钟快速上手

```bash
npm install       # 第一次用，或换了电脑时，装依赖
npm run dev       # 本地开发预览，打开提示的 http://localhost:4321
npm run build     # 打包（上线前自检是否报错）
npm run preview   # 预览打包后的成品
```

改内容的日常流程：

1. 打开 `src/consts.ts`，改文字 / 加项目。
2. `npm run dev` 看效果（保存后浏览器自动刷新）。
3. 满意后 `git add . && git commit -m "更新xxx" && git push`。
4. 推到 `main` 分支后，GitHub 会**自动构建并上线**（约 1–2 分钟）。

---

## 2. 项目结构地图

```
src/
├── consts.ts              ← 【最重要】站点标题、简介、技术栈、精选项目 都在这
├── pages/
│   ├── index.astro        ← 首页（Education / More Projects / Awards 的内容在这）
│   └── about.astro        ← About 页（自我介绍 / 研究兴趣 / 联系方式）
├── components/
│   ├── Header.astro       ← 顶部导航栏 + 主题切换按钮
│   ├── Footer.astro       ← 页脚
│   ├── ProjectCards.astro ← 「精选项目」卡片的样式（一般不用动）
│   └── BaseHead.astro     ← <head>、SEO 元信息
├── styles/
│   └── global.css         ← 全局样式 + 配色令牌（深浅色都在这里定义）
└── consts.ts

public/                    ← 静态文件，直接按原样发布
├── avatar.jpg             ← 你的头像
├── CV.pdf                 ← 简历（首页 Resume 按钮指向它）
├── favicon.svg            ← 网站图标
└── images/                ← 项目配图放这里
```

> **一句话记忆**：
> - 改**文字 / 项目 / 技术栈** → `src/consts.ts`
> - 改**学历 / 更多项目 / 获奖** → `src/pages/index.astro`
> - 改**About 页文字** → `src/pages/about.astro`
> - 改**头像 / 简历 / 图片** → `public/` 文件夹

---

## 3. 常见更新任务

### 3.1 改姓名 / 一句话简介 / 标签 / 状态

打开 `src/consts.ts`，改最上面这几行：

```ts
export const SITE_TITLE = 'Yuanhang Liu';          // 浏览器标签 & 顶栏名字
export const SITE_AUTHOR_ZH = '刘远航';             // 名字后面的中文
export const PROFILE_TAGLINE = 'Undergraduate CS Student @ ...';  // 名字下方副标题
export const PROFILE_STATUS_TAG = 'Actively Seeking internships...'; // 绿色状态胶囊
export const GITHUB_URL = 'https://github.com/KKqdtjo';
export const EMAIL = '2023202275@ruc.edu.cn';
```

> 首页那段较长的英文自我介绍（Bio），写在 `src/pages/index.astro` 里，搜索 `<!-- Bio -->` 即可找到并修改。

### 3.2 新增一个「精选项目」（顶部大卡片）

在 `src/consts.ts` 的 `FEATURED_PROJECTS` 数组里，**复制一段 `{ ... }` 粘贴**，改内容即可。放在最前面就显示在最前：

```ts
{
    name: '项目名 · 中文名',
    image: '/images/你的截图.png',   // 可选！不写这一行 → 自动用「蓝色渐变 + 首字母」占位
    description:
        '一到三句话英文描述，说清这个项目做了什么、用了什么。',
    techTags: ['TypeScript', 'Electron', 'AI Agent'],  // 技术标签，随便写几个
    links: {
        code: 'https://github.com/...',   // 以下四种链接都可选，写了才显示按钮
        // paper: 'https://...',
        // demo:  'https://...',
        // slides:'https://...',
    },
},
```

- **没有配图也没关系**：省略 `image` 这一行，卡片会自动生成漂亮的渐变 + 项目名首字母。
- 逗号别漏：每个 `{ ... }` 后面要有逗号 `,`。

> 例：本手册所在版本里，团队黑客松作品 **PetPresence（萌宠在线）** 就是这样加进去的（无图，用了渐变占位）。之后有截图了，把图放进 `public/images/`，再补上 `image: '/images/petpresence.png'` 这一行即可。

### 3.3 新增 / 修改「更多项目」（底部一行行的列表）

这部分在 `src/pages/index.astro`，搜索 `More Projects`。复制一段 `{ ... }` 改即可：

```ts
{
    year: '2025',
    name: '项目名',
    desc: '一句话描述（现在会完整换行显示，不会被截断）。',
    links: [{ label: 'Code', href: 'https://github.com/...' }],
},
```

### 3.4 修改「获奖 / 竞赛」

同样在 `src/pages/index.astro`，搜索 `Competitions & Awards`。每条格式：

```ts
{
    tier: 'gold',   // 'gold'=金星 / 'silver'=银星 / 'blue'=蓝星，仅决定小星星颜色
    title: '奖项全名',
    year: '2025',
    detail: '补充说明（如主办方、排名百分比）',
},
```

### 3.5 修改「学历 / 核心课程 / GPA」

`src/pages/index.astro`，搜索 `Education`。学校名、时间、GPA、课程列表都是纯文字，直接改。课程是这样一个数组：

```ts
{['Machine Learning', 'Natural Language Processing', ...].map(...)}
```

往里加 / 删字符串即可。

### 3.6 修改「技术栈 Skills」

数据已经写在 `src/consts.ts` 的 `SKILL_CATEGORIES` 里：

```ts
export const SKILL_CATEGORIES = [
    { label: '编程语言', items: ['Python', 'Java', 'C++', 'JavaScript'] },
    { label: '框架与工具', items: ['Docker', 'Git', 'Linux'] },
];
```

> ⚠️ 注意：**目前技术栈数据存在，但页面上还没有单独的展示区块**（当初为了先做重构而暂缓）。
> 如果以后想把它显示出来，告诉我一句「把技术栈板块加到首页」即可，一分钟就能接上（组件 `SkillTags.astro` 已经写好）。

### 3.7 修改 About 页

`src/pages/about.astro`，里面三段：`About Me`（自我介绍）、`Research Interests`（研究兴趣列表）、`Contact`（联系方式）。都是纯文字，直接改。

### 3.8 换头像 / 换简历

- **头像**：把新图命名为 `avatar.jpg` 覆盖 `public/avatar.jpg`（建议正方形，约 400×400 及以上）。
- **简历**：把新 PDF 命名为 `CV.pdf` 覆盖 `public/CV.pdf` 即可，首页按钮自动指向它。

---

## 4. 图片怎么加

1. 把图片文件放进 `public/images/` 文件夹（如 `public/images/myproject.png`）。
2. 在代码里用**以 `/` 开头的路径**引用：`image: '/images/myproject.png'`。
   （注意：路径里**不写** `public`，因为 `public/` 的内容会被发布到网站根目录。）
3. 建议：项目封面用 16:9 或接近的横图，宽度 800px 以上，`.png` / `.jpg` / `.webp` 都行。

---

## 5. 配色

- 网站采用**浅色 + 中性灰**的极简配色（无深色模式）。全站颜色用的是 Tailwind 的 `gray-*` 色阶（如 `text-gray-900` 深、`text-gray-500` 中、`text-gray-400` 浅）。
- 全局基础色（正文、标题、边框）集中在 `src/styles/global.css` 顶部的 `:root` 里，想整体微调可以改这里的变量。
- 主按钮（如 Resume）用的是近黑色 `bg-gray-900`，对比度高、字清晰。
- 如果哪天想加一个彩色强调色（如学术蓝），告诉我一句即可统一替换，不建议手动逐处改（容易漏）。

---

## 6. 本地预览与上线部署

**部署是全自动的。** 你只要把改动推送到 GitHub 的 `main` 分支：

```bash
git add .
git commit -m "简单说明改了什么"
git push
```

推送后，`.github/workflows/deploy.yml` 会自动：构建 → 发布到 GitHub Pages。约 1–2 分钟后线上生效。可以在 GitHub 仓库页面的 **Actions** 标签里看构建进度和是否成功。

> 换了正式域名后，记得同步改 `astro.config.mjs` 里的 `site: '...'`（影响 SEO 的 canonical 链接和站点地图）。

---

## 7. 常见问题排查

| 现象 | 原因 / 解决 |
| --- | --- |
| `npm run dev` 报错，页面白屏 | 多半是 `consts.ts` 里漏了逗号 `,` 或引号 `'` 没配对。看终端红色报错提示的行号。 |
| 加的项目没显示 | 检查是不是漏了对象后面的逗号；`image` 路径是否以 `/images/` 开头且文件确实在 `public/images/`。 |
| 图片裂掉 / 404 | 路径别带 `public`；大小写要和文件名完全一致（Linux 服务器区分大小写）。 |
| 改了但线上没变 | 确认已 `git push` 到 `main`；去 GitHub 的 Actions 看构建是否成功。 |
| 想加新板块（如 News、Publications、技术栈展示） | 这些暂未启用。直接告诉我需求，我来接。 |
| 想换配色 / 加强调色 | 找我统一替换，别手动逐处改，容易漏。 |

---

*最后更新：2026-07-05 · 本手册随站点结构变化，如有大改会同步更新。*
