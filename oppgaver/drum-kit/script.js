function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

djMixerArr = 
[
[ [''],['G'],[''],[''],[''],[''] ],
[ [''],[''],['G'],[''],[''],[''] ],
[ [''],[''],[''],[''],[''],[''] ],
[ [''],[''],[''],[''],[''],[''] ],
[ [''],[''],[''],[''],[''],[''] ],
[ [''],[''],[''],[''],[''],[''] ]
];

function printDjMixer(){
    var djMixerBody = document.getElementById('djMixerBody');
    for (var i = 0; i < djMixerArr.length; i++) {
        djMixerBody.innerHTML += `<tr id="djMixerBodyRow${i}"></tr>`;
        var e = djMixerArr[i];
        for (var j = 0; j < e.length; j++) {
            document.getElementById('djMixerBodyRow'+i).innerHTML += `<td class="key djMixerBodyRow${i}" contenteditable>${e[j]}</td>`;
        }
    }
    
}
printDjMixer();


var timer = 200;
var rowNumber = 0;
setInterval(function() {
    if (rowNumber > djMixerArr.length) rowNumber = 0;

    var boxes = document.querySelectorAll('.djMixerBodyRow'+rowNumber);
    boxes.forEach(function(box) {
        playSound({keyCode: box.innerHTML.toUpperCase().charCodeAt(0)});
    }, this);

    rowNumber++;
}, timer);