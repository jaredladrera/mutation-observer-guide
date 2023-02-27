import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'demo-mutation-observer';
  mutationObserver!: MutationObserver;
  
  constructor(protected elementRef: ElementRef) {}


  ngOnInit() {

    const dom: HTMLElement = this.elementRef.nativeElement;
    const parent: any = dom.querySelector('.parent')
    // const parent: any = document.querySelector('.parent');

    
    this.mutationObserver = new MutationObserver(obs => {
      console.log(obs);
    });
    
    // this.mutationObserver.observe(parent, { childList: true  });
    // this.mutationObserver.observe(parent, 
    //   { attributes: true, 
    //   attributeOldValue: true,
    //   attributeFilter: ["title"]
    //   });


    this.mutationObserver.observe(parent.children[0].childNodes[0], 
      { 
        // characterData: true,
        characterDataOldValue: true,
        subtree: true
      });
    // this.mutationObserver.observe(parent.children[0], { childList: true  });
    
    // parent.children[0].remove();
    // parent.appendChild(document.createElement('div'));
    // setTimeout(() => {
    //   parent.appendChild(document.createElement('div'));
    // }, 100);

    // console.log('parent ', parent.children);
    // parent.title = 'new id';
    
  } // end

  ngOnDestroy() {
    console.log('disconnect')
    this.mutationObserver.disconnect();
  }

}
