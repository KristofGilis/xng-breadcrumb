import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';

import { DataService } from '../../core/data.service';
import { Mentor } from '../../shared/models/mentor';

@Component({
  selector: 'app-mentor-details',
  templateUrl: './mentor-details.component.html',
  styleUrls: ['./mentor-details.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MentorDetailsComponent implements OnInit {
  mentor: Mentor;
  constructor(
    private breadcrumbService: BreadcrumbService,
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getMentor();
  }

  getMentor() {
    const mentorId = this.route.snapshot.paramMap.get('id');

    this.dataService.getMentor(mentorId).subscribe((response) => {
      this.mentor = response;
      this.breadcrumbService.set('mentor/:id', this.mentor.name);
    });
  }

  editMentor() {
    this.router.navigate(['./edit'], {
      relativeTo: this.route,
      queryParams: { type: 'edit' },
    });
  }
}
