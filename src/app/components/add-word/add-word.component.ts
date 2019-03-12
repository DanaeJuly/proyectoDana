import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.css']
})
export class AddWordComponent implements OnInit {

  formGroup: FormGroup = null;

  constructor(
    public db: AngularFirestore,
    public fb: FormBuilder
  ) {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  send() {
    const items = this.db.collection('business');
    items.add(this.formGroup.value);
    this.formGroup.reset();
  }
}
