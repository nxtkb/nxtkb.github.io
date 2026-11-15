export type KeyboardModel = 'sweep' | 'sweep-pro';
export interface CustomizationOption { value: string; label: string; swatch?: string; copy?: string }
export interface CustomizationGroup { key: string; title: string; hint: string; layout: 'swatches' | 'chips' | 'cards'; selected: string; options: CustomizationOption[] }

export function customizationGroups(model: KeyboardModel, lang: 'en' | 'zh'): CustomizationGroup[] {
  const zh = lang === 'zh';
  const pro = model === 'sweep-pro';
  const colorChoices = pro
    ? [['white', '白色', 'White', '#f6f6f3'], ['black', '黑色', 'Black', '#27282b'], ['green', '绿色', 'Green', '#285a43'], ['blue', '蓝色', 'Blue', '#268bbd'], ['red', '深红', 'Dark red', '#8b253b'], ['orange', '橙色', 'Orange', '#ef8537'], ['gold', '金色', 'Gold', '#b99a53'], ['christmas', '圣诞绿', 'Christmas green', '#254c36']]
    : [['red', '红色', 'Red', '#b34748'], ['blue', '蓝色', 'Blue', '#268bbd'], ['black', '黑色', 'Black', '#27282b'], ['white', '白色', 'White', '#f6f6f3'], ['green', '绿色', 'Green', '#285a43'], ['orange', '橙色', 'Orange', '#ef8537'], ['gold', '金色', 'Gold', '#b99a53'], ['christmas', '圣诞绿', 'Christmas green', '#254c36'], ['custom', '双色 / 自定义', 'Two-tone / custom', 'linear-gradient(135deg, #eee 50%, #27282b 50%)']];
  const groups: CustomizationGroup[] = [{ key: 'color', title: zh ? '外壳配色' : 'Case color', hint: zh ? '选择桌面的主色调，可选配色以商品页为准。' : 'Set the tone for your desk. Available colors are shown on the product listing.', layout: 'swatches', selected: pro ? 'white' : 'red', options: colorChoices.map(([value, cn, en, swatch]) => ({ value, label: zh ? cn : en, swatch })) }];
  if (pro) groups.push({ key: 'keycaps', title: zh ? '键帽配色' : 'Keycap color', hint: zh ? '黑白键帽，搭配不同外壳。' : 'Pair black or white keycaps with your case.', layout: 'swatches', selected: 'white', options: [{ value: 'white', label: zh ? '白色键帽' : 'White keycaps', swatch: '#f6f6f3' }, { value: 'black', label: zh ? '黑色键帽' : 'Black keycaps', swatch: '#27282b' }] });
  const switches = pro
    ? [['islet', '凯华孤岛 mini', 'Kailh Islet mini'], ['whale', '凯华鲸落 mini', 'Kailh Whale Fall mini'], ['zheshan', '凯华遮山轴', 'Kailh Zhe Shan']]
    : [['red', '红轴', 'Red'], ['pink', '粉红轴', 'Pink'], ['red-pro', '红 Pro', 'Red Pro'], ['white', '白轴', 'White'], ['brown', '茶轴', 'Brown'], ['custom', '定制轴体', 'Custom switches']];
  groups.push({ key: 'switches', title: zh ? '轴体' : 'Switches', hint: zh ? (pro ? '不同轴体带来不同手感，可选轴体随配置而异。' : '凯华 Choc V1 矮轴，多种手感可选。') : (pro ? 'Explore different switch feels. Availability varies by hardware configuration.' : 'Kailh Choc V1 low-profile switches, with a choice of feels.'), layout: 'chips', selected: 'later', options: [{ value: 'later', label: zh ? '稍后选择' : 'Choose later' }, ...switches.map(([value, cn, en]) => ({ value, label: zh ? cn : en }))] });
  groups.push({ key: 'stand', title: zh ? '磁吸支架' : 'Magnetic stands', hint: zh ? '按你的桌面使用习惯选择套餐。' : 'Choose a bundle to suit your setup.', layout: 'cards', selected: 'without', options: [{ value: 'without', label: zh ? '仅键盘' : 'Keyboard only', copy: zh ? '不搭配磁吸支架。' : 'Without magnetic stands.' }, { value: 'with', label: zh ? '键盘 + 磁吸支架' : 'Keyboard + magnetic stands', copy: zh ? '分别调整左右半键盘的摆放角度。' : 'Position each half at your preferred angle.' }] });
  return groups;
}

// These are existing product photographs. Hardware options do not change the photographed modules.
const proImages: Record<string, [string, string]> = { white: ['56', '62'], black: ['61', '67'], green: ['57', '64'], blue: ['58', '65'], red: ['59', '66'], orange: ['60', '63'] };
export function customizationPreview(model: KeyboardModel, color: string, keycaps = 'white') {
  if (model === 'sweep-pro') {
    const pair = proImages[color] ?? proImages.white;
    return { key: pair[keycaps === 'black' ? 1 : 0], exact: Boolean(proImages[color]) };
  }
  return { key: color === 'blue' ? 'blue' : 'red', exact: color === 'blue' || color === 'red' };
}
export function customizationPhotos(model: KeyboardModel) {
  return model === 'sweep-pro'
    ? Object.values(proImages).flat().map((key) => ({ key, src: `/products/ferris-sweep-pro/${key}.png`, crop: [0, 390, 2000, 740] as [number, number, number, number] }))
    : [{ key: 'red', src: '/products/ferris-sweep/sweep-1.png', crop: [0, 790, 1728, 850] as [number, number, number, number] }, { key: 'blue', src: '/products/ferris-sweep/sweep-2.png', crop: [0, 790, 1728, 850] as [number, number, number, number] }];
}
