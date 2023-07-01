export enum IVAOAtcRating {
    NONE = 0,
    OBS = 1,
    AS1 = 2,
    AS2 = 3,
    AS3 = 4,
    ADC = 5,
    APC = 6,
    ACC = 7,
    SEC = 8,
    SAI = 9,
    CAI = 10
}

export enum IVAOPilotRating {
    NONE = 0,
    OBS = 1,
    FS1 = 2,
    FS2 = 3,
    FS3 = 4,
    PP = 5,
    SPP = 6,
    CP = 7,
    ATP = 8,
    SFI = 9,
    CFI = 10

}
export interface Ratings {
    pilot: IVAOPilotRating
    atc: IVAOAtcRating
}

export interface RatingsOptional {
    pilot: IVAOPilotRating | null,
    atc: null | IVAOAtcRating
}