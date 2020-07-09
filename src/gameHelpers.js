export const STAGE_WIDTH = 12
export const STAGE_HEIGHT = 20

export const createStage = () => 
Array.from(Array(STAGE_HEIGHT), () => 
    new Array(STAGE_WIDTH).fill([0, 'clear'])
)

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
    for (let y = 0; y < player.tetromino.length; y++) {
        for (let x = 0; x < player.tetromino[y].length; x++) {

            // 1. Check that we're on an actual tetromino cell
            console.log('collision ' + !stage[y + player.pos.y + moveY])
            if (player.tetromino[y][x] !== 0) {
                if (
                    // Check that our move is inside the game field height (y)
                    // 2. Also shouldn't go below bottom of the game field
                    !stage[y + player.pos.y + moveY] ||
                    // 3. Check that out move is inside the game field width (x)
                    !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
                    // 4. Check that the cell we're moving to isn't set to clear
                    stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
                ) {
                    return true
                }
            }
        }
    }
}