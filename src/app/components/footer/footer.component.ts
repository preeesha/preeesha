import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  @ViewChild("content")
  content: ElementRef;

  constructor() {}

  animate() {}

  ngOnInit(): void {}
}
