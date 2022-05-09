# Note about Alias Path:

Install tsconfig-paths-webpack-plugin

- Go to react-script/config/webpack/webpack.config.js

```javascript
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  ...
  resolve: {
    plugins: [new TsconfigPathsPlugin({/* options: see below */})]
  }
  ...
}
```
