import {Component, Input} from '@angular/core';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent{
  //@Input() posts;
  posts = [
    {title: 'Primeiro', content: 'aaaaaaaaaaa' },
    {title: 'Segundo', content: 'bbbbbbbbbbb' },
    {title: 'terceiro', content: 'cccccccccccccc' },
    {title: 'quarto', content: 'dddddddddddddddd' },
  ]



  /*storedPosts = []
  onPostAdded (post){
  //  @Input() storedPosts = []
  }*/

}
