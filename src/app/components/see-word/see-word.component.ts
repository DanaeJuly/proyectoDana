import { Component, OnInit } from '@angular/core';
import { CloudOptions, CloudData } from 'angular-tag-cloud-module';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-see-word',
  templateUrl: './see-word.component.html',
  styleUrls: ['./see-word.component.css']
})
export class SeeWordComponent implements OnInit {

  options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the size of the upper element multiplied by the value 
    width: 1500,
    height: 600,
    overflow: false,
  };
  data: CloudData[] = [
  ];

  constructor(
    public db: AngularFirestore
  ) { }

  ngOnInit() {
    this.db.collection('business').valueChanges().subscribe(res => {

      const countByGender = this.countleo(res, function (item) {
        return item.name
      });

      var result = Object.keys(countByGender).map(function (key) {
        return { text: key, weight: countByGender[key] };
      });
      this.data = result;
      console.log(result);
    });
  }

  countleo(ary, classifier) {
    classifier = classifier || String;
    return ary.reduce(function (counter, item) {
      var p = classifier(item);
      counter[p] = counter.hasOwnProperty(p) ? counter[p] + 2 : 1;
      return counter;
    }, {})
  }

}
