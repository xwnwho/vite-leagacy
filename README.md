# vite-vue-template

a template of vite-vue

## warnning

- `vite` 开发环境配置 `unplugin-vue-components` 导致页面加载过慢
- `unplugin-vue-components` 插件导致调试机制失效（位置不准确，和 sourcemap 有关）

## commitlint

代码提交通过 `commitlint` 校验

```json
{
  "type-enum": [
    2,
    "always",
    [
      "build", // 构建：更新构建，改动构建工具或外部依赖
      "chore", // 事务：变动事务，改动其他不影响代码的事务
      "ci", // 脚本：更新脚本，改动CI或执行脚本配置
      "docs", // 文档：更新文档，仅改动文档不改动代码
      "feat", // 功能：新增功能，迭代项目需求
      "fix", // 修复：修复缺陷，修复上一版本存在问题
      "perf", // 性能：优化性能，提高代码执行性能
      "refactor", // 重构：重构代码，非新增功能也非修改缺陷
      "revert", // 回滚：回滚版本，撤销某次代码提交
      "style", // 样式：变动格式，不影响代码逻辑
      "test" // 测试：新增测试，追加测试用例验证代码
    ]
  ]
}
```
