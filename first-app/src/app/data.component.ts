import { Component } from "@angular/core";

@Component({  // i will not recommend this approach
    selector : 'data-comp',
    template: `
        <div>
            <h3>
                Well I am data component
            </h3>
        </div>
    `,
    styles : [ 
        `  
            h3 {
                border : 1px solid green;
            }    
        `
    ]
 })
export class DataComponent {

}