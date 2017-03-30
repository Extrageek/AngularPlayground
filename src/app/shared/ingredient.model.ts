export class Ingredient {

    constructor(private _name: string, private _amount: number) {}

    public get name(): string {
        return this._name;
    }
    public set name(v: string) {
        this._name = v;
    }

    public get amount(): number {
        return this._amount;
    }
    public set amount(v: number) {
        this._amount = v;
    }
}
