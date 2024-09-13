# Flex and Grid Components For Angular

This is a tailwind css set of angular components which makes faster and imporves the angular development experience.

## Requirements
- Angular
- Tailwind CSS

## Usage

```typescript
//Import Flex and Grid Components To Your Custom Component's .ts file
import { Component } from '@angular/core';
import { FlexComponent } "../flex/flex.component";
import { GridComponent } "../grid/grid.component";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [ FlexComponent, GridComponent],
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent {

}
```

```html
<div grid-wrapper [columns]="2" items="center" gapX="5">
    <div flex-wraper [columns]="true" justify="center">
         <h1>This is A test</h1>
    </div>
   <div flex-wraper [columns]="true" justify="center">
         <p>I love Angular!</p>
   </div>
</div>
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MPL-2.0](https://www.mozilla.org/en-US/MPL/2.0/)
