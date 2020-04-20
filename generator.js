const dictionary = ["😎", "🥝", "🚀", "💥", "🐳", "⚽️", "💩", "🔌", "🐛"];
/**
 *
 * @param {object} args
 * @param {(emoString:string)=> void} args.callback callback con emoString
 * @param {number} args.maxTime Tempo max di generazione
 */
function generator({ callback, maxTime }) {
  let emoString = generateRandom();
  callback(emoString);

  setInterval(() => {
    emoString = generateRandom();
    callback(emoString);
  }, Math.floor(Math.random() * maxTime));

  function generateRandom() {
    return `${pickEmojii()}${pickEmojii()}${pickEmojii()}${pickEmojii()}`;
  }
  function pickEmojii() {
    return dictionary[Math.floor(Math.random() * dictionary.length)];
  }
}

module.exports = generator;
