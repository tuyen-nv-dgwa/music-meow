deploy một project React-Vite lên GitHub bằng GitHub Pages

1. Tạo một repository trên GitHub cho project .
2. Clone repository đó về máy tính của bạn bằng cách sử dụng lệnh git clone trong terminal.

git clone https://github.com/your-username/your-repository.git


3. Di chuyển vào thư mục của repository bằng lệnh cd your-repository.

cd your-repository


4. Trong thư mục gốc của project React-Vite, tạo một file .env và đặt nội dung sau:

VITE_BASE_URL=/your-repository-name/


5. Trong file vite.config.js, thêm cấu hình base để xác định base URL cho GitHub Pages:

export default {
  base: '/your-repository-name/',
  // ... other config settings
}


6. Tiếp theo, cài đặt package vite-plugin-gh-pages để giúp deploy project lên GitHub Pages.

npm install vite-plugin-gh-pages --save-dev


7. Thêm plugin vite-plugin-gh-pages vào file vite.config.js:

import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import { ViteGlobInputPlugin } from 'vite-plugin-glob-input'
import VitePluginPages from 'vite-plugin-pages'
import VitePluginVuedoc from 'vite-plugin-vuedoc'
import VitePluginComponents from 'vite-plugin-components'
import VitePluginWindicss from 'vite-plugin-windicss'
import VitePluginGhPages from 'vite-plugin-gh-pages' // Add this line

export default defineConfig({
  plugins: [
    VitePWA(),
    ViteGlobInputPlugin(),
    VitePluginPages(),
    VitePluginVuedoc(),
    VitePluginComponents(),
    VitePluginWindicss(),
    VitePluginGhPages() // Add this line
  ]
})


8. Tạo một script trong file package.json để build và deploy project lên GitHub Pages.

"scripts": {
  "build": "vite build",
  "deploy": "npm run build && npx vite build --base /your-repository-name/ && npx gh-pages -d dist"
}


Thay your-repository-name bằng tên của repository của bạn trên GitHub.

9. Chạy script deploy bằng lệnh:

npm run deploy


Sau khi hoàn thành các bước trên, project React-Vite của bạn sẽ được deploy lên GitHub Pages và có thể truy cập qua đường dẫn https://your-username.github.io/your-repository.