export function normalizeAmount(value, fallback = 1) {
  const amount = Math.floor(Number(value));
  return Number.isFinite(amount) && amount > 0 ? amount : fallback;
}

export function payloadById(id) {
  return { id };
}

export function payloadWithAmount(id, amount) {
  return { id, amount: normalizeAmount(amount) };
}

export function payloadWithFlag(id, flag) {
  return { id, flag: Boolean(flag) };
}

export function payloadWithFilter(id, filterId) {
  return { id, filterId };
}

export function payloadSetCraftingLevel(id, level, filterId) {
  return { id, level: normalizeAmount(level), filterId, isForce: false };
}

export function payloadSetPlantationWatering(id, level) {
  return { id, level: normalizeAmount(level) };
}

export function payloadFurnitureAutomation(id, flag, filterId) {
  return { id, flag: Boolean(flag), filterId };
}

export function payloadInventoryAmount(id, amount) {
  return { id, amount: normalizeAmount(amount), sendDetails: false };
}

export function payloadSaveInventorySettings(id, autoconsume, autosell) {
  return { id, isEnabled: Boolean(autoconsume || autosell), autoconsume: Boolean(autoconsume), autosell: Boolean(autosell) };
}

export function payloadEventOption(eventId, optionId) {
  return { eventId, optionId };
}

export function payloadEventOpened(eventId, opened) {
  return { id: eventId, opened: Boolean(opened) };
}

export function payloadActionFilterOrder(sourceIndex, destinationIndex) {
  return {
    sourceIndex: Number(sourceIndex),
    destinationIndex: Number(destinationIndex),
  };
}

export function payloadHotkey(rawPayload, id) {
  if (!rawPayload || typeof rawPayload !== 'object' || Array.isArray(rawPayload)) {
    throw new TypeError('Hotkey payload must be an object');
  }
  const payload = { ...rawPayload, id: rawPayload.id || id };
  if (!payload.id) throw new TypeError('Hotkey payload requires id');
  return payload;
}

export function payloadMonitored(scope, type, id = null) {
  return { scope, type, id: id || null };
}
