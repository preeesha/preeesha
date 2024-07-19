import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { DataService } from "../../../services/data.service";
import { gsap, TweenLite } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

@Component({
  selector: "work",
  templateUrl: "./work.component.html",
  styleUrls: ["./work.component.scss", "./work.component_media.scss"],
})
export class WorkComponent implements OnInit {
  @ViewChild("mainHeading")
  mainHeading: ElementRef;
  @ViewChild("heading")
  heading: ElementRef;
  @ViewChild("archive")
  archive: ElementRef;
  @ViewChild("otherProjects")
  otherProjects: ElementRef;

  constructor(public dataService: DataService) {}

  animate() {
    let transitions: gsap.TweenVars = {
      opacity: 0,
      y: 60,
      scrollTrigger: this.mainHeading.nativeElement,
    };
    // Featured Projects
    TweenLite.from(this.mainHeading.nativeElement, 1, transitions);
    this.dataService.featuredProjects.forEach((project) => {
      let projectElement = document.getElementById(
        project.name.replace(" ", "-")
      );
      if (!projectElement) return;
      TweenLite.from(projectElement, 1, {
        ...transitions,
        delay: 0.3,
        scrollTrigger: projectElement,
      });
    });
    // Other Projects
    transitions = { ...transitions, scrollTrigger: this.heading.nativeElement };
    TweenLite.from(this.heading.nativeElement, 1, transitions);
    TweenLite.from(this.archive.nativeElement, 1, {
      ...transitions,
      delay: 0.2,
    });
    TweenLite.from(this.otherProjects.nativeElement, 1, {
      ...transitions,
      delay: 0.3,
    });
  }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    setTimeout(() => {
      this.animate();
    });
  }
}
