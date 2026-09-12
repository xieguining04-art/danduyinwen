# TengYoda 网站增量更新说明

本包只包含本次新增或更新的 8 个网站文件，不需要覆盖整个项目。

## 建议操作

1. 先保留当前 GitHub 仓库作为备份。
2. 将本包中的文件按原目录上传到仓库：
   - `articles/`：新增 1 篇文章。
   - `public/article-images/`：新增 5 张 WebP 图片。
   - `lib/`：更新 SEO 配置和自动生成的文章索引。
3. 提交到 `main` 分支，等待 GitHub Actions 部署完成。
4. 部署后访问：
   `https://tengyodalogistics.com/blog/shipping-500-cars-china-to-oman-roro-vs-container/`

## 说明

- `lib/markdown-posts.ts` 会在 `npm run build` 时由 `tools/publish_articles.py` 自动生成。本包仍提供了已更新版本，方便 GitHub 源代码与本次文章保持一致。
- 本次没有删除或重命名现有页面。
- 已通过 TypeScript、Next.js 静态构建、站内链接、图片路径、canonical、Article 结构化数据和 sitemap 检查。
