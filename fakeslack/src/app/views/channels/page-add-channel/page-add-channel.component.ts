import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Channel } from 'src/app/core/models/chanel';
import { ChannelsService } from 'src/app/core/services/channels.service';

@Component({
  selector: 'app-page-add-channel',
  templateUrl: './page-add-channel.component.html',
  styleUrls: ['./page-add-channel.component.scss'],
})
export class PageAddChannelComponent {
  public channel: Channel;
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private channelsService: ChannelsService,
    private router: Router
  ) {
    this.channel = new Channel();

    this.form = this.formBuilder.group({
      name: [this.channel.name],
      id: [this.channel.id],
    });
  }

  public onSubmit() {
    this.channelsService.add(this.form.value).subscribe(() => {
      this.router.navigate(['channels']);
    });
  }
}
