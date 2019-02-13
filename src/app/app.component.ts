import { Component, OnInit } from "@angular/core";
import { RadioService } from "./services/radio.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  radios: any;
  constructor(private radioService: RadioService) {}
  ngOnInit() {
    this.radioService.getRadios().subscribe(res => {
      let setNewValueInData = res.radios.map((i: any) => {
        return { ...i, isOpen: false };
      });
      this.radios = setNewValueInData;
      console.log("ggggg", res.radios);
    });
  }
  onSelectChannelHandler(id: any): void {
    const CloneState = [...this.radios];
    const checkIsOpen = CloneState.map((item, index) =>
      id === index ? { ...item, isOpen: true } : { ...item, isOpen: false }
    );
    this.radios = checkIsOpen;
  }

  onturnOffHandler(): void {
    console.log("ggggggggggggggggggggggg");
    const CloneState = [...this.radios];
    const setIsOpenToFalse = CloneState.map(item => {
      return { ...item, isOpen: false };
    });
    this.radios = setIsOpenToFalse;
  }
}
