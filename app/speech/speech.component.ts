import { Component, OnInit } from '@angular/core';
import {speech_rec} from 'annyang';
@Component({
  selector: 'app-speech',
  templateUrl: './speech.component.html',
  styleUrls: ['./speech.component.css']
})
export class SpeechComponent implements OnInit {
  commands = {};
  constructor() { }

  ngOnInit() {
  }
  strtListen(){
    console.log("Hello Listen");

    speech_rec.addCommands(this.commands);
    speech_rec.debug(true);
    speech_rec.start();
  }
}
