import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-light-luminacnce',
  templateUrl: './light-luminacnce.component.html',
  styleUrls: ['./light-luminacnce.component.scss']
})
export class LightLuminacnceComponent implements AfterViewInit{

  @Input() minimum: number = 0;
  @Input() maximum: number = 1;
  @Input() value: number = 0.5;
  @Input() steps: number = 0.1;
  @Output() luminanceChanged = new EventEmitter<number>();

  ngAfterViewInit(): void {
    this.value = this.maximum / 2;
  }



  onValueChanged(event: any) {
    this.value = event.target.value;
    this.luminanceChanged.emit(this.value);
  }

}
