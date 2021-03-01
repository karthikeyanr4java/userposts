import { Component, OnInit } from '@angular/core';
import { Post } from './dto/Post';
import { PostserviceService } from './service/postservice.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: Post;

  constructor(private postservice: PostserviceService) { }

  ngOnInit(): void {
    this.post = new Post;
  }

  public publish(): void {
    this.postservice.publishPost(this.post).subscribe(
      res => {
        console.log(JSON.stringify(res));
      }
    );
  }
}
