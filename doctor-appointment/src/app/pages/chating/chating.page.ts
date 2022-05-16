import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chating',
  templateUrl: './chating.page.html',
  styleUrls: ['./chating.page.scss'],
})
export class ChatingPage implements OnInit {

  constructor() { }
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

}
