import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { StationComponent } from "./components/station/station.component";
import { ChannelComponent } from "./components/Channel/channel.component";
import { SpinnerComponent } from "./components/spinner/spinner.component";
import { ChannelDetailsComponent } from "./components/Channel/channel-details/channel-details.component";
import { FooterComponent } from "./components/Channel/footer/footer.component";

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
