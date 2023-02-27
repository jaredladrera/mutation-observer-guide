import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-ppt',
  templateUrl: './demo-ppt.component.html',
  styleUrls: ['./demo-ppt.component.css']
})
export class DemoPptComponent implements OnInit {

  mutationObserver!: MutationObserver;

  constructor() { }

  ngOnInit() {

    const parent: any = document.querySelector('.parent1');

    // console.log('parent demo 1 ', parent.children[0].childNodes[0]);
    
    this.mutationObserver = new MutationObserver(obs => {
      console.log(obs);
    });

    this.mutationObserver.observe(parent.children[0].childNodes[0], {
      characterData: true,
    });

    // this.mutationObserver.disconnect();

    // parent.children[0].remove();
  }

}
