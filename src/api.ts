import { Router } from 'express';
import queueableMohex from './mohex-cli/queueableMohexInstance';
import bodyParser from 'body-parser';
import Ajv, { JSONSchemaType, ValidateFunction } from 'ajv';

const api = Router();
const ajv = new Ajv({
    allErrors: true,
});

api.use(bodyParser.json());

api.get('/license', async (req, res) => {
    res
        .type('text/plain')
        .send(await queueableMohex.queueCommand(async mohex => mohex.license()))
    ;
});

type CalculateMove = {
    size: number,
    movesHistory: string,
    currentColor: 'white' | 'black',
}

const schema: JSONSchemaType<CalculateMove> = {
    type: 'object',
    properties: {
        size: {type: 'integer'},
        movesHistory: {type: 'string'},
        currentColor: {type: 'string'}
    },
    required: ['size', 'movesHistory', 'currentColor'],
    additionalProperties: false,
};

const validate = ajv.compile(schema);

api.post('/calculate-move', async (req, res) => {
    const promise = queueableMohex.queueCommand(async mohex => {
        const { body } = req;

        if (!validate(body)) {
            throw validate.errors || [];
        }

        await mohex.setBoardSize(body.size);
        await mohex.playGame(body.movesHistory);

        return await mohex.generateMove(body.currentColor);
    });

    try {
        const result = await promise;

        res.send(result);
    } catch (e) {
        res
            .status(400)
            .send(
                ((e) as ValidateFunction['errors'] || [])
                    .map(e => e.message)
                ,
            )
        ;
    }
});

export default api;
