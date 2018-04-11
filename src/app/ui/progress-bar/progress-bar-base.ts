import { Input } from '@angular/core';

export abstract class ProgressBarBase {
    /**
     * Progress bar color
     */
  @Input()
  public color = '#224050';
}