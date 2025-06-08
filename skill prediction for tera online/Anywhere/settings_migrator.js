const DefaultSettings = {
    bank: {
        ContractType: 26,
        NpcCreatureId: "0",
        ValueParam: 1,
        ContractRequestee: "",
        BufferVal: "1",
        BufferSize: 4
    },
    elleon: {
        ContractType: 20,
        NpcCreatureId: "0",
        ValueParam: 364,
        ContractRequestee: "",
        BufferVal: "364",
        BufferSize: 4
    },
    guardian: {
        ContractType: 49,
        NpcCreatureId: "3518437209091649",
        ValueParam: 6112,
        ContractRequestee: "",
        BufferVal: "6112",
        BufferSize: 4
    },
    StarcV: {
        ContractType: 9,
        NpcCreatureId: "3518437209598136",
        ValueParam: 10004,
        ContractRequestee: "",
        BufferVal: "10004",
        BufferSize: 4
    },
    StarcA: {
        ContractType: 9,
        NpcCreatureId: "0",
        ValueParam: 10004,
        ContractRequestee: "",
        BufferVal: "10004",
        BufferSize: 4
    },
    StarcK: {
        ContractType: 9,
        NpcCreatureId: "3518437209878627",
        ValueParam: 10004,
        ContractRequestee: "",
        BufferVal: "10004",
        BufferSize: 4
    },
    StarcH: {
        ContractType: 9,
        NpcCreatureId: "0",
        ValueParam: 10004,
        ContractRequestee: "",
        BufferVal: "10004",
        BufferSize: 4
    },
    MMV: {
        ContractType: 20,
        NpcCreatureId: "3518437209908395",
        ValueParam: 10000,
        ContractRequestee: "",
        BufferVal: "10000",
        BufferSize: 4
    },
    MMA: {
        ContractType: 20,
        NpcCreatureId: "3518437208923463",
        ValueParam: 10001,
        ContractRequestee: "",
        BufferVal: "10001",
        BufferSize: 4
    },
    MMK: {
        ContractType: 20,
        NpcCreatureId: "3518437209224313",
        ValueParam: 10002,
        ContractRequestee: "",
        BufferVal: "10002",
        BufferSize: 4
    },
    MMH: {
        ContractType: 20,
        NpcCreatureId: "3518437209693440",
        ValueParam: 10003,
        ContractRequestee: "",
        BufferVal: "10003",
        BufferSize: 4
    },
    gbank: {
        ContractType: 26,
        NpcCreatureId: "0",
        ValueParam: 3,
        ContractRequestee: "",
        BufferVal: "3",
        BufferSize: 4
    },
    petbank: {
        ContractType: 26,
        NpcCreatureId: "0",
        ValueParam: 9,
        ContractRequestee: "",
        BufferVal: "9",
        BufferSize: 4
    },
    wardrobe: {
        ContractType: 26,
        NpcCreatureId: "0",
        ValueParam: 12,
        ContractRequestee: "",
        BufferVal: "12",
        BufferSize: 4
    },
    angler: {
        ContractType: 20,
        NpcCreatureId: "0",
        ValueParam: 16095,
        ContractRequestee: "",
        BufferVal: "16095",
        BufferSize: 4
    },
    merchant: {
        ContractType: 9,
        NpcCreatureId: "3518437209220613",
        ValueParam: 70310,
        ContractRequestee: "",
        BufferVal: "70310",
        BufferSize: 4
    },
    magicsup: {
        ContractType: 9,
        NpcCreatureId: "3518437209218531",
        ValueParam: 111,
        ContractRequestee: "",
        BufferVal: "111",
        BufferSize: 4
    },
    crystal: {
        ContractType: 9,
        NpcCreatureId: "3518437209211413",
        ValueParam: 110,
        ContractRequestee: "",
        BufferVal: "110",
        BufferSize: 4
    },
    specialty: {
        ContractType: 9,
        NpcCreatureId: "3518437209209351",
        ValueParam: 250,
        ContractRequestee: "",
        BufferVal: "250",
        BufferSize: 4
    },
    bellicarium: {
        ContractType: 50,
        NpcCreatureId: "3518437209214679",
        ValueParam: 141,
        ContractRequestee: "",
        BufferVal: "141",
        BufferSize: 4
    },
    hustler: {
        ContractType: 9,
        NpcCreatureId: "3518437209214679",
        ValueParam: 251,
        ContractRequestee: "",
        BufferVal: "251",
        BufferSize: 4
    },
    vgsup: {
        ContractType: 49,
        NpcCreatureId: "3518437209201273",
        ValueParam: 609,
        ContractRequestee: "",
        BufferVal: "609",
        BufferSize: 4
    },
    vgcrys: {
        ContractType: 49,
        NpcCreatureId: "3518437209214532",
        ValueParam: 6090,
        ContractRequestee: "",
        BufferVal: "6090",
        BufferSize: 4
    },	
    fishsup: {
        ContractType: 9,
        NpcCreatureId: "3518437209218266",
        ValueParam: 16094,
        ContractRequestee: "",
        BufferVal: "16094",
        BufferSize: 4
    },
    veracun: {
        ContractType: 20,
        NpcCreatureId: "3518437209497243",
        ValueParam: 10010,
        ContractRequestee: "",
        BufferVal: "10010",
        BufferSize: 4
    },
    hecurn: {
        ContractType: 20,
        NpcCreatureId: "3518437209808810",
        ValueParam: 10035,
        ContractRequestee: "",
        BufferVal: "10035",
        BufferSize: 4
    }
}

module.exports = function MigrateSettings(from_ver, to_ver, settings) {
    if (from_ver === undefined) {
        // Migrate legacy config file
        return Object.assign(Object.assign({}, DefaultSettings), settings);
    } else if (from_ver === null) {
        // No config file exists, use default settings
        return DefaultSettings;
    } else {
        // Migrate from older version (using the new system) to latest one
        throw new Error('So far there is only one settings version and this should never be reached!');
    }
}