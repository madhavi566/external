import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DetailsService } from '../details.service';
import { AvailableData } from '../models/availableData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  offersData: AvailableData[];
  getoffersValues: any;
  listOfCasesSubscriptions: Subscription[] = [];
  dataSubscription: Subscription;

  constructor(private detailsService: DetailsService) {
    this.offersData = [];
  }

  ngOnInit() {
    this.getAvailableData();
  }

  getAvailableData() {
    this.detailsService.postRequest(this.offersData)
      .subscribe(res => console.log(res));

    if (!this.offersData.length) {
      this.offersData.push(
        {
          Heading: 'Gas container name change by Reliance',
          Image: '',
          Video: 'https://www.youtube.com/embed/v64KOxKVLVg',
          Description:
            'A video showing people labelling oxygen containers with  stickers of Reliance  is being shared on social media with a claim that these are oxygen tankers supplied to India',
          Validation: 'fake',
          Reference:
            'https://www.boomlive.in/fact-check/fake-news-reliance-industries-puts-sticker-on-oxygen-from-saudi-arabia-covid-19-coronavirus-pandemic-12998',
        },
        {
          Heading: 'Article 2',
          Image: 'assets/img/article2.PNG',
          Video: '',
          Description: 'Article 2 A video showing people labelling oxygen containers with  stickers of Reliance  is being shared on social media with a claim',
          Validation: 'real',
          Reference:
          'https://www.business-standard.com/article/current-affairs/world-environment-day-2021-theme-images-importance-of-ecosystem-restoration-june-5-environment-crisis-121060500082_1.html',
        },
        {
          Heading: 'Article 3',
          Image: 'assets/img/article3.PNG',
          Video: '',
          Description: 'Article 3 : The 27 Most Active Volcanoes In The World And What Could Erupt Next',
          Validation: 'fake',
          Reference: 'https://www.forbes.com/sites/jimdobson/2021/04/09/the-27-most-active-volcanoes-in-the-world-and-what-could-erupt-next/',
        }
      );
    }
  }
}
