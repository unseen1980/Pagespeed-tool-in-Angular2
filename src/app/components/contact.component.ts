import { Component } from 'angular2/core';

@Component({
    selector: 'contact',
    template: `
    <main style="min-height: 80%;">
        <div class="row">
            <form class="col s12">
                <div class="row">
                    <div class="input-field col s6">
                        <input id="first_name" type="text" class="validate">
                        <label for="first_name">First Name</label>
                    </div>
                    <div class="input-field col s6">
                        <input id="last_name" type="text" class="validate">
                        <label for="last_name">Last Name</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="email" type="email" class="validate">
                        <label for="email">Email</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <textarea id="textarea1" class="materialize-textarea"></textarea>
                        <label for="textarea1">Textarea</label>
                    </div>
                </div>
                <button class="btn waves-effect waves-light" type="submit" name="action">
                    Submit <i class="material-icons right">send</i>
                </button>
            </form>
        </div>
    </main> 
    `
})
export class ContactComponent {
    constructor() { }
}