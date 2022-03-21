export class Page {

    id: number;
    name: string;
    content: string;
    domId: string;

    constructor(id: number) {
        this.id = id;
        this.name = "New Page";
        this.content = "";
        this.domId = "page_" + this.id;
    }
}