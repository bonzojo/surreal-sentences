const colorArray = [
    'red', 'blue', 'green', 'yellow', 'gold', 'pink', 'grey', 'orange', 'white', 'purple', 'aqua', 'brown', 'cornflowerblue', 'chocolate', 'coral', 'burlywood', 'crimson', 'cyan', 'cadetblue', 'goldenrod', 'whitesmoke'
];

const fontArray = [
    'Times New Roman', 'Verdana', 'Garamond', 'Arial', 'Impact', 'Georgia', 'Comic Sans MS', 'Futura', 'Tahoma', 'Trebuchet', 'Courier New', 'monospace', 'Brush Script MT', 'Helvetica', 'Palatino', 'Baskerville', 'Luminari', 'Fantasy', 'Consolas'
];

let words = [
    "To", "see", "a", "World", "in", "a", "Grain", "of", "Sand",
    "And", "a", "Heaven", "in", "a", "Wild", "Flower",
    "Hold", "Infinity", "in", "the", "palm", "of", "your", "hand",
    "And", "Eternity", "in", "an", "hour"
];

const breaklineIndices = [9, 16, 24];

const surrealSentences = () => {
    let poem = '';

    words.forEach((word, index) => {
        const font = fontArray[Math.floor(Math.random() * fontArray.length)];
        const color = colorArray[Math.floor(Math.random() * colorArray.length)];
        poem += `<span style="font-family: '${font}'; color: ${color};">${word}</span> `;

        if (breaklineIndices.includes(index + 1)) {
            poem += '<br/>';
        }
    });

    document.getElementById('blake').innerHTML = poem;
};

const randomSelector = () => {
    const replace1 = ['see', 'watch', 'fix', 'tell', 'observe', 'set', 'fasten', 'adjust', 'restore', 'inform', 'reveal', 'announce', 'describe', 'disclose', 'convey', 'explain', 'repair', 'resolve'];
    const replace3 = ['world', 'realm', 'domain', 'entity', 'element', 'object', 'artifact', 'monkey', 'elephant', 'dog', 'biscuit', 'cake', 'key', 'painting', 'glass', 'pigeon', 'cat', 'car', 'bus'];
    const replace6 = ['grain', 'seed', 'kernel', 'granule', 'particle', 'berry', 'drop', 'flake', 'morsel', 'pixel', 'chipping', 'smudge', 'dish', 'puddle', 'nodule', 'scrape', 'trickle', 'figment'];
    const replace8 = ['sand', 'snow', 'sediment', 'clay', 'biscuit', 'dust', 'gravy', 'hair', 'breadcrumb', 'tomato', 'smoke', 'dirt', 'stain', 'flame', 'potato', 'shadow', 'milk', 'ember', 'flicker'];
    const replace11 = ['heaven', 'penumbra', 'silhouette', 'haze' , 'utopia', 'nirvana', 'eden', 'paradise', 'valhalla', 'sanctuary', 'realm', 'server', 'modem', 'elysium', 'field' , 'pitch', 'box'];
    const replace14 = ['wild', 'unruly', 'feral', 'brazen', 'schizoid', 'untamed', 'independent', 'careless', 'wandering', 'free', 'natural', 'weird', 'flamboyant', 'irreverent'];
    const replace15 = ['flower', 'dog', 'donkey', 'biscuit', 'petal', 'bush', 'seedling', 'wart', 'bobblehead', 'tumbler', 'ornament', 'bag', 'chimp', 'book', 'cheeseburger', 'bottle', 'telephone', 'monkey'];
    const replace16 = ['hold', 'handle', 'juggle', 'fondle', 'stroke', 'weigh', 'lift', 'squeeze', 'crush', 'tickle', 'fiddle', 'poke', 'flick', 'pick', 'massage'];
    const replace17 = ['eternity', 'infinity', 'time', 'hours', 'space', 'stars', 'lego', 'warts', 'beans', 'ash', 'coconuts', 'biscuits', 'water', 'melons', 'chocolate', 'travel guides', 'glass', 'cards'];
    const replace20 = ['palm', 'foot', 'scalp', 'naval', 'brow', 'cusp', 'crack', 'tip', 'crook', 'groove', 'crease', 'furl'];
    const replace23 = ['hand', 'toes', 'groin', 'elbow', 'forehead', 'teeth', 'eyelids', 'nose', 'head', 'shoulders', 'knees', 'foot', 'fingers', 'chin'];
    const replace25 = ['eternity', 'maternity', 'paternity', 'lightspeed', 'mandarin', 'fraternity', 'germany', 'memory', 'undefined', 'null', 'emptiness', 'abyss', 'clocks', 'machines'];
    const replace28 = ['hour', 'elephant', 'age', 'aeon', 'afterlife', 'minute', 'egg', 'idea', 'ovary', 'napkin', 'android', 'igloo', 'ego', 'umbrella', 'underdog', 'barmcake'];


    words[1] = replace1[Math.floor(Math.random() * replace1.length)];
    words[3] = replace3[Math.floor(Math.random() * replace3.length)];
    words[6] = replace6[Math.floor(Math.random() * replace6.length)];
    words[8] = replace8[Math.floor(Math.random() * replace8.length)];
    words[11] = replace11[Math.floor(Math.random() * replace11.length)];
    words[14] = replace14[Math.floor(Math.random() * replace14.length)];
    words[15] = replace15[Math.floor(Math.random() * replace15.length)];
    words[16] = replace16[Math.floor(Math.random() * replace16.length)];
    words[17] = replace17[Math.floor(Math.random() * replace17.length)];
    words[20] = replace20[Math.floor(Math.random() * replace20.length)];
    words[23] = replace23[Math.floor(Math.random() * replace23.length)];
    words[25] = replace25[Math.floor(Math.random() * replace25.length)];
    words[28] = replace28[Math.floor(Math.random() * replace28.length)];

    // Just to complete the next two lines!
    
    surrealSentences();
};

document.addEventListener('DOMContentLoaded', surrealSentences);
document.getElementById('jumblerBtn').addEventListener('click', randomSelector);

