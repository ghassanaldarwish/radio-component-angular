import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";

@Component({
  selector: "app-station",
  templateUrl: "./station.component.html",
  styleUrls: ["./station.component.scss"]
})
export class StationComponent implements OnInit {
  @Output() onturnOffHandler: EventEmitter<any> = new EventEmitter();
  constructor() {}
  onturnOff() {
    this.onturnOffHandler.emit();
  }

  ngOnInit() {}
}
