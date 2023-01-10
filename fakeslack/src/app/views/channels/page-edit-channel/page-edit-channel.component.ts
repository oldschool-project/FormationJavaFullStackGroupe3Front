import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Channel } from 'src/app/core/models/chanel';
import { ChannelsService } from 'src/app/core/services/channels.service';

@Component({
  selector: 'app-page-edit-channel',
  templateUrl: './page-edit-channel.component.html',
  styleUrls: ['./page-edit-channel.component.scss'],
})
export class PageEditChannelComponent {
  public form!: FormGroup;
  public id: number;
  public items$: Observable<Channel>;

  constructor(
    private formBuilder: FormBuilder,
    private channelsService: ChannelsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.items$ = this.channelsService.getItemById(this.id).pipe(
      tap((channel) => {
        this.form = this.formBuilder.group({
          name: [channel.name],
          id: [channel.id],
        });
      })
    );
  }
  public onSubmit(): void {
    this.channelsService.update(this.form.value).subscribe(() => {
      this.router.navigate(['chanels']);
    });
  }
}
