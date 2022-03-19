export class Page {

    id: number;
    name: string;
    content: string;

    constructor(idx: number) {
        this.id = idx + 1;
        this.name = "Page " + this.id;
        this.content = "";
    }
}