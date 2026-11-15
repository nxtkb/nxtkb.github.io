/** Hardware combinations and starting prices in CNY. */
export const sweepProVersions = [
  { id: 'base', display: false, trackpad: false, price: 620, url: 'https://item.taobao.com/item.htm?id=1002520008622' },
  { id: 'eink', display: true, trackpad: false, price: 720, url: 'https://item.taobao.com/item.htm?id=1022472315401' },
  { id: 'trackpad', display: false, trackpad: true, price: 750, url: 'https://item.taobao.com/item.htm?id=1001738884648' },
  { id: 'full', display: true, trackpad: true, price: 850, url: 'https://item.taobao.com/item.htm?id=1021093959607' },
];

/** @param {boolean} display @param {boolean} trackpad */
export function sweepProConfiguration(display, trackpad) {
  return sweepProVersions.find((version) => version.display === display && version.trackpad === trackpad);
}
