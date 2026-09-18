/**
 * 统一构造 Worker 命令载荷。
 * 只负责数据结构，不负责发送；便于后续替换旧 bundle 中分散的 payload 构造。
 */
const VERSION = 1;

export function createCommandPayload(command, payload = {}, options = {}) {
  if (!command || typeof command !== 'string') {
    throw new TypeError('command 必须是非空字符串');
  }
  return {
    version: VERSION,
    id: options.id ?? null,
    command,
    payload: payload && typeof payload === 'object' ? { ...payload } : { value: payload },
    timestamp: options.timestamp ?? Date.now(),
  };
}

export function createRequestPayload(command, payload = {}, id) {
  return createCommandPayload(command, payload, { id });
}
