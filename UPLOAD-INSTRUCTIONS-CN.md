# TengYoda 博文增量更新说明

本包用于升级现有文章 **How to Choose a Reliable Freight Forwarder in China**，只包含本次变更文件，不需要覆盖整个网站。

## 本次更新

- 保留原文章网址和发布日期，避免损失已有收录。
- 将旧短文升级为约 2,900 词的英文 SEO 指南。
- 新增 5 张原创 WebP 配图。
- 新增 SEO 标题、描述、关键词方向及相关服务内链。
- 更新自动生成的文章索引。

## 上传路径

1. 将 `articles/how-to-choose-reliable-china-freight-forwarder.md` 上传到仓库的 `articles/`，覆盖同名旧文章。
2. 将 `public/article-images/` 内 5 张图片上传到仓库相同目录。
3. 将 `lib/seo.ts` 和 `lib/markdown-posts.ts` 上传到仓库的 `lib/`，覆盖同名文件。
4. 提交到 `main` 分支并等待 GitHub Actions 部署完成。

## 部署后网址

`https://tengyodalogistics.com/blog/how-to-choose-reliable-china-freight-forwarder/`

不要另外创建第二篇相同主题文章，否则两个页面可能竞争同一关键词。
