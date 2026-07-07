import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import type { IncomingMessage, ServerResponse } from 'http'

function videoRangeMiddleware() {
  return {
    name: 'video-range',
    configureServer(server: { middlewares: { use: (fn: (req: IncomingMessage, res: ServerResponse, next: () => void) => void) => void } }) {
      server.middlewares.use((req: IncomingMessage, res: ServerResponse, next: () => void) => {
        const url = req.url ?? '';
        if (!/\.(mp4|mov|webm)(\?.*)?$/.test(url)) return next();

        const filePath = path.join(process.cwd(), 'public', url.split('?')[0]);
        if (!fs.existsSync(filePath)) return next();

        const stat = fs.statSync(filePath);
        const total = stat.size;
        const rangeHeader = (req as IncomingMessage & { headers: Record<string, string> }).headers['range'];

        const mimeTypes: Record<string, string> = {
          mp4: 'video/mp4',
          mov: 'video/quicktime',
          webm: 'video/webm',
        };
        const ext = filePath.split('.').pop()?.toLowerCase() ?? 'mp4';
        const contentType = mimeTypes[ext] ?? 'video/mp4';

        if (!rangeHeader) {
          res.writeHead(200, {
            'Content-Type': contentType,
            'Content-Length': total,
            'Accept-Ranges': 'bytes',
          });
          fs.createReadStream(filePath).pipe(res);
          return;
        }

        const [startStr, endStr] = rangeHeader.replace(/bytes=/, '').split('-');
        const start = parseInt(startStr, 10);
        const end = endStr ? parseInt(endStr, 10) : Math.min(start + 1024 * 1024 * 2, total - 1);
        const chunkSize = end - start + 1;

        res.writeHead(206, {
          'Content-Range': `bytes ${start}-${end}/${total}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunkSize,
          'Content-Type': contentType,
        });
        fs.createReadStream(filePath, { start, end }).pipe(res);
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), videoRangeMiddleware()],
})
