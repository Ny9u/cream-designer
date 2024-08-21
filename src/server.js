import fs from 'fs';
import path from 'path';
import express from 'express';
import { createServer as createViteServer } from 'vite';

async function createServer() {
  const app = express() //创建express应用
  const vite = await createViteServer({
    server: { middlewareMode: 'ssr' }
  }) //创建Vite中间件服务器

  app.use(vite.middlewares)
  app.use('*', async (req, res) => {
    const url = req.originalUrl

    try {
      // 1. 读取 index.html
      let template = fs.readFileSync(
        path.resolve(path.dirname(__dirname), 'index.html'),
        'utf-8'
      )
  
      // 2. 应用 Vite HTML 转换,这将会注入 Vite HMR 客户端，
      template = await vite.transformIndexHtml(url, template)
  
      // 3. 加载服务器入口,vite.ssrLoadModule 将自动转换
      const { render } = await vite.ssrLoadModule('/src/entry-server.js')
  
      // 4. 渲染应用的 HTML
      const appHtml = await render(url)
  
      // 5. 注入渲染后的应用程序 HTML 到模板中
      const html = template.replace(`<!--app-html-->`, appHtml)
  
      // 6. 返回渲染后的 HTML
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      vite.ssrFixStacktrace(e)
      console.error(e)
      res.status(500).end(e.message)
    }
  })

  app.listen(8887)
}

createServer()
