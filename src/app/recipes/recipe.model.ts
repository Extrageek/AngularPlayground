export class Recipe {
    private _name: string;
    private _description: string;
    private _imagePath: string;

    constructor(name: string, desc: string, imagePath: string) {
        this._name = name;
        this._description = desc;
        this._imagePath = imagePath;
    }

    public get name(): string {
        return this._name;
    }
    public set name(v: string) {
        this._name = v;
    }

    public get description(): string {
        return this._description;
    }
    public set description(v: string) {
        this._description = v;
    }

    public get imagePath(): string {
        return this._imagePath;
    }
    public set imagePath(v: string) {
        this._imagePath = v;
    }
}
