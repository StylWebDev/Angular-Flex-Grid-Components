import { Component, Input } from '@angular/core';

type GapSizes =
  "0"
  | "px"
  | "0.5"
  | "1"
  | "1.5"
  | "2"
  | "2.5"
  | "3"
  | "3.5"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "14"
  | "16";

@Component({
  selector: '[grid-wrapper]',
  standalone: true,
  imports: [],
  templateUrl: './grid.component.html',
  styles: ``
})

export class GridComponent {
  @Input() columns?: number | string;
  @Input() smColumns?: number | string;
  @Input() mdColumns?: number | string;
  @Input() lgColumns?: number | string;
  @Input() xlColumns?: number | string;
  @Input() txlColumns?: number | string;
  @Input() rows?: number | string;
  @Input() smRows?: number | string;
  @Input() mdRows?: number | string;
  @Input() lgRows?: number | string;
  @Input() xlRows?: number | string;
  @Input() txlRows?: number | string;
  @Input() gap?: GapSizes;
  @Input() smGap?: GapSizes;
  @Input() mdGap?: GapSizes;
  @Input() lgGap?: GapSizes;
  @Input() xlGap?: GapSizes;
  @Input() txlGap?: GapSizes;
  @Input() gapX?: GapSizes;
  @Input() smGapX?: GapSizes;
  @Input() mdGapX?: GapSizes;
  @Input() lgGapX?: GapSizes;
  @Input() xlGapX?: GapSizes;
  @Input() txlGapX?: GapSizes;
  @Input() gapY?: GapSizes;
  @Input() smGapY?: GapSizes;
  @Input() mdGapY?: GapSizes;
  @Input() lgGapY?: GapSizes;
  @Input() xlGapY?: GapSizes;
  @Input() txlGapY?: GapSizes;
  protected readonly Number = Number;
}
