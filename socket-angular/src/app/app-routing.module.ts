import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YamiCodeSocketComponent } from './components/yami-code-socket/yami-code-socket.component';

const routes: Routes = [
  { path: '', component: YamiCodeSocketComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
