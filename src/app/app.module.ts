import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { StationComponent } from "./components/station/station.component";
import { ChannelComponent } from "./components/channel/channel.component";
import { SpinnerComponent } from "./components/spinner/spinner.component";
import { ChannelDetailsComponent } from "./components/channel/channel-details/channel-details.component";
import { FooterComponent } from "./components/channel/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    StationComponent,
    ChannelComponent,
    SpinnerComponent,
    ChannelDetailsComponent,
    FooterComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
