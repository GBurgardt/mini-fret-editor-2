import './index.scss';

import $ from "jquery";

$(function () {

    let mainIntervalId;

    let generatedSong = $('.generated-song-container')[0];

    let bmpVelocity = .5;

    let state;

    // Cuando hace click en play, arranca todo.
    $(".btn-play")[0].addEventListener('click', () => {
        state = play;

        currentSong.play();
    });
    $(".btn-pause")[0].addEventListener('click', () => {
        state = paused;

        currentSong.pause();
    });
    $(".btn-minus")[0].addEventListener('click', () => {
        bmpVelocity = bmpVelocity - .1
    });
    $(".btn-more")[0].addEventListener('click', () => {
        bmpVelocity = bmpVelocity + .1
    });


    const paused = () => {};

    /**
     * Runs the current game `state` in a loop and renders the sprites
     * @param {*} delta 
     */
    const gameLoop = (delta) => {
        // Por ahora dejo un setInterval
        mainIntervalId = setInterval(() => {
            state && 
                state(delta);
        }, 15);
    }

    const play = (delta) => {

        // Muevo la current tab para abajo..
        if (generatedSong && $(generatedSong).css) {
            $(generatedSong)
                .css(
                    'top', 
                    `+=${bmpVelocity}px`
                )
        }
    }

    gameLoop(null);

})