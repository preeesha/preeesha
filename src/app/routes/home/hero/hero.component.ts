import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { DataService } from "../../../services/data.service";
import { TweenLite } from "gsap";

@Component({
  selector: "hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.scss", "./hero.component_media.scss"],
})
export class HeroComponent implements OnInit {
  @ViewChild("section")
  section: ElementRef;
  @ViewChild("nameHead")
  nameHead: ElementRef;
  @ViewChild("name")
  name: ElementRef;
  @ViewChild("teaser")
  teaser: ElementRef;
  @ViewChild("description")
  description: ElementRef;
  @ViewChild("socials")
  socials: ElementRef;
  @ViewChild("cta")
  cta: ElementRef;

  constructor(public dataService: DataService) {}

  animate() {
    const transitions = {
      opacity: 0,
      y: 60,
      duration: 0.1,
      scrollTrigger: this.section.nativeElement,
    };
    TweenLite.from(this.nameHead.nativeElement, 1, transitions);
    TweenLite.from(this.name.nativeElement, 1, {
      ...transitions,
      delay: 0.1,
    });
    TweenLite.from(this.teaser.nativeElement, 1, {
      ...transitions,
      delay: 0.2,
    });
    TweenLite.from(this.description.nativeElement, 1, {
      ...transitions,
      delay: 0.3,
    });
    TweenLite.from(this.socials.nativeElement, 1, {
      ...transitions,
      delay: 0.4,
    });
    TweenLite.from(this.cta.nativeElement, 1, {
      ...transitions,
      delay: 1.1,
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.animate();
    });
  }
}
