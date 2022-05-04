import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(public FormBuilder : FormBuilder) { }
     updateList = function() {
      /* var input = document.getElementById('file');
      var output = document.getElementById('fileList');
      var children = "";
      for (var i = 0; i < input.files.length; ++i) {
          children +=  '<li>'+ input.files.item(i).name + '<span class="remove-list" onclick="return this.parentNode.remove()">X</span>' + '</li>'
      }
      output.innerHTML = children; */
  }
ngOnInit() {
}

get name() {
return this.profileform.get("name");
}
get email() {
return this.profileform.get("email");
}
get gender() {
return this.profileform.get('gender');
}
get dateofbirth() {
return this.profileform.get('dateofbirth');
}
get adreess() {
return this.profileform.get('adreess');
}
get bloodgroup() {
return this.profileform.get('bloodgroup');
}
get number() {
return this.profileform.get('number');
}


public errorMessages = {
name: [
{ type: 'required', message: 'name is required' },
],
email: [
{ type: 'required', message: 'email is required' },
],
gender: [
{ type: 'required', message: 'gender is required' },
{ type: 'pattern', message: 'Please enter a valid gender' }
],
dateofbirth: [
{ type: 'required', message: 'dateofbirth is required' },
],
adreess: [
{ type: 'required', message: 'adreess is required' },
],
bloodgroup: [
{ type: 'required', message: 'bloodgroup is required' },
],
number: [
{ type: 'required', message: 'number is required' },
],
};

profileform = this.FormBuilder.group({
name: ['', Validators.required],
email: ['', Validators.required],
gender: ['', Validators.required],
dateofbirth: ['', Validators.required],
adreess: ['', Validators.required],
bloodgroup: ['', Validators.required],
number: ['', Validators.required],
});

  public submit() {
	  console.log(this.profileform.value);
	}
}