---
layout: homepage
---

<h1 id="about-me"></h1>

<h2 style="margin: 60px 0px 10px;">Profile</h2>

<div style="text-align: right; margin-top: 10px;">
  <button onclick="showEN()">English</button>
  | 
  <button onclick="showZH()">简体中文</button>
</div>

<!-- ========== 中文 Profile 段落 ========== -->
<div id="profile-zh" style="display:none;">
我现任职于<a href="https://www.hbyihua.cn/index.html">湖北宜化集团</a>数智部，主要负责 AI 应用开发。
此前就读于<a href="https://sci.cqu.edu.cn/">重庆大学数学与统计学院</a>的应用统计专业，是2025届硕士毕业生。
在校期间获本科和硕士国家奖学金、A类学业奖学金及校“优秀学生”等荣誉，现为一名国家统计师。<br/><br/>

在专业实习方面，我曾在北京猫眼娱乐（美团电影）-商业分析、中科院精密测量研究院-数据分析、
武汉泰迪-数据挖掘、深圳DigQuant量化策略 等岗位实习，熟练掌握Python、R、SQL与Office 工具，
深度参与产品监测、用户分析、数据挖掘与策略优化，并创新应用大模型进行文本标注与舆情情感分析。

在学术研究方面，我参与<strong>3项重庆市统计局课题项目</strong>，方向涵盖制造业数字化转型、工业互联网与实体经济；
负责<strong>1项湖北省创新训练项目</strong>；发表<strong>SCI一区论文1篇</strong>，并以第一发明人<strong>发表实用新型专利1项</strong>，
具备扎实的统计建模与研究能力。

<details style="margin-top: 0;">
    <summary style="margin-bottom: 0; color: #1e90ff;"><em>除实习和学术之外... </em> </summary>我总是<strong>渴望结识有趣的人😊并通过他们探索我周围世界的新视角</strong>🌟. 

- 我曾任职于校学生会、研团委，组织策划多次大型校园活动🎤🎭，<strong>成功吸引了上千名学生</strong>参加。
- 我业余时间爱好羽毛球🏸，健身🏋️，旅行✈️。
</details>

</div>


<!-- ========== 英文 Profile 段落 ========== -->
<div id="profile-en">
I am currently with the Digital Intelligence Department of 
<a href="https://www.hbyihua.cn/index.html">Hubei Yihua Group</a>, mainly focusing on AI application development.
Prior to that, I completed my Master’s degree in Applied Statistics at
<a href="https://sci.cqu.edu.cn/">the School of Mathematics and Statistics, Chongqing University</a> (Class of 2025).
During my studies, I received multiple honors, including the National Scholarship at both the undergraduate and graduate levels, the Category A Academic Scholarship, and the university-level “Outstanding Student” award. I am also a certified National Statistician.<br/><br/>

Regarding Professional internship, I have interned in roles spanning business analytics at Beijing Maoyan Entertainment (<strong>Meituan Film</strong>), data analysis at the <strong>Innovation Academy for Precision Measurement Science and Technology</strong>, data mining at Wuhan Taidi, and quantitative strategy research at Shenzhen DigQuant. I am proficient in Python, R, SQL, and Office, having participated extensively in product monitoring, user analytics, data mining, and strategy optimization. I have also explored the use of large language models for text annotation and sentiment analysis in user feedback.

In academic research, I have participated in <strong>three research projects funded by the Chongqing Municipal Bureau of Statistics</strong>, focusing on manufacturing digital transformation, industrial internet development, and the real economy. I also <strong>led a provincial innovation training project</strong> in Hubei. My research outputs include a <strong>first-quartile (Q1) SCI journal publication</strong> and a utility model patent as the first inventor, demonstrating strong capabilities in statistical modeling and empirical research.

<details style="margin-top: 0;">
    <summary style="margin-bottom: 0; color: #1e90ff;"><em>Beyond internship and academics... </em> </summary> I am <strong>always eager to meet interesting people😊 and through them discover new perspectives</strong> on the world around me🌟. 

- I once served in the student union and the Youth League Committee of the school, organizing and planning many large-scale campus activities 🎤🎭 , which <strong>successfully attracted over a thousand students</strong> to participate.
- In my free time, I love badminton🏸, keeping fit 🏋️, and traveling ✈️.
</details>

</div>

<hr/>

## Research Interest:

- **<strong>搜索推荐🔍️➡︎📇:</strong>** 基于用户行为和心理反馈的智能生成推荐。
- **<strong>网络分析🕸➡︎🧠:</strong>** 主要研究基于图神经网络、知识图谱、LLM的社会网络分析，涵盖预测、关系构建、画像构建等。

## Working Experience
- **[2025.07 - 至今]** 湖北宜化集团（中国500强），AI应用开发，正职.
- **[2024.06 - 2024.09]** 北京猫眼娱乐（美团电影），商业分析，实习生.
- **[2023.12 - 2024.02]** 中国科学院 精密测量科学与技术创新研究院，数据分析，实习生.
- **[2022.06 - 2022.08]** 武汉泰迪智慧科技，数据挖掘，实习生.
- **[2021.06 - 2021.08]** 深圳DigQuant，量化金融策略，实习生.


<!-- ========== JS for switching languages ========== -->
<script>
function showZH() {
  document.getElementById('profile-zh').style.display = 'block';
  document.getElementById('profile-en').style.display = 'none';
}

function showEN() {
  document.getElementById('profile-zh').style.display = 'none';
  document.getElementById('profile-en').style.display = 'block';
}
</script>


{% include_relative _includes/news.md %}

{% include_relative _includes/publications.md %}

{% include_relative _includes/projects.md %}

{% include_relative _includes/articles.md %}

{% include_relative _includes/awards.md %}