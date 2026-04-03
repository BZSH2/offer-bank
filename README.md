# offer-bank

`offer-bank` 是一个面向前端面试训练场景的全栈 monorepo，当前先完成项目基础架构搭建，后续再逐步补齐真实业务。

## 当前阶段

目前仓库已落下：

- monorepo / workspace 结构
- 三端基础目录：`mobile-uniapp` / `api-nest` / `admin-web`
- 统一的 ESLint / Stylelint / Prettier / Commitlint / Husky 配置
- TypeScript 基础配置拆分
- API 基础启动入口与 `GET /api/health` 健康检查骨架

## 目录结构

```text
apps/
  mobile-uniapp/   # 用户端（uni-app）
  api-nest/        # 服务端（NestJS）
  admin-web/       # 管理端（Vue）
packages/
  lint-config/     # 共享 lint / format 配置
  tsconfig/        # 共享 TypeScript 配置
```

## 工程原则

- **先立骨架，再填业务**：先把目录、规范、边界定住
- **严格但不过度**：优先拦真正影响质量的问题
- **三端分层清晰**：用户端、服务端、管理端职责独立
- **共享配置复用**：尽量把规范沉到 `packages/`，避免到处复制

## 下一步建议

1. 为 `api-nest` 补用户、题目、分类等核心模块骨架
2. 为 `admin-web` 补路由、布局、页面分区
3. 为 `mobile-uniapp` 补首页、题目列表、练习流转页面
4. 增加 shared types / DTO / API client 复用层

## 状态说明

当前仓库仍处于 foundation 阶段，优先保证结构和规范可继续扩展。
