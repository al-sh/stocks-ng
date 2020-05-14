import { Component } from '@angular/core';
import { testPortfolios } from '../../testData';
import { IPortfolio } from 'src/interfaces';

/*class Item {
    purchase: string;
    done: boolean;
    price: number;

    constructor(purchase: string, price: number) {

        this.purchase = purchase;
        this.price = price;
        this.done = false;
    }
}*/

@Component({
    selector: 'stocks',
    templateUrl: 'RTable.html',
    styleUrls: ['./RTable.css']
})
export class RTable {
    text: string;
    price: number = 0;


    items: IPortfolio[] = testPortfolios;

    activePage: number = 2;
    pageCount: number = (testPortfolios.length - (testPortfolios.length % 3)) / 3;


    buildPages(): any {
        const pages = [];
        for (let i = 0; i < this.pageCount; i++) {
            pages.push({ number: i + 1, active: this.activePage === (i + 1) ? true : false });
        }
        return pages;
    }

    pages: any = this.buildPages();

    /*
    items: Item[] =
        [
            { purchase: "Хлеб", done: false, price: 15.9 },
            { purchase: "Масло", done: false, price: 60 },
            { purchase: "Картофель", done: true, price: 22.6 },
            { purchase: "Сыр", done: false, price: 310 }
        ];*/

    addItem(text: string, price: number): void {
        if (text == null || text.trim() == "" || price == null)
            return;
        //this.items.push(new Item(text, price));
    }

    changePage(newActivePage: number): void {
        console.log('newActivePage', newActivePage, 'this.activePage', this.activePage);
        this.activePage = newActivePage;
        this.pages = this.buildPages();
    }
}