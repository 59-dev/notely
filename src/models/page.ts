export class Page {

    id: number;
    name: string;
    content: string;
    domId: string;

    constructor(idx: number) {
        this.id = idx + 1;
        this.name = "Page " + this.id;
        this.content = "";
        this.domId = "page_" + this.id;
    }
}