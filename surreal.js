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
    const replace1 = ['watch', 'fix', 'tell', 'observe', 'set', 'fasten', 'adjust', 'restore', 'inform', 'reveal', 'announce', 'describe', 'disclose', 'convey', 'explain', 'repair', 'resolve'];
    const replace3 = ['realm', 'domain', 'entity', 'element', 'object', 'artifact', 'monkey', 'elephant', 'dog', 'biscuit', 'cake', 'key', 'painting', 'glass', 'pigeon', 'cat', 'car', 'bus'];
    const replace6 = ['seed', 'kernel', 'granule', 'particle', 'berry', 'drop', 'flake', 'morsel', 'pixel', 'chipping', 'smudge', 'dish', 'puddle', 'nodule', 'scrape', 'trickle', 'figment'];
    const replace8 = ['snow', 'sediment', 'clay', 'biscuit', 'dust', 'gravy', 'hair', 'breadcrumb', 'tomato', 'smoke', 'dirt', 'stain', 'flame', 'potato', 'shadow', 'milk', 'ember', 'flicker'];
    const replace11 = ['penumbra', 'silhouette', 'haze' , 'utopia', 'nirvana', 'eden', 'paradise', 'valhalla', 'sanctuary', 'realm', 'server', 'modem', 'elysium', 'field' , 'pitch', 'box'];
    const replace14 = ['unruly', 'feral', 'brazen', 'schizoid', 'untamed', 'independent', 'careless', 'wandering', 'free', 'natural', 'weird', 'flamboyant', 'irreverent'];
    const replace15 = ['dog', 'donkey', 'biscuit', 'petal', 'bush', 'seedling', 'wart', 'bobblehead', 'tumbler', 'ornament', 'bag', 'chimp', 'book', 'cheeseburger', 'bottle', 'telephone', 'monkey'];

    words[1] = replace1[Math.floor(Math.random() * replace1.length)];
    words[3] = replace3[Math.floor(Math.random() * replace3.length)];
    words[6] = replace6[Math.floor(Math.random() * replace6.length)];
    words[8] = replace8[Math.floor(Math.random() * replace8.length)];
    words[11] = replace11[Math.floor(Math.random() * replace11.length)];
    words[14] = replace14[Math.floor(Math.random() * replace14.length)];
    words[15] = replace15[Math.floor(Math.random() * replace15.length)];

    // Just to complete the next two lines!
    
    surrealSentences();
};

document.addEventListener('DOMContentLoaded', surrealSentences);
document.getElementById('jumblerBtn').addEventListener('click', randomSelector);

