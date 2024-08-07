import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss", "./navbar.component_media.scss"],
})
export class NavbarComponent implements OnInit {
  constructor(public dataService: DataService) {}

  ngOnInit(): void {}
}
