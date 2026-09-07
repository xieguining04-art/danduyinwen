# TengYoda 英文独立站正式上线说明

本压缩包是 TengYoda Logistics 的纯英文独立站源码，适合放入一个全新的 GitHub 仓库中维护。网站不包含中文版页面、中文语言切换框架或中文博文发布流程。

## 一、上传到新的 GitHub 仓库

1. 在 GitHub 新建一个空仓库，建议使用容易识别的英文名称，例如 `tengyoda-english-website`。
2. 在电脑上解压本压缩包。
3. 打开解压后的文件夹，将其中的全部文件和文件夹上传到新仓库根目录。
4. 请上传解压后的内容，不要只把 ZIP 压缩包上传到仓库。
5. 提交到 `main` 分支。

上传完成后，仓库根目录应能直接看到 `app`、`articles`、`public`、`.github`、`package.json` 和 `README.md` 等文件。

## 二、启用 GitHub Pages

1. 进入新仓库的 **Settings → Pages**。
2. 在 **Build and deployment** 的 **Source** 中选择 **GitHub Actions**。
3. 打开仓库顶部的 **Actions**。
4. 等待工作流 **Deploy TengYoda English website** 显示绿色勾号。
5. 返回 **Settings → Pages**，点击 GitHub 提供的临时网址预览网站。

自动部署文件已经放在 `.github/workflows/deploy-pages.yml`。以后只要把修改提交到 `main` 分支，网站就会自动重新生成和发布。

## 三、正式绑定域名

1. 先在 GitHub 临时网址完整检查电脑端和手机端页面。
2. 确认首页、About Us、Our Services、Blog、Contact Us、所有博客文章、图片和联系按钮均正常。
3. 确认新网站没有问题后，再在 **Settings → Pages → Custom domain** 填写 `tengyodalogistics.com`。
4. 按 GitHub 页面显示的记录修改域名 DNS。
5. 域名切换并稳定之前，不要提前删除旧网站或旧 DNS 记录。

## 四、以后发布英文博文

1. 在 `articles` 文件夹中新增英文 `.md` 文件。
2. 按照 `articles/README.md` 的格式填写标题、摘要、发布日期、封面图和正文。
3. 博文图片放在 `public/article-images/`。
4. 博文视频放在 `public/article-videos/`，再按文章模板引用。
5. 提交到 `main` 后，首页文章列表、Blog 页面、文章详情页和站点地图会自动更新。

网站只处理英文文章，不需要建立中文文章文件。

## 五、正式上线前检查

- 核对电话、WhatsApp、邮箱和联系人信息。
- 打开并阅读全部 15 篇英文博客。
- 检查手机端菜单、按钮、图片和页面滚动。
- 检查 `robots.txt`、`sitemap.xml` 和 `llms.txt` 可以访问。
- 将正式域名提交到 Google Search Console。
- 如需统计访问量，再配置 GA4；未配置时不影响网站正常打开。

如部署出现红色错误，请打开该次 Actions 记录并保留错误截图，以便按具体报错修复。
