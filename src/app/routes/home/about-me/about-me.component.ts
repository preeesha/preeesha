import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { DataService } from "../../../services/data.service";
import { gsap, TweenLite } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

@Component({
  selector: "about-me",
  templateUrl: "./about-me.component.html",
  styleUrls: ["./about-me.component.scss", "./about-me.component_media.scss"],
})
export class AboutMeComponent implements OnInit {
  @ViewChild("section")
  section: ElementRef;
  @ViewChild("heading")
  heading: ElementRef;
  @ViewChild("content")
  content: ElementRef;

  constructor(public dataService: DataService) {}

  animate() {
    const transitions: gsap.TweenVars = {
      opacity: 0,
      y: 80,
      duration: 0.1,
      scrollTrigger: this.section.nativeElement,
    };
    TweenLite.from(this.heading.nativeElement, 1, transitions);
    TweenLite.from(this.content.nativeElement, 1, {
      ...transitions,
      delay: 0.1,
    });
  }

  ngOnInit(): void {
    console.log(document.documentElement.clientHeight);
    gsap.registerPlugin(ScrollTrigger);
    setTimeout(() => {
      this.animate();
    });
  }
}
