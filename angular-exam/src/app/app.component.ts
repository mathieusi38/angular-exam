import { Component } from '@angular/core';
import { FormControl, Validators , FormGroup } from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  TransLang=["en","fr"];
  selectLang:string = "";
  title: FormControl;
  description: FormControl;
  form: FormGroup = new FormGroup({});

  constructor(public translate: TranslateService) {

      // this language will be used as a fallback when a translation isn't found in the current language
    if (navigator.language.split('-')[0]  == "fr") {
      translate.use('fr');
    } else {
      translate.use(translate.getDefaultLang());
    }

    this.title = new FormControl("",Validators.required);
    this.description = new FormControl("",Validators.required);
  }

  setTransLanguage(){
    //this.TransLang= this.translate.getLangs();
    this.translate.use(this.selectLang);
    }
  
}
