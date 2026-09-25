// "Sep 24, 6:00 PM" -> Date. Returns null if the string can't be parsed
// (e.g. "—" for cancelled orders, or "Delivered Sep 20" for delivered ones).
export function parseEta(etaStr) {
  if (!etaStr) return null;
  const match = etaStr.match(/^([A-Za-z]{3,9} \d{1,2}),\s*(.+)$/);
  if (!match) return null;

  const [, datePart, timePart] = match;
  const year = new Date().getFullYear();
  const parsed = new Date(`${datePart}, ${year} ${timePart}`);
  return isNaN(parsed.getTime()) ? null : parsed;
}

// An order is "delayed" if it isn't finished yet and its ETA has already passed.
export function isDelayed(order) {
  if (!order || order.status === "delivered" || order.status === "cancelled") return false;
  const etaDate = parseEta(order.eta);
  if (!etaDate) return false;
  return etaDate.getTime() < Date.now();
}

// An order has trackable data once at least one timeline step exists.
export function hasTracking(order) {
  return Array.isArray(order?.timeline) && order.timeline.length > 0;
}