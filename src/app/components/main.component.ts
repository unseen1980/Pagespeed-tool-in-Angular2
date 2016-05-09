/// <reference path="../../../typings/browser.d.ts" />

import {bootstrap}    from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {AppComponent} from './app.component';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';

/* Avoid: 'error TS2304: Cannot find name <type>' during compilation */
///<reference path="../../typings/browser/ambient/es6-shim/es6-shim.d.ts"/>

import {provide} from "@angular/core";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";

bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS]);