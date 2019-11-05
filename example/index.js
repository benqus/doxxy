import doxxy from '../lib/doxxy';

doxxy.subscribe('allClicks', (e) => console.log(e.type));

doxxy.subscribe('drag', {

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

doxxy.subscribe('form', {

    submit(e) {
        e.preventDefault();
        console.log(e.target);
    }

});
