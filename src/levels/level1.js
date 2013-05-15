define(function() {

  function Level() {

    this.level = {
      0: {
        name: 'background',
        renderable: {
          image: es.images.level1bg
        },
        position: {
          x: 0,
          y: 0
        }
      },

      1: {
        name: 'hero',
        renderable: {
          image: es.sprites.heroSprite.image,
          alpha: 1.0,
          source: es.newAnimation(es.sprites.heroSprite, [13])[0]
        },
        animate: {
          animation: es.newAnimation(es.sprites.heroSprite, [12, 13]), // blargh how do I reuse playerAnimations???
          interval: 1000 / 15,
          elapsed: 0,
          frame: {},
          index: 0
        },
        position: {
          x: 100,
          y: 100
        },
        movement: {
          x: 0,
          y: 0,
          speed: 1
        },
        collision: {
          bounds: new es.AABB(100, 100, 32, 32)
        },
        stun: {
          delay: 0,
          recoverTime: 0
        },
        blink: {
          interval: 80,
          amount: 0
        },
        player: true,
        playerControls: {
          up: 'W',
          left: 'A',
          down: 'S',
          right: 'D'
        },
        playerAnimations: {
          up: es.newAnimation(es.sprites.heroSprite, [0, 1]),
          left: es.newAnimation(es.sprites.heroSprite, [18, 19]),
          down: es.newAnimation(es.sprites.heroSprite, [12, 13]),
          right: es.newAnimation(es.sprites.heroSprite, [6, 7]),
          idle: es.newAnimation(es.sprites.heroSprite, [13])
        },
        health: 20
      },

      2: {
        name: 'leftWall',
        solid: true,
        collision: {
          bounds: new es.AABB(4, 45, 25, 478)
        }
      },

      3: {
        name: 'bottomWall',
        solid: true,
        collision: {
          bounds: new es.AABB(31, 492, 450, 30)
        }
      },

      4: {
        name: 'rightWall',
        solid: true,
        collision: {
          bounds: new es.AABB(483, 45, 25, 478)
        }
      },

      5: {
        name: 'topWall',
        solid: true,
        collision: {
          bounds: new es.AABB(31, 45, 450, 30)
        }
      },

      6: {
        name: 'monster',
        position: {
          x: 200,
          y: 200
        },
        renderable: {
          image: es.images.monster
        },
        collision: {
          bounds: new es.AABB(200, 200, 32, 32)
        },
        damagePlayer: {
          damage: 4,
          bounceBack: 30, // pixels
          stun: 100
        }
      }
    };
  }

  return Level;

});