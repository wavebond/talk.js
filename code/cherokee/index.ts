import { build, transform } from '~/base'

export const syllables = {
  Ꭰ: 'a',
  Ꭱ: 'e',
  Ꭲ: 'i',
  Ꭳ: 'o',
  Ꭴ: 'u',
  Ꭵ: 'U',
  Ꭶ: 'ga',
  Ꭷ: 'ka',
  Ꭸ: 'ge',
  Ꭹ: 'gi',
  Ꭺ: 'go',
  Ꭻ: 'gu',
  Ꭼ: 'gU',
  Ꭽ: 'ha',
  Ꭾ: 'he',
  Ꭿ: 'hi',
  Ꮀ: 'ho',
  Ꮁ: 'hu',
  Ꮂ: 'hU',
  Ꮃ: 'la',
  Ꮄ: 'le',
  Ꮅ: 'li',
  Ꮆ: 'lo',
  Ꮇ: 'lu',
  Ꮈ: 'lU',
  Ꮉ: 'ma',
  Ꮊ: 'me',
  Ꮋ: 'mi',
  Ꮌ: 'mo',
  Ꮍ: 'mu',
  Ᏽ: 'mU',
  Ꮎ: 'na',
  Ꮏ: 'hna',
  Ꮐ: 'nah',
  Ꮑ: 'ne',
  Ꮒ: 'ni',
  Ꮓ: 'no',
  Ꮔ: 'nu',
  Ꮕ: 'nU',
  Ꮖ: 'Kw~a',
  Ꮗ: 'Kw~e',
  Ꮘ: 'Kw~i',
  Ꮙ: 'Kw~o',
  Ꮚ: 'Kw~u',
  Ꮛ: 'Kw~U',
  Ꮝ: 's',
  Ꮜ: 'sa',
  Ꮞ: 'se',
  Ꮟ: 'si',
  Ꮠ: 'so',
  Ꮡ: 'su',
  Ꮢ: 'sU',
  Ꮣ: 'da',
  Ꮤ: 'ta',
  Ꮥ: 'de',
  Ꮦ: 'te',
  Ꮧ: 'di',
  Ꮨ: 'ti',
  Ꮩ: 'do',
  Ꮪ: 'du',
  Ꮫ: 'dU',
  Ꮬ: 'dZa',
  Ꮭ: 'tSa',
  Ꮮ: 'tSe',
  Ꮯ: 'tSi',
  Ꮰ: 'tSo',
  Ꮱ: 'tSu',
  Ꮲ: 'tSU',
  Ꮳ: 'tsa',
  Ꮴ: 'tse',
  Ꮵ: 'tsi',
  Ꮶ: 'tso',
  Ꮷ: 'tsu',
  Ꮸ: 'tsU',
  Ꮹ: 'wa',
  Ꮺ: 'we',
  Ꮻ: 'wi',
  Ꮼ: 'wo',
  Ꮽ: 'wu',
  Ꮾ: 'wU',
  Ꮿ: 'ya',
  Ᏸ: 'ye',
  Ᏹ: 'yi',
  Ᏺ: 'yo',
  Ᏻ: 'yu',
  Ᏼ: 'yU',
}
/**
 * Build trie.
 */

const trie = build(syllables)

/**
 * Transform the text.
 */

const make = (text: string) => transform(text, trie, syllables)

export default make
