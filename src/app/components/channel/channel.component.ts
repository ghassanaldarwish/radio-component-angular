import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-channel",
  templateUrl: "./channel.component.html",
  styleUrls: ["./channel.component.scss"]
})
export class ChannelComponent implements OnInit {
  @Input() radio: any;
  @Input() index: any;
  @Output() onSelectChannelHandler: EventEmitter<any> = new EventEmitter();

  onSelectChannel(id) {
    this.onSelectChannelHandler.emit(id);
  }

  constructor() {}

  ngOnInit() {}
}
