# Playwright GitHub Action 集成 POC

这是一个概念验证（POC）项目，演示如何将 Playwright 端到端测试集成到 GitHub Actions 工作流中。

## 项目概述

本项目展示了如何使用 Playwright 进行自动化测试，并通过 GitHub Actions 实现持续集成和测试自动化。

## 功能特性

- ✅ 跨浏览器测试（Chromium、Firefox、WebKit）
- ✅ 页面标题验证
- ✅ 用户登录流程测试
- ✅ 导航菜单交互测试
- ✅ 搜索功能测试
- ✅ 页面截图功能
- ✅ GitHub Actions 集成

## 项目结构

```
playwright-github-action/
├── tests/
│   └── example.spec.ts          # 测试用例文件
├── playwright.config.ts         # Playwright 配置文件
├── package.json                 # 项目依赖配置
├── playwright-report/           # 测试报告目录
├── test-results/               # 测试结果目录
└── README.md                   # 项目说明文档
```

## 测试用例

### 1. 页面标题验证
验证 Playwright 官网的页面标题是否正确。

### 2. SauceDemo 登录测试
自动化测试用户登录流程：
- 输入用户名和密码
- 点击登录按钮
- 验证跳转到库存页面

### 3. 导航菜单测试
测试 Playwright 官网的导航菜单：
- 检查 "Docs" 链接是否可见
- 点击链接并验证页面跳转

### 4. 搜索功能测试
测试文档页面的搜索功能：
- 点击搜索按钮
- 输入搜索关键词
- 验证搜索结果显示

### 5. 页面截图
自动截取 Playwright 首页的完整截图。

## 环境要求

- Node.js 16+
- npm 或 yarn
- 支持的浏览器（Chromium、Firefox、WebKit）

## 安装和运行

### 本地开发

1. 克隆项目
```bash
git clone https://github.com/zhongqishi12/playwright-github-action.git
cd playwright-github-action
```

2. 安装依赖
```bash
npm install
```

3. 安装 Playwright 浏览器
```bash
npx playwright install
```

4. 运行测试
```bash
# 运行所有测试
npx playwright test

# 运行特定测试文件
npx playwright test tests/example.spec.ts

# 以 headed 模式运行（显示浏览器）
npx playwright test --headed

# 运行特定浏览器的测试
npx playwright test --project=chromium
```

5. 查看测试报告
```bash
npx playwright show-report
```

### 调试模式

```bash
# 调试模式运行
npx playwright test --debug

# 调试特定测试
npx playwright test tests/example.spec.ts --debug
```

## GitHub Actions 集成

本项目配置了 GitHub Actions 工作流，在以下情况下自动运行测试：

- 推送到 `main` 分支
- 创建 Pull Request
- 手动触发工作流

### 工作流特性

- 跨平台测试（Ubuntu、Windows、macOS）
- 多浏览器并行测试
- 自动生成测试报告
- 失败时上传截图和视频
- 测试报告作为 GitHub Pages 发布

## 配置说明

### Playwright 配置 (`playwright.config.ts`)

```typescript
// 主要配置项
- testDir: './tests'              // 测试文件目录
- fullyParallel: true            // 完全并行执行
- retries: 2                     // 失败重试次数
- workers: process.env.CI ? 1 : undefined  // CI 环境工作进程数
- reporter: 'html'               // HTML 报告格式
- use.screenshot: 'only-on-failure'  // 失败时截图
- use.video: 'retain-on-failure'     // 失败时保留视频
```

## 最佳实践

1. **页面对象模式**: 建议将页面元素和操作封装到页面对象中
2. **等待策略**: 使用 `page.waitForSelector()` 而不是硬编码延时
3. **数据驱动**: 使用外部数据文件驱动测试用例
4. **环境隔离**: 不同环境使用不同的配置文件
5. **错误处理**: 添加适当的错误处理和重试机制

## 贡献指南

1. Fork 本项目
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建 Pull Request

## 许可证

本项目采用 MIT 许可证。详情请参阅 [LICENSE](LICENSE) 文件。

## 相关链接

- [Playwright 官方文档](https://playwright.dev/)
- [GitHub Actions 文档](https://docs.github.com/en/actions)
- [Playwright 测试最佳实践](https://playwright.dev/docs/best-practices)

## 联系方式

如有问题或建议，请通过以下方式联系：

- 创建 Issue
- 发送邮件到 [your-email@example.com]
- GitHub: [@zhongqishi12](https://github.com/zhongqishi12)

---

**注意**: 这是一个概念验证项目，仅用于演示和学习目的。在生产环境中使用时，请根据实际需求进行相应的修改和优化。