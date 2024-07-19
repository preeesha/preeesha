import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "sidebars",
  templateUrl: "./sidebars.component.html",
  styleUrls: ["./sidebars.component.scss", "./sidebars.component_media.scss"],
})
export class SidebarsComponent implements OnInit {
  constructor(public dataService: DataService) {}

  ngOnInit(): void {}
}
