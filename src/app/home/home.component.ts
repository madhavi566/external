import { Component, OnInit } from '@angular/core';
import { AvailableData } from '../models/availableData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  offersData: AvailableData[];
  getoffersValues: any;

  constructor() {
    this.offersData = [];
  }

  ngOnInit() {
    this.getAvailableData();
  }

  getAvailableData() {
    if (!this.offersData.length) {
      this.offersData.push(
        {
          Heading: 'Gas container name change by Reliance',
          Image: 'assets/img/fake.PNG',
          Video: '',
          Description:
            'A video showing people labelling oxygen containers with  stickers of Reliance  is being shared on social media with a claim that these are oxygen tankers supplied to India',
          Validation: 'Fake',
          Reference:
            'https://www.boomlive.in/fact-check/fake-news-reliance-industries-puts-sticker-on-oxygen-from-saudi-arabia-covid-19-coronavirus-pandemic-12998',
        },
        {
          Heading: 'Article 2',
          Image: '',
          Video: 'https://www.youtube.com/embed/v64KOxKVLVg',
          Description: 'Article 2Article 2Article 2Article 2',
          Validation: 'Real',
          Reference: '',
        },
        {
          Heading: 'Article 3',
          Image: 'assets/img/fake.PNG',
          Video: '',
          Description: 'Article 3',
          Validation: 'Fake',
          Reference: '',
        }
      );
    }
  }
}
