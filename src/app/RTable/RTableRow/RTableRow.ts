import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
    selector: 'rtable-row',
    template: `<td>{{item.name}}</td>
                <td class="amount">{{item.amount | currency:'RUB':'symbol-narrow' }}</td>
                <td class="bool"><input type="checkbox" [(ngModel)]="item.isActive" /></td>`,
    //styles: [` `],
    styleUrls: [ './RTableRow.css']
})
export class RTableRow {
    @Input() item: any
}