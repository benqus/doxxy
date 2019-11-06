import doxxy from '../lib/index';

const dx = doxxy();

dx.action('allClicks', (e) => console.log(e.type));

dx.action('drag', {

    start(e) {
        e.dataTransfer.setData('text/plain', 'hakuna matata');
    },

    // https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#droptargets
    over(e) {
        e.preventDefault();
    },

    drop(e) {
        e.target.innerText = e.dataTransfer.getData('text/plain');
    }

});

dx.action('form', {

    submit(e) {
        e.preventDefault();
        console.log(e.target);
    }

});

// Nosleep.js test
const node = document.getElementById('video');
const events = [ 'timeupdate' ];
const cx = doxxy({ node, events });

cx.action('jumpToRandomTime', (e) => {
    if (e.target.currentTime > 0.5) {
        console.log(e.target.currentTime);
        e.target.currentTime = Math.random();
    }
});

node.play();
