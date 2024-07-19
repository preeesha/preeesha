import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { DataService } from "../../../services/data.service";
import { gsap, TweenLite } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

@Component({
  selector: "get-in-touch",
  templateUrl: "./get-in-touch.component.html",
  styleUrls: [
    "./get-in-touch.component.scss",
    "./get-in-touch.component_media.scss",
  ],
})
export class GetInTouchComponent implements OnInit {
  @ViewChild("section")
  section: ElementRef;
  @ViewChild("mainHeading")
  mainHeading: ElementRef;
  @ViewChild("heading")
  heading: ElementRef;
  @ViewChild("content")
  content: ElementRef;
  @ViewChild("cta")
  cta: ElementRef;

  constructor(public dataService: DataService) {}

  animate() {
    const transitions: gsap.TweenVars = {
      opacity: 0,
      y: 60,
      duration: 0.1,
      scrollTrigger: this.section.nativeElement,
    };
    TweenLite.from(this.mainHeading.nativeElement, 1, {
      ...transitions,
      delay: 0.2,
    });
    TweenLite.from(this.heading.nativeElement, 1, {
      ...transitions,
      delay: 0.3,
    });
    TweenLite.from(this.content.nativeElement, 1, {
      ...transitions,
      delay: 0.4,
    });
    TweenLite.from(this.cta.nativeElement, 1, {
      ...transitions,
      delay: 0.5,
    });
  }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    setTimeout(() => {
      this.animate();
    });
  }
}
