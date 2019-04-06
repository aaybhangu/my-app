import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ChartsModule } from "ng2-charts";
import { AppComponent } from "./app.component";
import { BarChartDemoComponent } from "./bar-chart-demo/bar-chart-demo.component";
import { SpeechComponent } from "./speech/speech.component";

@NgModule({
  declarations: [AppComponent, BarChartDemoComponent, SpeechComponent],
  imports: [BrowserModule, ChartsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
