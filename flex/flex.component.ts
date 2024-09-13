import {Component, Input} from '@angular/core';

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
  selector: '[flex-wrap]',
  standalone: true,
  imports: [],
  templateUrl: './flex.component.html',
})

export class FlexComponent {
  @Input() row?: boolean;
  @Input() smRow?: boolean;
  @Input() mdRow?: boolean;
  @Input() lgRow?: boolean;
  @Input() xlRow?: boolean;
  @Input() txlRow?: boolean;
  @Input() column?: boolean;
  @Input() smColumn?: boolean;
  @Input() mdColumn?: boolean;
  @Input() lgColumn?: boolean;
  @Input() xlColumn?: boolean;
  @Input() txlColumn?: boolean;
  @Input() wrap?: boolean;
  @Input() grow?: boolean;
  @Input() noGrow?: boolean;
  @Input() shrink?: boolean;
  @Input() noShrink?: boolean;
  @Input() router?: boolean;
  @Input() to?: string;
  @Input() is?: string;
  @Input() items?: "start" | "center" | "end";
  @Input() smItems?: "start" | "center" | "end";
  @Input() mdItems?: "start" | "center" | "end";
  @Input() lgItems?: "start" | "center" | "end";
  @Input() xlItems?: "start" | "center" | "end";
  @Input() txlItems?: "start" | "center" | "end";
  @Input() justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  @Input() smJustify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  @Input() mdJustify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  @Input() lgJustify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  @Input() xlJustify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  @Input() txlJustify?: "start" | "center" | "end" | "between" | "around" | "evenly";
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
}
