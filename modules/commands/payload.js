/**
 * Worker 命令载荷集中构造层。
 * 新协议使用 command；迁移旧业务时可继续生成 event/payload，避免一次性改动旧 Worker。
 */
const VERSION = 1;

function copyPayload(payload) {
  return payload && typeof payload === 'object' ? { ...payload } : { value: payload };
}

export function createCommandPayload(command, payload = {}, options = {}) {
  if (!command || typeof command !== 'string') throw new TypeError('command 必须是非空字符串');
  return {
    version: VERSION,
    id: options.id ?? null,
    command,
    payload: copyPayload(payload),
    timestamp: options.timestamp ?? Date.now(),
  };
}

/** 旧 Worker 当前仍使用 event/payload 时的兼容入口。 */
export function createLegacyEventPayload(event, payload = {}) {
  if (!event || typeof event !== 'string') throw new TypeError('event 必须是非空字符串');
  return { event, payload: copyPayload(payload) };
}

export function createRequestPayload(command, payload = {}, id) {
  return createCommandPayload(command, payload, { id });
}
