import Mohex from './Mohex';
import QueueableMohex from './QueueableMohex';

const MOHEX_SEED = 1;
const MOHEX_BINARY = '/bin/mohex';

const queueableMohex = new QueueableMohex(new Mohex(MOHEX_BINARY, MOHEX_SEED));

queueableMohex.queueCommand(async (mohex) => {
    await mohex.setMohexParameters({
        // do not keep calculated moves because plays multiple games in parallel
        reuse_subtree: false,

        // timeout, must not stop calculations to keep consistent AI difficulty
        max_time: '30',

        // limit mohex power
        max_games: '20',

        // limit memory
        max_memory: '' + (512 * 1024 * 1024), // 512Mio
    });

    await mohex.setGameParameters({
        allow_swap: false,
    });

    await mohex.sendCommand('benzene-license');
}).then(() => {
    console.log('mohex preconfigured.');
});

export default queueableMohex;
