import { Page } from "./page";

export class Notebook{

    pages: Array<Page> = new Array();

    constructor() {
        Array.from(Array(5)).forEach((x, i) => {
            this.pages.push(new Page(i))
        });
    }
}