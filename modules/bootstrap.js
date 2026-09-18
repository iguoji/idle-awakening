import { mountModularUI } from './ui/index.js';

/**
 * 模块化增强入口：不改动旧 bundle 的业务状态，仅提供可逐步替换的 UI / Worker 边界。
 */
export function bootstrap() {
  const start = () => mountModularUI();
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
}

bootstrap();
