export enum TagType { Position, Price, Deposit }

export interface DataTag {
    type: TagType,
    value: string
}

export const DataTagsExample: DataTag[] = [
    {
        type: TagType.Price,
        value: "2tr"
    },
    {
        type: TagType.Deposit,
        value: "200k"
    },
    {
        type: TagType.Position,
        value: "Mai Dich"
    }
]