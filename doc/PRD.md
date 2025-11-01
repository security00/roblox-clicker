# Roblox Clicker - 产品需求文档（PRD）

## 版本信息
- 文档版本：v1.0
- 创建日期：2025-11-01
- 最后更新：2025-11-01
- 项目域名：roblox-clicker.net

---

## 1. 项目概述

### 1.1 产品定位
Roblox Clicker 是一个以 Roblox 点击类游戏为核心的小游戏聚合平台，主要面向喜欢增量/点击类游戏的休闲玩家群体。通过提供高质量的在线游戏嵌入、教程和资讯内容，获取搜索流量并通过 Google Adsense 实现商业变现。

### 1.2 一句话描述
基于 Roblox 热门点击游戏 "Roblox Clicker" 流量红利，打造的点击类游戏聚合站点，通过 SEO 优化和内容运营获取自然流量。

### 1.3 目标用户
- **核心用户**：12-25 岁的休闲游戏玩家
- **地理分布**：主要市场为美国，次要市场包括英语系国家
- **用户特征**：
  - 对点击类、增量游戏感兴趣
  - 习惯在工作/学习间隙玩小游戏
  - 倾向于免费、即开即玩的游戏体验
  - 通过 Google 搜索发现游戏、代码和教程

---

## 2. 市场背景与机会

### 2.1 市场趋势分析

#### 搜索热度
- **关键词**：roblox clicker
- **分类**：持续热词
- **趋势**：2025年搜索量稳定增长，平均月搜索量超过 14,800 次
- **对比**： 整体热度与 "race clicker" 相当，具有较大的流量潜力
- **Google Trends**：https://trends.google.com/trends/explore?date=now%207-d&q=roblox%20clicker,roblox%20clicker%20scratch,auto%20clicker%20for%20roblox

#### 热度爆发原因
1. **Roblox 游戏更新**： 多个点击游戏如 Race Clicker 于 2025 年推出新事件和更新
2. **社交媒体传播**：X（前 Twitter）、TikTok、YouTube 等平台出现大量游戏攻略和 AFK 技巧视频
3. **病毒式传播**：有趣的点击机制和代码系统引发玩家分享
4. **玩家需求**：大量玩家搜索兑换码、自动点击器教程和 Scratch 重制版

#### 主要需求市场
- **首要市场**：美国（占比最高）
- **次要市场**：英国、加拿大、澳大利亚等英语国家

### 2.2 竞品分析

#### 当前 SERP 排名（roblox clicker）
1. **第一名**：Scratch 平台的重制游戏
   - URL: https://scratch.mit.edu/search/projects?q=Roblox%20Clicker
   - 优势：社区驱动，易嵌入，即开即玩
2. **第二名**：Roblox 官方游戏页面（如 Race Clicker）
3. **其他竞品**：Crazy Games、Poki 等游戏平台

#### 竞品游戏类型
- **在线小游戏**：主要是点击模拟游戏（如 Roblox Clicker on Scratch）
- **游戏集合**：Crazy Games 的 clicker 类别页面
  - URL: https://www.crazygames.com/c/clicker
  - 策略：聚合多个点击游戏
- **其他平台**：Poki (https://poki.com/en/clicker) 和 Coolmath Games，提供浏览器点击游戏

#### 内容趋势（X 和 YouTube）
- 最近爆款视频主题：最佳 Roblox 点击游戏推荐、自动点击器教程
- 内容形式：短视频（Shorts）+ 长视频评测
- 用户需求：发现新的点击游戏、AFK 技巧和代码

### 2.3 市场机会
✅ **搜索热度稳定**，流量获取成本低
✅ **当前排名第一的是社区平台**，非官方站点有排名机会
✅ **用户有扩展需求**，不仅限于 Roblox 版本，还包括 Scratch 和自动工具教程
✅ **域名精准匹配**，SEO 优势明显
✅ **内容扩展空间大**，可聚合相关点击/增量游戏

---

## 3. 商业模式

### 3.1 站点类型
小游戏聚合站（Gaming Portal）


### 3.3 流量获取策略
1. **SEO 自然流量**（主要）
   - 核心关键词排名优化（如 "roblox clicker"）
   - 长尾关键词内容建设（如 "auto clicker for roblox"）
2. **社交媒体流量**（辅助）
   - X、YouTube、TikTok 等平台引流
3. **外链建设**（长期）
   - 游戏聚合平台、论坛外链

### 3.4 数据监测指标
- Google Search Console（GSC）：搜索表现、点击率
- Google Analytics（GA）：用户行为、转化率
- Microsoft Clarity：用户热力图、录屏分析
- Google Adsense：广告收入、RPM、CTR

---

## 4. 功能需求

### 4.1 核心功能

#### 4.1.1 首页游戏嵌入
- **需求描述**：在首页嵌入 Scratch 的 Roblox Clicker 重制游戏
- **技术实现**：使用 iframe 嵌入游戏页面
- **游戏源**：https://scratch.mit.edu/search/projects?q=Roblox%20Clicker （选择热门项目如 Roblox Clicker HACKED）

#### 4.1.2 游戏页面设计
**页面布局**：
```
[Header - Logo + Navigation]
[Game Title + Description]
[Game iFrame - Responsive]
[Game Instructions / Tips]
[Related Games Section]
[Footer - Links + SEO Text]
```

**必需元素**：
- 响应式游戏容器（自适应移动端）
- 全屏按钮
- 加载提示
- 游戏说明（How to Play）
- 分享按钮（社交媒体）

#### 4.1.3 相关游戏推荐
- **功能**：在主游戏下方展示相关点击/增量游戏
- **数据源**：
  - Roblox 官方：如 Race Clicker (https://www.roblox.com/games/9285238704/Race-Clicker)
  - Crazy Games: https://www.crazygames.com/c/clicker
- **展示数量**：首页 6-12 个相关游戏

### 4.2 内容功能

#### 4.2.1 游戏攻略/指南(置于首页)
**内容类型**：
- 游戏操作指南（How to Play）
- 点击技巧（Tips & Tricks，包括安全使用自动点击器）
- 代码列表（Codes Guide，如 Race Clicker Codes）
- 常见问题（FAQ，如 "roblox click to move not working"）

**SEO 目标**：
- 覆盖长尾关键词
- 提升页面停留时间
- 增加内链建设机会

#### 4.2.2 游戏集合列表
- **参考**：Crazy Games 的 clicker 分类页
- **URL 结构**：`/games/clicker`, `/games/race`, `/games/auto`
- **功能**：游戏列表（侧边栏）