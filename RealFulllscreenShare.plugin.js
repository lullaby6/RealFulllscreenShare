/**
 * @name RealFullscreenShare
 * @author github.com/LucianoBrumer
 * @description A real full screen for discord screen shares.
 * @version 0.0.1
 */

module.exports = class RealFullscreenShare {
    start() {
      document.addEventListener('keydown', () => {
          if(e.key === 'f') document.querySelector('video').requestFullscreen()
      });
    }

    stop() {
    }
}