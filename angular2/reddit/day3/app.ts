import {bootstrap} from "angular2/platform/browser";
import {Component} from "angular2/core";

@Component({
    selector: 'reddit-article',
    host: {
        class: 'row'
    },
    template: `
    <div class="container">
        <div class="row">
            <div class="col-md-2 text-center" style="background-color: #eee;">
                <h2>{{votes}}</h2>
                <h4>POINTS</h4>
            </div>
            <div class="col-md-10">
                <div style="margin-left: 16px;">
                    <a href="{{link}}"><h4>{{title}}</h4></a>
                </div>
                <ul class="nav navbar-nav pull-left">
                    <li>
                        <a href (click)="voteUp()">
                            <li class="glyphicon glyphicon-arrow-up"></li>
                            upvote
                        </a>
                    </li>
                    <li>
                        <a href (click)="voteDown()">
                            <li class="glyphicon glyphicon-arrow-down"></li>
                            downvote
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    `
})
class ArticleComponent {
    // 点赞数
    votes: number;

    title: string;

    link: string;

    constructor() {
        this.votes = 10;
        this.title = 'angular2';
        this.link = 'http://angular.io';
    }

    voteUp() {
        this.votes += 1;
        return false;
    }

    voteDown() {
        if(this.votes > 0) {
            this.votes -= 1;
        }

        return false;
    }
}

@Component({
    selector: 'reddit',
    directives: [ArticleComponent],
    template: `
    <form role="form">
        <div class="form-group">
            <h3>Add a link</h3>
        </div>
        <div class="form-group">
            <label for="title">Title</label>
            <input type="text" class="form-control" name="title" placeholder="title of article" #newTitle>
        </div>
        <div class="form-group">
            <label for="link">Link</label>
            <input type="text" class="form-control" name="link" placeholder="link of article" #newLink>
        </div>
        <button class="btn btn-info" (click)="addArticle(newTitle, newLink)">Submit</button>
    </form>
    <reddit-article></reddit-article>
    `
})
class RedditApp {

    addArticle(title: HTMLInputElement, link: HTMLInputElement) {
        console.log(`adding article, title: ${title.value}, link: ${link.value}`);
    }
}

bootstrap(RedditApp);

