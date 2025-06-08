const path = require('path');
module.exports = function Anywhere(mod) {
    mod.dispatch.addDefinition('C_REQUEST_CONTRACT', 999, path.join(__dirname, 'C_REQUEST_CONTRACT.999.def'), true);
    for (let key in mod.settings) {
        mod.command.add(key, {
            async $none() {
                let buffer = Buffer.alloc(mod.settings[key].BufferSize);
                if (mod.settings[key].BufferSize == 4) buffer.writeUInt32LE(Number(mod.settings[key].BufferVal));
                else if (mod.settings[key].BufferSize == 8) buffer.writeBigUInt64LE(BigInt(mod.settings[key].BufferVal));
                mod.send("C_REQUEST_CONTRACT", 999, {
                    ContractType: mod.settings[key].ContractType,
                    NpcCreatureId: BigInt(mod.settings[key].NpcCreatureId),
                    ValueParam: mod.settings[key].ValueParam,
                    ContractRequestee: "",
                    Param: buffer
                });
            },
            async setGameId() {
                mod.command.message("Contact the NPC whose gameId you want to save.");
                let gameId = await new Promise(res => { mod.hookOnce("C_NPC_CONTACT", 2, e => { res(e.gameId); }); });
                mod.settings[key].NpcCreatureId = String(gameId);
                mod.saveSettings();
                mod.command.message(`${key} NpcCreatureId set to ${String(gameId)}`);
            }
        });
    }

    let hook;
    let logging = false;
    mod.command.add("logContract", {
        $none() {
            logging = !logging;
            mod.command.message(`Contract logging has been ${logging ? "enabled" : "disabled"}.`);
            if (logging) {
                hook = mod.hook("C_REQUEST_CONTRACT", 999, { filter: { fake: null } }, e => {
                    console.log(e);
                });
            } else {
                mod.unhook(hook);
                hook = undefined;
            }
        }
    });
    this.destructor = () => {
        if (hook) {
            mod.unhook(hook);
        }
        for (let key in mod.settings) {
            mod.command.remove(key);
        }
    }
}