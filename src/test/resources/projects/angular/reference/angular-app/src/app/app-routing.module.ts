/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2018 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from "./components/main-content/main-content.component";

import { environment } from '../../src/environments/environment';

const CONTEXT_PATH = environment.CONTEXT_PATH;

const routes: Routes = [
    {
      path: CONTEXT_PATH + 'content/test-spa-angular-project/en/home.html',
      component: MainContentComponent,
      data: {
        path: '/' + CONTEXT_PATH + 'content/test-spa-angular-project/en/home'
      }
    },
    {
      path: CONTEXT_PATH +'content/test-spa-angular-project/en.html',
      redirectTo: '/' + CONTEXT_PATH + 'content/test-spa-angular-project/en/home.html'
    },
    {
      path: '',
      redirectTo: '/' + CONTEXT_PATH + 'content/test-spa-angular-project/en/home.html',
      pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(
      routes
    )],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}