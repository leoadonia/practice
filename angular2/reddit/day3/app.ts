import {bootstrap} from "angular2/platform/browser";
import {Component} from "angular2/core";

@Component({
    selector: 'reddit',
    template: `
    <form role="form">
        <div class="form-group">
            <h3>Add a link</h3>
        </div>
        <div class="form-group">
            <label for="titleInput">Title</label>
            <input type="text" class="form-control" id="titleInput" placeholder="title of article">
        </div>
        <div class="form-group">
            <label for="linkInput">Link</label>
            <input type="text" class="form-control" id="linkInput" placeholder="link of article">
        </div>
        <button class="btn btn-info">Submit</button>
    </form>
    `
})
class RedditApp {}

bootstrap(RedditApp);

